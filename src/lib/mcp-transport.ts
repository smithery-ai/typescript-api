/**
 * SmitheryConnectTransport - An MCP Transport that routes JSON-RPC messages through Smithery Connect.
 *
 * This allows you to use the official MCP SDK's Client class with Smithery Connect as the transport layer.
 *
 * **Important:** Smithery Connect handles MCP initialization server-side when a connection is created.
 * This transport fetches the connection's server info on start() and uses it to satisfy the
 * MCP SDK's initialization flow without re-initializing the already-established connection.
 *
 * @example
 * ```typescript
 * import { Client } from '@modelcontextprotocol/sdk/client/index.js';
 * import Smithery from '@smithery/api';
 * import { SmitheryConnectTransport } from '@smithery/api/mcp';
 *
 * const smithery = new Smithery({ apiKey: process.env.SMITHERY_API_KEY });
 * const transport = new SmitheryConnectTransport({
 *   client: smithery,
 *   namespace: 'my-namespace',
 *   connectionId: 'my-connection',
 *   mcpUrl: 'https://mcp.example.com/sse', // Creates connection if it doesn't exist
 * });
 *
 * const mcpClient = new Client({ name: 'my-app', version: '1.0.0' }, { capabilities: {} });
 * await mcpClient.connect(transport);
 *
 * // Now use the MCP SDK's ergonomic API
 * const { tools } = await mcpClient.listTools();
 * const result = await mcpClient.callTool({ name: 'my-tool', arguments: {} });
 * ```
 */

import type { Transport, TransportSendOptions } from '@modelcontextprotocol/sdk/shared/transport.js';
import type { JSONRPCMessage, JSONRPCResponse } from '@modelcontextprotocol/sdk/types.js';
import type { Smithery } from '../client';
import type { Connection } from '../resources/beta/connect/connections';

/**
 * MCP server capabilities. Used to provide server info for the initialize response.
 */
export interface ServerCapabilities {
  tools?: Record<string, unknown>;
  resources?: Record<string, unknown>;
  prompts?: Record<string, unknown>;
  logging?: Record<string, unknown>;
  experimental?: Record<string, unknown>;
}

export interface SmitheryConnectTransportOptions {
  /**
   * The Smithery client instance to use for making RPC calls.
   */
  client: Smithery;

  /**
   * The namespace for the Smithery Connect connection.
   */
  namespace: string;

  /**
   * The connection ID for the Smithery Connect connection.
   */
  connectionId: string;

  /**
   * The MCP server URL. Required if the connection doesn't exist yet.
   * If provided and the connection doesn't exist, it will be created on start().
   */
  mcpUrl?: string;

  /**
   * Optional server capabilities for the initialize response.
   * If not provided, defaults to advertising tools, resources, and prompts support.
   */
  capabilities?: ServerCapabilities;
}

// MCP protocol version
const LATEST_PROTOCOL_VERSION = '2024-11-05';

export class SmitheryConnectTransport implements Transport {
  private _client: Smithery;
  private _namespace: string;
  private _connectionId: string;
  private _mcpUrl: string | undefined;
  private _started = false;
  private _closed = false;
  private _capabilities: ServerCapabilities;
  private _connection: Connection | null = null;

  onmessage?: (message: JSONRPCMessage) => void;
  onerror?: (error: Error) => void;
  onclose?: () => void;

  sessionId?: string;

  constructor(options: SmitheryConnectTransportOptions) {
    this._client = options.client;
    this._namespace = options.namespace;
    this._connectionId = options.connectionId;
    this._mcpUrl = options.mcpUrl;
    this._capabilities = options.capabilities ?? {
      // Default to advertising common capabilities
      // The actual MCP server behind Smithery Connect will handle the real capabilities
      tools: {},
      resources: {},
      prompts: {},
    };
  }

  async start(): Promise<void> {
    if (this._closed) {
      throw new Error('Transport has been closed');
    }

    // Try to retrieve existing connection, or create if mcpUrl is provided
    try {
      this._connection = await this._client.beta.connect.connections.retrieve(this._connectionId, {
        namespace: this._namespace,
      });
    } catch (error) {
      // If connection doesn't exist and we have mcpUrl, create it
      if (this._mcpUrl) {
        this._connection = await this._client.beta.connect.connections.set(this._connectionId, {
          namespace: this._namespace,
          mcpUrl: this._mcpUrl,
        });
      } else {
        throw error;
      }
    }

    this._started = true;
  }

  async send(message: JSONRPCMessage, _options?: TransportSendOptions): Promise<void> {
    if (!this._started) {
      throw new Error('Transport not started');
    }
    if (this._closed) {
      throw new Error('Transport has been closed');
    }

    // Only handle outgoing requests and notifications (messages with a method)
    if (!('method' in message)) {
      return;
    }

    // Intercept 'initialize' request - Smithery Connect handles initialization server-side
    // Return the real serverInfo from the connection
    if (message.method === 'initialize' && 'id' in message && message.id !== undefined) {
      if (this.onmessage) {
        const serverInfo = this._connection?.serverInfo ?? {
          name: 'smithery-connect',
          version: '1.0.0',
        };

        const initializeResponse: JSONRPCResponse = {
          jsonrpc: '2.0',
          id: message.id,
          result: {
            protocolVersion: LATEST_PROTOCOL_VERSION,
            serverInfo: {
              name: serverInfo.name,
              version: serverInfo.version,
            },
            capabilities: this._capabilities,
          } as Record<string, unknown>,
        };
        // Use setTimeout to make this async and match real transport behavior
        setTimeout(() => this.onmessage!(initializeResponse), 0);
      }
      return;
    }

    // Intercept 'notifications/initialized' - no response needed, just acknowledge
    if (message.method === 'notifications/initialized') {
      return;
    }

    try {
      // Build the RPC call params, only including id if it's defined
      const rpcParams: Parameters<typeof this._client.beta.connect.rpc.call>[1] = {
        namespace: this._namespace,
        jsonrpc: '2.0',
        method: message.method,
      };

      // Only add id if present (for requests, not notifications)
      if ('id' in message && message.id !== undefined) {
        rpcParams.id = message.id;
      }

      // Only add params if present
      if ('params' in message && message.params !== undefined) {
        rpcParams.params = message.params as Record<string, unknown>;
      }

      const response = await this._client.beta.connect.rpc.call(this._connectionId, rpcParams);

      // Route the response back via onmessage callback for requests (messages with an id)
      if ('id' in message && message.id !== undefined && this.onmessage) {
        const jsonRpcResponse: JSONRPCResponse = {
          jsonrpc: '2.0',
          id: response.id!,
          result: response.result as Record<string, unknown>,
        };
        this.onmessage(jsonRpcResponse);
      }
    } catch (error) {
      const normalizedError = error instanceof Error ? error : new Error(String(error));

      // For requests, send an error response via onmessage
      if ('id' in message && message.id !== undefined && this.onmessage) {
        const errorResponse: JSONRPCResponse = {
          jsonrpc: '2.0',
          id: message.id,
          error: {
            code: -32603, // Internal error
            message: normalizedError.message,
          },
        };
        this.onmessage(errorResponse);
      }

      // Also report via onerror callback
      this.onerror?.(normalizedError);
    }
  }

  async close(): Promise<void> {
    this._closed = true;
    this._started = false;
    this.onclose?.();
  }
}
