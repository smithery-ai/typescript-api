// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as McpAPI from './mcp';
import { JsonRpcRequest, JsonRpcResponse, Mcp, McpCallParams } from './mcp';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Connections extends APIResource {
  mcp: McpAPI.Mcp = new McpAPI.Mcp(this._client);

  /**
   * Create a new MCP connection with an auto-generated ID. Requires API key and
   * namespace ownership.
   *
   * @example
   * ```ts
   * const connection = await client.connections.create(
   *   'namespace',
   *   { mcpUrl: 'https://mcp.example.com/sse' },
   * );
   * ```
   */
  create(namespace: string, body: ConnectionCreateParams, options?: RequestOptions): APIPromise<Connection> {
    return this._client.post(path`/connect/${namespace}`, { body, ...options });
  }

  /**
   * List all connections in a namespace. Supports filtering by metadata using
   * `metadata.{key}={value}` query params (e.g., `metadata.userId=alice`).
   *
   * @example
   * ```ts
   * const connectionsListResponse =
   *   await client.connections.list('namespace');
   * ```
   */
  list(
    namespace: string,
    query: ConnectionListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ConnectionsListResponse> {
    return this._client.get(path`/connect/${namespace}`, { query, ...options });
  }

  /**
   * Delete a connection and terminate its MCP session. Requires API key and
   * namespace ownership.
   *
   * @example
   * ```ts
   * const connection = await client.connections.delete(
   *   'connectionId',
   *   { namespace: 'namespace' },
   * );
   * ```
   */
  delete(
    connectionID: string,
    params: ConnectionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionDeleteResponse> {
    const { namespace } = params;
    return this._client.delete(path`/connect/${namespace}/${connectionID}`, options);
  }

  /**
   * Get details for a specific connection. Requires service token with
   * connections:read scope.
   *
   * @example
   * ```ts
   * const connection = await client.connections.get(
   *   'connectionId',
   *   { namespace: 'namespace' },
   * );
   * ```
   */
  get(connectionID: string, params: ConnectionGetParams, options?: RequestOptions): APIPromise<Connection> {
    const { namespace } = params;
    return this._client.get(path`/connect/${namespace}/${connectionID}`, options);
  }

  /**
   * Create or update an MCP connection with the given ID. mcpUrl is required when
   * creating a new connection, but optional when updating (omit to keep the existing
   * URL). Returns 409 if a different mcpUrl is provided - delete and recreate to
   * change URL. Requires API key and namespace ownership.
   *
   * @example
   * ```ts
   * const connection = await client.connections.set(
   *   'connectionId',
   *   { namespace: 'namespace' },
   * );
   * ```
   */
  set(connectionID: string, params: ConnectionSetParams, options?: RequestOptions): APIPromise<Connection> {
    const { namespace, ...body } = params;
    return this._client.put(path`/connect/${namespace}/${connectionID}`, { body, ...options });
  }
}

export interface Connection {
  /**
   * Connection ID (auto-generated or developer-defined)
   */
  connectionId: string;

  /**
   * MCP server URL
   */
  mcpUrl: string;

  metadata: { [key: string]: unknown } | null;

  /**
   * Human-readable name
   */
  name: string;

  /**
   * ISO 8601 timestamp
   */
  createdAt?: string;

  iconUrl?: string | null;

  /**
   * Server information from MCP initialization (name, version)
   */
  serverInfo?: Connection.ServerInfo;

  /**
   * Last known connection status
   */
  status?:
    | Connection.ConnectionStatusConnected
    | Connection.ConnectionStatusAuthRequired
    | Connection.ConnectionStatusError;
}

export namespace Connection {
  /**
   * Server information from MCP initialization (name, version)
   */
  export interface ServerInfo {
    name: string;

    version: string;

    description?: string;

    icons?: Array<ServerInfo.Icon>;

    title?: string;

    websiteUrl?: string;
  }

  export namespace ServerInfo {
    export interface Icon {
      src: string;

      mimeType?: string;

      sizes?: Array<string>;

      theme?: 'light' | 'dark';
    }
  }

  export interface ConnectionStatusConnected {
    state: 'connected';
  }

  export interface ConnectionStatusAuthRequired {
    state: 'auth_required';

    /**
     * URL to redirect user for OAuth authorization
     */
    authorizationUrl?: string;
  }

  export interface ConnectionStatusError {
    /**
     * Error message
     */
    message: string;

    state: 'error';
  }
}

export interface ConnectionsListResponse {
  connections: Array<Connection>;

  /**
   * Cursor for next page, null if no more results
   */
  nextCursor: string | null;
}

export interface CreateConnectionRequest {
  /**
   * URL of the MCP server
   */
  mcpUrl: string;

  /**
   * Custom headers to send with MCP requests (stored securely, not returned in
   * responses)
   */
  headers?: { [key: string]: string };

  /**
   * Custom metadata for filtering connections
   */
  metadata?: { [key: string]: unknown };

  /**
   * Human-readable name (optional, defaults to connection ID)
   */
  name?: string;

  /**
   * Webhook callback URL for server-to-client messages (HTTPS). When set, the MCP
   * server will POST notifications and requests to this URL instead of using SSE.
   * This field is unstable and may change before GA.
   */
  unstableCallbackUrl?: string;
}

export interface ConnectionDeleteResponse {
  success: true;
}

export interface ConnectionCreateParams {
  /**
   * URL of the MCP server
   */
  mcpUrl: string;

  /**
   * Custom headers to send with MCP requests (stored securely, not returned in
   * responses)
   */
  headers?: { [key: string]: string };

  /**
   * Custom metadata for filtering connections
   */
  metadata?: { [key: string]: unknown };

  /**
   * Human-readable name (optional, defaults to connection ID)
   */
  name?: string;

  /**
   * Webhook callback URL for server-to-client messages (HTTPS). When set, the MCP
   * server will POST notifications and requests to this URL instead of using SSE.
   * This field is unstable and may change before GA.
   */
  unstableCallbackUrl?: string;
}

export interface ConnectionListParams {
  /**
   * Pagination cursor from previous response's nextCursor
   */
  cursor?: string;

  /**
   * Maximum number of items to return (default 100, max 100)
   */
  limit?: number;

  /**
   * Filter by exact MCP server URL
   */
  mcpUrl?: string;

  /**
   * Filter by exact connection name
   */
  name?: string;
}

export interface ConnectionDeleteParams {
  namespace: string;
}

export interface ConnectionGetParams {
  namespace: string;
}

export interface ConnectionSetParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param: Custom headers to send with MCP requests (stored securely, not
   * returned in responses)
   */
  headers?: { [key: string]: string };

  /**
   * Body param: URL of the MCP server. Required when creating a new connection.
   * Optional when updating — omit to keep the existing URL.
   */
  mcpUrl?: string;

  /**
   * Body param: Custom metadata for filtering connections
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: Human-readable name (optional, defaults to connection ID)
   */
  name?: string;

  /**
   * Body param: Webhook callback URL for server-to-client messages (HTTPS). When
   * set, the MCP server will POST notifications and requests to this URL instead of
   * using SSE. This field is unstable and may change before GA.
   */
  unstableCallbackUrl?: string;
}

Connections.Mcp = Mcp;

export declare namespace Connections {
  export {
    type Connection as Connection,
    type ConnectionsListResponse as ConnectionsListResponse,
    type CreateConnectionRequest as CreateConnectionRequest,
    type ConnectionDeleteResponse as ConnectionDeleteResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionDeleteParams as ConnectionDeleteParams,
    type ConnectionGetParams as ConnectionGetParams,
    type ConnectionSetParams as ConnectionSetParams,
  };

  export {
    Mcp as Mcp,
    type JsonRpcRequest as JsonRpcRequest,
    type JsonRpcResponse as JsonRpcResponse,
    type McpCallParams as McpCallParams,
  };
}
