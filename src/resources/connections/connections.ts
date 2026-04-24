// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionCreateParams,
  SubscriptionDeleteParams,
  SubscriptionDeleteResponse,
  SubscriptionListParams,
  Subscriptions,
} from './subscriptions';
import * as TriggersAPI from './triggers';
import {
  CreateTriggerRequest,
  TriggerCreateParams,
  TriggerDefinition,
  TriggerDefinitionList,
  TriggerDeleteParams,
  TriggerDeleteResponse,
  TriggerGetInstanceParams,
  TriggerGetParams,
  TriggerInstance,
  TriggerListParams,
  Triggers,
} from './triggers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Connections extends APIResource {
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  triggers: TriggersAPI.Triggers = new TriggersAPI.Triggers(this._client);

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
    return this._client.post(path`/${namespace}`, {
      body,
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
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
    return this._client.get(path`/${namespace}`, {
      query,
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
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
    return this._client.delete(path`/${namespace}/${connectionID}`, {
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
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
    return this._client.get(path`/${namespace}/${connectionID}`, {
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
  }

  /**
   * Create or update an MCP connection with the given ID. mcpUrl is required when
   * creating a new connection, but optional when updating. Returns 409 if a
   * different mcpUrl is provided, except while the connection is input_required and
   * the new URL keeps the same host and path.
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
    return this._client.put(path`/${namespace}/${connectionID}`, {
      body,
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
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

export interface ConnectionDeleteResponse {
  success: true;
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
   * Body param: Run this connection in mock mode. Only honored on first creation;
   * ignored on updates to an existing connection.
   */
  mock?: ConnectionSetParams.Mock;

  /**
   * Body param: Human-readable name (optional, defaults to connection ID)
   */
  name?: string;

  /**
   * Body param: Connection transport. Defaults to the existing connection transport
   * when updating.
   */
  transport?: 'http' | 'uplink';
}

export namespace ConnectionSetParams {
  /**
   * Run this connection in mock mode. Only honored on first creation; ignored on
   * updates to an existing connection.
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

Connections.Subscriptions = Subscriptions;
Connections.Triggers = Triggers;

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
    Subscriptions as Subscriptions,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };

  export {
    Triggers as Triggers,
    type CreateTriggerRequest as CreateTriggerRequest,
    type TriggerDefinition as TriggerDefinition,
    type TriggerDefinitionList as TriggerDefinitionList,
    type TriggerInstance as TriggerInstance,
    type TriggerDeleteResponse as TriggerDeleteResponse,
    type TriggerCreateParams as TriggerCreateParams,
    type TriggerListParams as TriggerListParams,
    type TriggerDeleteParams as TriggerDeleteParams,
    type TriggerGetParams as TriggerGetParams,
    type TriggerGetInstanceParams as TriggerGetInstanceParams,
  };
}
