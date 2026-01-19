// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Connections extends APIResource {
  /**
   * Create a new MCP connection with the given ID. Requires API key and namespace
   * ownership.
   *
   * @example
   * ```ts
   * const connection =
   *   await client.beta.connect.connections.create(
   *     'connectionId',
   *     {
   *       namespaceId: 'namespaceId',
   *       mcpUrl: 'https://mcp.example.com/sse',
   *       name: 'My MCP Server',
   *     },
   *   );
   * ```
   */
  create(
    connectionID: string,
    params: ConnectionCreateParams,
    options?: RequestOptions,
  ): APIPromise<Connection> {
    const { namespaceId, ...body } = params;
    return this._client.put(path`/connect/namespaces/${namespaceId}/connections/${connectionID}`, {
      body,
      ...options,
    });
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
   *     { namespaceId: 'namespaceId' },
   *   );
   * ```
   */
  retrieve(
    connectionID: string,
    params: ConnectionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Connection> {
    const { namespaceId } = params;
    return this._client.get(path`/connect/namespaces/${namespaceId}/connections/${connectionID}`, options);
  }

  /**
   * List all connections in a namespace. Requires service token with
   * connections:read scope.
   *
   * @example
   * ```ts
   * const connectionsListResponse =
   *   await client.beta.connect.connections.list('namespaceId');
   * ```
   */
  list(namespaceID: string, options?: RequestOptions): APIPromise<ConnectionsListResponse> {
    return this._client.get(path`/connect/namespaces/${namespaceID}/connections`, options);
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
   *     { namespaceId: 'namespaceId' },
   *   );
   * ```
   */
  delete(
    connectionID: string,
    params: ConnectionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ConnectionDeleteResponse> {
    const { namespaceId } = params;
    return this._client.delete(path`/connect/namespaces/${namespaceId}/connections/${connectionID}`, options);
  }
}

export interface Connection {
  /**
   * Developer-defined connection ID
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
   * Human-readable name
   */
  name: string;

  /**
   * Custom metadata for filtering connections
   */
  metadata?: { [key: string]: unknown };
}

export interface ConnectionDeleteResponse {
  success: true;
}

export interface ConnectionCreateParams {
  /**
   * Path param
   */
  namespaceId: string;

  /**
   * Body param: URL of the MCP server
   */
  mcpUrl: string;

  /**
   * Body param: Human-readable name
   */
  name: string;

  /**
   * Body param: Custom metadata for filtering connections
   */
  metadata?: { [key: string]: unknown };
}

export interface ConnectionRetrieveParams {
  namespaceId: string;
}

export interface ConnectionDeleteParams {
  namespaceId: string;
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
  };
}
