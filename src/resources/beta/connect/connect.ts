// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConnectionsAPI from './connections';
import {
  Connection,
  ConnectionCreateParams,
  ConnectionDeleteParams,
  ConnectionDeleteResponse,
  ConnectionGetParams,
  ConnectionListParams,
  ConnectionSetParams,
  Connections,
  ConnectionsListResponse,
  CreateConnectionRequest,
} from './connections';
import * as McpAPI from './mcp';
import { JsonRpcRequest, JsonRpcResponse, Mcp, McpCallParams } from './mcp';

export class Connect extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  mcp: McpAPI.Mcp = new McpAPI.Mcp(this._client);
}

Connect.Connections = Connections;
Connect.Mcp = Mcp;

export declare namespace Connect {
  export {
    Connections as Connections,
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
