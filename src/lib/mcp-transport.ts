/**
 * SmitheryTransport - An MCP Transport that routes JSON-RPC messages through Smithery Connect.
 *
 * This allows you to use the official MCP SDK's Client class with Smithery Connect as the transport layer.
 *
 * **Important:** Smithery Connect handles MCP initialization server-side when a connection is created.
 * This transport lazily fetches/creates the connection on first message and uses its server info
 * to satisfy the MCP SDK's initialization flow without re-initializing the already-established connection.
 *
 * @example
 * ```typescript
 * import { Client } from '@modelcontextprotocol/sdk/client/index.js';
 * import Smithery from '@smithery/api';
 * import { SmitheryTransport } from '@smithery/api/mcp';
 *
 * const smithery = new Smithery({ apiKey: process.env.SMITHERY_API_KEY });
 * // Option 1: Let Smithery generate a connection ID and use default namespace
 * const transport = new SmitheryTransport({
 *   client: smithery,
 *   mcpUrl: 'https://mcp.example.com/sse',
 * });
 *
 * // Option 2: Use a specific namespace and connection ID
 * const transport2 = new SmitheryTransport({
 *   client: smithery,
 *   namespace: 'my-namespace',
 *   connectionId: 'my-connection',
 *   mcpUrl: 'https://mcp.example.com/sse',
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
import type { JSONRPCMessage, JSONRPCResponse, ServerCapabilities } from '@modelcontextprotocol/sdk/types.js';
import type { Smithery } from '../client';
import type { Connection } from '../resources/beta/connect/connections';

export interface SmitheryTransportOptions {
  /**
   * The Smithery client instance to use for making RPC calls.
   */
  client: Smithery;

  /**
   * The namespace for the Smithery Connect connection.
   * If not provided, uses the first existing namespace or creates a new one.
   */
  namespace?: string;

  /**
   * The connection ID for the Smithery Connect connection.
   * If not provided, a new connection will be created with an auto-generated ID.
   */
  connectionId?: string;

  /**
   * The MCP server URL. Required when creating a new connection.
   * If connectionId is provided, this is used to create the connection if it doesn't exist.
   * If connectionId is not provided, this is required and a new connection will be created.
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

function generateRandomId(length = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export class SmitheryTransport implements Transport {
  private _client: Smithery;
  private _namespace: string | undefined;
  private _connectionId: string | undefined;
  private _mcpUrl: string | undefined;
  private _started = false;
  private _closed = false;
  private _capabilities: ServerCapabilities;
  private _connection: Connection | null = null;

  onmessage?: (message: JSONRPCMessage) => void;
  onerror?: (error: Error) => void;
  onclose?: () => void;

  sessionId?: string;

  /**
   * Returns the connection ID. If no connectionId was provided in options,
   * this returns the auto-generated ID after the first message is sent.
   */
  get connectionId(): string | undefined {
    return this._connectionId;
  }

  constructor(options: SmitheryTransportOptions) {
    this._client = options.client;
    this._namespace = options.namespace;
    this._connectionId = options.connectionId;
    this._mcpUrl = options.mcpUrl;

    // Validate: mcpUrl is required if connectionId is not provided
    if (!this._connectionId && !this._mcpUrl) {
      throw new Error('mcpUrl is required when connectionId is not provided');
    }

    this._capabilities = options.capabilities ?? {
      // Default to advertising common capabilities
      // The actual MCP server behind Smithery Connect will handle the real capabilities
      tools: {},
      resources: {},
      prompts: {},
    };
  }

  async start(): Promise<void> {
    if (this._started) {
      throw new Error(
        'SmitheryTransport already started! If using Client class, note that connect() calls start() automatically.',
      );
    }
    if (this._closed) {
      throw new Error('Transport has been closed');
    }

    this._started = true;
  }

  /**
   * Lazily ensures a namespace is available.
   * If no namespace was provided, uses the first existing namespace or creates a new one.
   */
  private async _ensureNamespace(): Promise<string> {
    if (this._namespace) {
      return this._namespace;
    }

    const { namespaces } = await this._client.namespaces.list();
    if (namespaces.length > 0) {
      this._namespace = namespaces[0]!.name;
    } else {
      const name = `default-${generateRandomId()}`;
      await this._client.namespaces.create({ name });
      this._namespace = name;
    }
    return this._namespace;
  }

  /**
   * Lazily ensures the Smithery Connect connection exists.
   * Called on first message to defer network IO until actually needed.
   */
  private async _ensureConnection(): Promise<void> {
    if (this._connection) {
      return;
    }

    const namespace = await this._ensureNamespace();

    if (this._connectionId) {
      // Connection ID provided: try to retrieve, or create if mcpUrl is provided
      try {
        this._connection = await this._client.beta.connect.connections.retrieve(this._connectionId, {
          namespace,
        });
      } catch (error) {
        // If connection doesn't exist and we have mcpUrl, create it with the specified ID
        if (this._mcpUrl) {
          this._connection = await this._client.beta.connect.connections.set(this._connectionId, {
            namespace,
            mcpUrl: this._mcpUrl,
          });
        } else {
          throw error;
        }
      }
    } else {
      // No connection ID: create a new connection with auto-generated ID
      // mcpUrl is guaranteed to be present (validated in constructor)
      this._connection = await this._client.beta.connect.connections.create(namespace, {
        mcpUrl: this._mcpUrl!,
      });
      // Store the generated connection ID for subsequent RPC calls
      this._connectionId = this._connection.connectionId;
    }
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

    // Lazily ensure connection exists before processing any message
    await this._ensureConnection();

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
      // _namespace is guaranteed to be set after _ensureConnection
      const rpcParams: Parameters<typeof this._client.beta.connect.rpc.call>[1] = {
        namespace: this._namespace!,
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

      const response = await this._client.beta.connect.rpc.call(this._connectionId!, rpcParams);

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
