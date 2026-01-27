// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Mcp extends APIResource {
  /**
   * Streamable HTTP MCP endpoint. Accepts JSON-RPC requests and notifications.
   * Requires service token with mcp scope.
   *
   * @example
   * ```ts
   * const jsonRpcResponse = await client.beta.connect.mcp.call(
   *   'connectionId',
   *   {
   *     namespace: 'namespace',
   *     jsonrpc: '2.0',
   *     method: 'tools/list',
   *   },
   * );
   * ```
   */
  call(connectionID: string, params: McpCallParams, options?: RequestOptions): APIPromise<JsonRpcResponse> {
    const { namespace, ...body } = params;
    return this._client.post(path`/connect/${namespace}/${connectionID}/mcp`, { body, ...options });
  }
}

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

export interface McpCallParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param
   */
  jsonrpc: '2.0';

  /**
   * Body param: MCP method to call
   */
  method: string;

  /**
   * Body param
   */
  id?: string | number;

  /**
   * Body param: Method parameters
   */
  params?: unknown;
}

export declare namespace Mcp {
  export {
    type JsonRpcRequest as JsonRpcRequest,
    type JsonRpcResponse as JsonRpcResponse,
    type McpCallParams as McpCallParams,
  };
}
