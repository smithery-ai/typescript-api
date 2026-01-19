// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class Connections extends APIResource {}

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

export declare namespace Connections {
  export {
    type Connection as Connection,
    type ConnectionsListResponse as ConnectionsListResponse,
    type CreateConnectionRequest as CreateConnectionRequest,
  };
}
