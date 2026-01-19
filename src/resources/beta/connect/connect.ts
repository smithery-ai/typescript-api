// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ConnectionsAPI from './connections';
import {
  Connection,
  ConnectionCreateParams,
  ConnectionDeleteParams,
  ConnectionDeleteResponse,
  ConnectionRetrieveParams,
  Connections,
  ConnectionsListResponse,
  CreateConnectionRequest,
} from './connections';
import * as NamespacesAPI from './namespaces';
import { Namespace, NamespaceDeleteResponse, NamespaceListResponse, Namespaces } from './namespaces';
import * as RpcAPI from './rpc';
import { JsonRpcRequest, JsonRpcResponse, Rpc, RpcCallParams } from './rpc';

export class Connect extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
  connections: ConnectionsAPI.Connections = new ConnectionsAPI.Connections(this._client);
  rpc: RpcAPI.Rpc = new RpcAPI.Rpc(this._client);
}

Connect.Namespaces = Namespaces;
Connect.Connections = Connections;
Connect.Rpc = Rpc;

export declare namespace Connect {
  export {
    Namespaces as Namespaces,
    type Namespace as Namespace,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
  };

  export {
    Connections as Connections,
    type Connection as Connection,
    type ConnectionsListResponse as ConnectionsListResponse,
    type CreateConnectionRequest as CreateConnectionRequest,
    type ConnectionDeleteResponse as ConnectionDeleteResponse,
    type ConnectionCreateParams as ConnectionCreateParams,
    type ConnectionRetrieveParams as ConnectionRetrieveParams,
    type ConnectionDeleteParams as ConnectionDeleteParams,
  };

  export {
    Rpc as Rpc,
    type JsonRpcRequest as JsonRpcRequest,
    type JsonRpcResponse as JsonRpcResponse,
    type RpcCallParams as RpcCallParams,
  };
}
