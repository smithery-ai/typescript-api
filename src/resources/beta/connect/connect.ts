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
import * as RpcAPI from './rpc';
import { JsonRpcRequest, JsonRpcResponse, Rpc, RpcCallParams } from './rpc';
import * as ToolsAPI from './tools';
import { ToolSearchParams, ToolSearchResponse, Tools } from './tools';

export class Connect extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  rpc: RpcAPI.Rpc = new RpcAPI.Rpc(this._client);
}

Connect.Tools = Tools;
Connect.Connections = Connections;
Connect.Rpc = Rpc;

export declare namespace Connect {
  export {
    Tools as Tools,
    type ToolSearchResponse as ToolSearchResponse,
    type ToolSearchParams as ToolSearchParams,
  };

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
    Rpc as Rpc,
    type JsonRpcRequest as JsonRpcRequest,
    type JsonRpcResponse as JsonRpcResponse,
    type RpcCallParams as RpcCallParams,
  };
}
