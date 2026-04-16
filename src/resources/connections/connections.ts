// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as McpAPI from './mcp';
import { JsonRpcRequest, JsonRpcResponse, Mcp } from './mcp';

export class Connections extends APIResource {
  mcp: McpAPI.Mcp = new McpAPI.Mcp(this._client);
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
    | Connection.ConnectionStatusInputRequired
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
}

Connections.Mcp = Mcp;

export declare namespace Connections {
  export {
    type Connection as Connection,
    type ConnectionsListResponse as ConnectionsListResponse,
    type CreateConnectionRequest as CreateConnectionRequest,
  };

  export { Mcp as Mcp, type JsonRpcRequest as JsonRpcRequest, type JsonRpcResponse as JsonRpcResponse };
}
