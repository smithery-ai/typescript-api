// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Connections extends APIResource {
  /**
   * Create a new MCP connection with an auto-generated ID. Requires API key and
   * namespace ownership.
   *
   * @example
   * ```ts
   * const connection =
   *   await client.beta.connect.connections.create(
   *     'namespace',
   *     { mcpUrl: 'https://mcp.example.com/sse' },
   *   );
   * ```
   */
  create(namespace: string, body: ConnectionCreateParams, options?: RequestOptions): APIPromise<Connection> {
    return this._client.post(path`/connect/connect/${namespace}`, { body, ...options });
  }

  /**
   * Get details for a specific connection. Requires service token with
   * connections:read scope.
   *
   * @example
   * ```ts
   * const connection =
   *   await client.beta.connect.connections.retrieve(
   *     'connectionId',
   *     { namespace: 'namespace' },
   *   );
   * ```
   */
  retrieve(
    connectionID: string,
    params: ConnectionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Connection> {
    const { namespace } = params;
    return this._client.get(path`/connect/connect/${namespace}/${connectionID}`, options);
  }

  /**
   * List all connections in a namespace. Requires service token with
   * connections:read scope.
   *
   * @example
   * ```ts
   * const connectionsListResponse =
   *   await client.beta.connect.connections.list('namespace');
   * ```
   */
  list(namespace: string, options?: RequestOptions): APIPromise<ConnectionsListResponse> {
    return this._client.get(path`/connect/connect/${namespace}`, options);
  }

  /**
   * Delete a connection and terminate its MCP session. Requires API key and
   * namespace ownership.
   *
   * @example
   * ```ts
   * const connection =
   *   await client.beta.connect.connections.delete(
   *     'connectionId',
   *     { namespace: 'namespace' },
   *   );
   * ```
   */
  delete(
    connectionID: string,
    params: ConnectionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionDeleteResponse> {
    const { namespace } = params;
    return this._client.delete(path`/connect/connect/${namespace}/${connectionID}`, options);
  }

  /**
   * Create a new MCP connection with the given ID. Requires API key and namespace
   * ownership.
   *
   * @example
   * ```ts
   * const connection =
   *   await client.beta.connect.connections.createOrUpdate(
   *     'connectionId',
   *     {
   *       namespace: 'namespace',
   *       mcpUrl: 'https://mcp.example.com/sse',
   *     },
   *   );
   * ```
   */
  createOrUpdate(
    connectionID: string,
    params: ConnectionCreateOrUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Connection> {
    const { namespace, ...body } = params;
    return this._client.put(path`/connect/connect/${namespace}/${connectionID}`, { body, ...options });
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
   * Connection status after initialization (only returned on create)
   */
  status?: Connection.State | Connection.UnionMember1 | Connection.UnionMember2;
}

export namespace Connection {
  export interface State {
    state: 'connected';
  }

  export interface UnionMember1 {
    state: 'auth_required';

    /**
     * URL to redirect user for OAuth authorization
     */
    authorizationUrl?: string;
  }

  export interface UnionMember2 {
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
   * Custom metadata for filtering connections
   */
  metadata?: { [key: string]: unknown };

  /**
   * Human-readable name (optional, defaults to connection ID)
   */
  name?: string;
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
   * Custom metadata for filtering connections
   */
  metadata?: { [key: string]: unknown };

  /**
   * Human-readable name (optional, defaults to connection ID)
   */
  name?: string;
}

export interface ConnectionRetrieveParams {
  namespace: string;
}

export interface ConnectionDeleteParams {
  namespace: string;
}

export interface ConnectionCreateOrUpdateParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param: URL of the MCP server
   */
  mcpUrl: string;

  /**
   * Body param: Custom metadata for filtering connections
   */
  metadata?: { [key: string]: unknown };

  /**
   * Body param: Human-readable name (optional, defaults to connection ID)
   */
  name?: string;
}

export declare namespace Connections {
  export {
    type Connection as Connection,
    type ConnectionsListResponse as ConnectionsListResponse,
    type CreateConnectionRequest as CreateConnectionRequest,
    type ConnectionDeleteResponse as ConnectionDeleteResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionRetrieveParams as ConnectionRetrieveParams,
    type ConnectionDeleteParams as ConnectionDeleteParams,
    type ConnectionCreateOrUpdateParams as ConnectionCreateOrUpdateParams,
  };
}
