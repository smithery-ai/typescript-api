// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * Search or list indexed tools across all connections in a namespace. If 'q' query
   * parameter is omitted, returns all tools. Filter by connectionId or server URL.
   * Metadata constraints from service tokens are applied automatically.
   *
   * @example
   * ```ts
   * const response = await client.beta.connect.tools.search(
   *   'namespace',
   * );
   * ```
   */
  search(
    namespace: string,
    query: ToolSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ToolSearchResponse> {
    return this._client.get(path`/connect/tools/${namespace}`, { query, ...options });
  }
}

export interface ToolSearchResponse {
  nextCursor: string | null;

  tools: Array<ToolSearchResponse.Tool>;
}

export namespace ToolSearchResponse {
  export interface Tool {
    connectionId: string;

    serverUrl: string;

    tool: Tool.Tool;

    score?: number;
  }

  export namespace Tool {
    export interface Tool {
      name: string;

      description?: string;

      inputSchema?: { [key: string]: unknown };
    }
  }
}

export interface ToolSearchParams {
  connectionId?: string;

  cursor?: string;

  limit?: number;

  q?: string;

  server?: string;
}

export declare namespace Tools {
  export { type ToolSearchResponse as ToolSearchResponse, type ToolSearchParams as ToolSearchParams };
}
