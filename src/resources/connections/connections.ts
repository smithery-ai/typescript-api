// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as McpAPI from './mcp';
import { JsonRpcRequest, JsonRpcResponse, Mcp } from './mcp';
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
   * );
   * ```
   */
  create(
    namespace: string,
    body: ConnectionCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Connection> {
    return this._client.post(path`/connect/${namespace}`, { body, ...options });
  }

  /**
   * List all connections in a namespace. Supports filtering by metadata using
   * `metadata.{key}={value}` query params.
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
}

export interface Connection {
  /**
   * Connection ID (auto-generated or developer-defined)
   */
  connectionId: string;

  /**
   * MCP server URL. Null for uplink connections.
   */
  mcpUrl: string | null;

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
   * Mock-mode config: `{enabled: true, scenario?}` when LLM-simulated, absent
   * otherwise.
   */
  mock?: Connection.Mock;

  /**
   * Server information from MCP initialization (name, version)
   */
  serverInfo?: Connection.ServerInfo;

  /**
   * Last known connection status
   */
  status?:
    | Connection.ConnectionStatusConnected
    | Connection.ConnectionStatusDisconnected
    | Connection.ConnectionStatusAuthRequired
    | Connection.ConnectionStatusInputRequired
    | Connection.ConnectionStatusError;

  /**
   * Connection transport
   */
  transport?: 'http' | 'uplink';
}

export namespace Connection {
  /**
   * Mock-mode config: `{enabled: true, scenario?}` when LLM-simulated, absent
   * otherwise.
   */
  export interface Mock {
    /**
     * Turn mock mode on for this connection.
     */
    enabled: boolean;

    /**
     * Natural-language starting-state for the simulator (threaded into the LLM system
     * prompt so generated data is consistent with the scenario across calls).
     */
    scenario?: string;
  }

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

  export interface ConnectionStatusDisconnected {
    state: 'disconnected';
  }

  export interface ConnectionStatusAuthRequired {
    state: 'auth_required';

    /**
     * @deprecated Deprecated compatibility alias for setupUrl
     */
    authorizationUrl?: string;

    /**
     * Hosted Smithery URL for completing setup and OAuth
     */
    setupUrl?: string;
  }

  export interface ConnectionStatusInputRequired {
    http: ConnectionStatusInputRequired.HTTP;

    missing: ConnectionStatusInputRequired.Missing;

    state: 'input_required';

    /**
     * Hosted Smithery URL for completing setup in the browser
     */
    setupUrl?: string;
  }

  export namespace ConnectionStatusInputRequired {
    export interface HTTP {
      headers?: { [key: string]: HTTP.Headers };

      query?: { [key: string]: HTTP.Query };
    }

    export namespace HTTP {
      export interface Headers {
        label: string;

        description?: string;

        required?: boolean;
      }

      export interface Query {
        label: string;

        description?: string;

        required?: boolean;
      }
    }

    export interface Missing {
      headers: Array<string>;

      query: Array<string>;
    }
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
   * Custom headers to send with MCP requests (stored securely, not returned in
   * responses)
   */
  headers?: { [key: string]: string };

  /**
   * URL of the MCP server. Required for HTTP connections. Omit for uplink
   * connections.
   */
  mcpUrl?: string;

  /**
   * Custom metadata for filtering connections
   */
  metadata?: { [key: string]: unknown };

  /**
   * Run this connection in mock mode. Tool calls are LLM-simulated against the
   * registry's scanned schemas and never reach the upstream server. Provide an
   * optional `scenario` to seed the simulator with a starting-state description.
   * Registry servers only; frozen at creation (cannot be toggled via PUT).
   */
  mock?: CreateConnectionRequest.Mock;

  /**
   * Human-readable name (optional, defaults to connection ID)
   */
  name?: string;

  /**
   * Connection transport. Use `uplink` for a local server paired over Smithery CLI.
   */
  transport?: 'http' | 'uplink';
}

export namespace CreateConnectionRequest {
  /**
   * Run this connection in mock mode. Tool calls are LLM-simulated against the
   * registry's scanned schemas and never reach the upstream server. Provide an
   * optional `scenario` to seed the simulator with a starting-state description.
   * Registry servers only; frozen at creation (cannot be toggled via PUT).
   */
  export interface Mock {
    /**
     * Turn mock mode on for this connection.
     */
    enabled: boolean;

    /**
     * Natural-language starting-state for the simulator (threaded into the LLM system
     * prompt so generated data is consistent with the scenario across calls).
     */
    scenario?: string;
  }
}

export interface ConnectionCreateParams {
  /**
   * Custom headers to send with MCP requests (stored securely, not returned in
   * responses)
   */
  headers?: { [key: string]: string };

  /**
   * URL of the MCP server. Required for HTTP connections. Omit for uplink
   * connections.
   */
  mcpUrl?: string;

  /**
   * Custom metadata for filtering connections
   */
  metadata?: { [key: string]: unknown };

  /**
   * Run this connection in mock mode. Tool calls are LLM-simulated against the
   * registry's scanned schemas and never reach the upstream server. Provide an
   * optional `scenario` to seed the simulator with a starting-state description.
   * Registry servers only; frozen at creation (cannot be toggled via PUT).
   */
  mock?: ConnectionCreateParams.Mock;

  /**
   * Human-readable name (optional, defaults to connection ID)
   */
  name?: string;

  /**
   * Connection transport. Use `uplink` for a local server paired over Smithery CLI.
   */
  transport?: 'http' | 'uplink';
}

export namespace ConnectionCreateParams {
  /**
   * Run this connection in mock mode. Tool calls are LLM-simulated against the
   * registry's scanned schemas and never reach the upstream server. Provide an
   * optional `scenario` to seed the simulator with a starting-state description.
   * Registry servers only; frozen at creation (cannot be toggled via PUT).
   */
  export interface Mock {
    /**
     * Turn mock mode on for this connection.
     */
    enabled: boolean;

    /**
     * Natural-language starting-state for the simulator (threaded into the LLM system
     * prompt so generated data is consistent with the scenario across calls).
     */
    scenario?: string;
  }
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

Connections.Mcp = Mcp;

export declare namespace Connections {
  export {
    type Connection as Connection,
    type ConnectionsListResponse as ConnectionsListResponse,
    type CreateConnectionRequest as CreateConnectionRequest,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionListParams as ConnectionListParams,
  };

  export { Mcp as Mcp, type JsonRpcRequest as JsonRpcRequest, type JsonRpcResponse as JsonRpcResponse };
}
