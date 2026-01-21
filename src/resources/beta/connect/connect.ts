// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConnectionsAPI from './connections';
import {
  ConnectionCreateParams,
  ConnectionCreateResponse,
  ConnectionDeleteParams,
  ConnectionDeleteResponse,
  ConnectionListParams,
  ConnectionListResponse,
  ConnectionRetrieveParams,
  ConnectionRetrieveResponse,
  ConnectionSetParams,
  ConnectionSetResponse,
  Connections,
} from './connections';
import * as RpcAPI from './rpc';
import { Rpc, RpcCallParams, RpcCallResponse } from './rpc';

export class Connect extends APIResource {
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  rpc: RpcAPI.Rpc = new RpcAPI.Rpc(this._client);
}

Connect.Connections = Connections;
Connect.Rpc = Rpc;

export declare namespace Connect {
  export {
    Connections as Connections,
    type ConnectionCreateResponse as ConnectionCreateResponse,
    type ConnectionRetrieveResponse as ConnectionRetrieveResponse,
    type ConnectionListResponse as ConnectionListResponse,
    type ConnectionDeleteResponse as ConnectionDeleteResponse,
    type ConnectionSetResponse as ConnectionSetResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionRetrieveParams as ConnectionRetrieveParams,
    type ConnectionListParams as ConnectionListParams,
    type ConnectionDeleteParams as ConnectionDeleteParams,
    type ConnectionSetParams as ConnectionSetParams,
  };

  export { Rpc as Rpc, type RpcCallResponse as RpcCallResponse, type RpcCallParams as RpcCallParams };
}
