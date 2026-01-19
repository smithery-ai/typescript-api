// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class Rpc extends APIResource {}

export interface JsonRpcRequest {
  jsonrpc: '2.0';

  /**
   * MCP method to call
   */
  method: string;

  id?: string | number;

  /**
   * Method parameters
   */
  params?: unknown;
}

export interface JsonRpcResponse {
  id: string | number | null;

  jsonrpc: '2.0';

  result?: unknown;
}

export declare namespace Rpc {
  export { type JsonRpcRequest as JsonRpcRequest, type JsonRpcResponse as JsonRpcResponse };
}
