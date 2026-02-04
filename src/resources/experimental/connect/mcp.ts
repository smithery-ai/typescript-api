// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Mcp extends APIResource {
  /**
   * Stateless MCP endpoint using Streamable HTTP transport. Accepts JSON-RPC
   * requests and notifications. Session management is handled internally by
   * Connect—clients should not send mcp-session-id headers. Requires service token
   * with mcp scope.
   *
   * @example
   * ```ts
   * const jsonRpcResponse =
   *   await client.experimental.connect.mcp.call(
   *     'connectionId',
   *     { namespace: 'namespace' },
   *   );
   * ```
   */
  call(connectionID: string, params: McpCallParams, options?: RequestOptions): APIPromise<JsonRpcResponse> {
    const { namespace } = params;
    return this._client.post(path`/connect/${namespace}/${connectionID}/mcp`, options);
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
  namespace: string;
}

export declare namespace Mcp {
  export {
    type JsonRpcRequest as JsonRpcRequest,
    type JsonRpcResponse as JsonRpcResponse,
    type McpCallParams as McpCallParams,
  };
}
