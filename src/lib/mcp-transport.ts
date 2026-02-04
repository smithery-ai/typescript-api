/**
 * Smithery Connect — Create an MCP connection that routes through Smithery Connect.
 *
 * Smithery Connect acts as a connection manager and credential vault, handling OAuth
 * orchestration with upstream MCP servers. This module provides a factory function
 * that creates a connection and returns a standard MCP SDK transport.
 *
 * @example
 * ```typescript
 * import { Client } from '@modelcontextprotocol/sdk/client/index.js';
 * import { createConnection, SmitheryAuthorizationError } from '@smithery/api/mcp';
 *
 * try {
 *   const { transport } = await createConnection({
 *     mcpUrl: 'https://server.smithery.ai/exa/mcp',
 *   });
 *
 *   const client = new Client({ name: 'my-app', version: '1.0.0' }, { capabilities: {} });
 *   await client.connect(transport);
 *
 *   const { tools } = await client.listTools();
 *   const result = await client.callTool({ name: 'my-tool', arguments: {} });
 * } catch (e) {
 *   if (e instanceof SmitheryAuthorizationError) {
 *     // The upstream MCP server requires OAuth — redirect the user
 *     console.log(`Please authorize: ${e.authorizationUrl}`);
 *     // After auth completes, retry with the same connectionId:
 *     // await createConnection({ connectionId: e.connectionId });
 *   }
 * }
 * ```
 */

import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { Smithery } from '../client';
import type { Connection } from '../resources/experimental/connect/connections';

export interface CreateConnectionOptions {
  /**
   * The Smithery client instance to use.
   * If not provided, a new client will be created using the SMITHERY_API_KEY environment variable.
   */
  client?: Smithery;

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
   * The upstream MCP server URL. Required when creating a new connection.
   * If connectionId is provided, this is used to create the connection if it doesn't exist.
   * If connectionId is not provided, this is required.
   */
  mcpUrl?: string;

  /**
   * Enable MCP init/initialized handshake to receive server version info.
   *
   * When `false` (default), skips the handshake for faster connection.
   * Smithery Connect is stateless, so the handshake is not required.
   *
   * Set to `true` if you need `client.getServerVersion()` or protocol
   * version negotiation.
   *
   * @default false
   */
  handshake?: boolean;
}

export interface SmitheryConnection {
  /** A ready-to-use MCP transport with auth headers configured. */
  transport: StreamableHTTPClientTransport;

  /** The connection ID (for reuse across sessions). */
  connectionId: string;

  /** The raw MCP endpoint URL (for non-MCP-SDK use cases). */
  url: string;
}

/**
 * Thrown when the upstream MCP server requires OAuth authorization.
 * Contains the authorization URL to redirect the user to, and the connection ID
 * to reuse when retrying after authorization completes.
 */
export class SmitheryAuthorizationError extends Error {
  override name = 'SmitheryAuthorizationError';

  constructor(
    message: string,
    public readonly authorizationUrl: string,
    public readonly connectionId: string,
  ) {
    super(message);
  }
}

/**
 * Creates a Smithery Connect connection and returns an MCP transport.
 *
 * This function handles connection creation/retrieval and returns a standard
 * `StreamableHTTPClientTransport` that can be used with any MCP SDK client.
 * Smithery Connect manages the upstream MCP server connection, including
 * OAuth credential storage and refresh.
 *
 * @throws {SmitheryAuthorizationError} If the upstream MCP server requires OAuth.
 *   The error contains `authorizationUrl` (where to redirect the user) and
 *   `connectionId` (to reuse when retrying after auth completes).
 */
export async function createConnection(options: CreateConnectionOptions): Promise<SmitheryConnection> {
  const client = options.client ?? new Smithery();

  // Validate: mcpUrl is required if connectionId is not provided
  if (!options.connectionId && !options.mcpUrl) {
    throw new Error('mcpUrl is required when connectionId is not provided');
  }

  // Resolve namespace
  const namespace = await resolveNamespace(client, options.namespace);

  // Create or fetch connection
  const connection = await resolveConnection(client, namespace, options.connectionId, options.mcpUrl);
  const connectionId = connection.connectionId;

  // Check connection status (present on create/set responses)
  if (connection.status) {
    if (connection.status.state === 'auth_required') {
      const { authorizationUrl } = connection.status;
      if (authorizationUrl) {
        throw new SmitheryAuthorizationError(
          `MCP server requires authorization. Please visit: ${authorizationUrl}`,
          authorizationUrl,
          connectionId,
        );
      }
      throw new Error('MCP server requires authorization.');
    }
    if (connection.status.state === 'error') {
      throw new Error(`MCP connection failed: ${connection.status.message}`);
    }
  } else if (!connection.serverInfo) {
    // No status field (e.g., fetched via get()) and no serverInfo means the
    // connection never initialized successfully — likely requires authorization.
    // Surface this early rather than returning a broken transport.
    throw new Error(
      'Connection is not initialized. The upstream MCP server may require authorization. ' +
        'Try creating a new connection with mcpUrl to get authorization details.',
    );
  }

  // Build the MCP endpoint URL
  const url = new URL(`/connect/${namespace}/${connectionId}/mcp`, client.baseURL).href;

  // Create transport with auth headers
  // Skip MCP init handshake by default (stateless server).
  // Setting sessionId tricks the SDK into thinking we're reconnecting.
  const transportOptions = {
    requestInit: {
      headers: {
        Authorization: `Bearer ${client.apiKey}`,
      },
    },
  };
  const transport = new StreamableHTTPClientTransport(
    new URL(url),
    options.handshake ? transportOptions : { ...transportOptions, sessionId: 'smithery-stateless' },
  );

  return { transport, connectionId, url };
}

async function resolveNamespace(client: Smithery, namespace?: string): Promise<string> {
  if (namespace) {
    return namespace;
  }

  const { namespaces } = await client.namespaces.list();
  if (namespaces.length > 0) {
    return namespaces[0]!.name;
  }

  const { name } = await client.namespaces.create();
  return name;
}

async function resolveConnection(
  client: Smithery,
  namespace: string,
  connectionId?: string,
  mcpUrl?: string,
): Promise<Connection> {
  if (connectionId) {
    // Connection ID provided: try to get, or create if mcpUrl is provided
    try {
      return await client.experimental.connect.connections.get(connectionId, { namespace });
    } catch (error) {
      if (mcpUrl) {
        return await client.experimental.connect.connections.set(connectionId, { namespace, mcpUrl });
      }
      throw error;
    }
  }

  // No connection ID: create a new connection with auto-generated ID
  return await client.experimental.connect.connections.create(namespace, { mcpUrl: mcpUrl! });
}
