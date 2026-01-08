// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Logs extends APIResource {
  /**
   * Fetch recent runtime logs for the server's deployed Worker, grouped by
   * invocation (requires ownership).
   */
  list(name: string, params: LogListParams, options?: RequestOptions): APIPromise<LogListResponse> {
    const { namespace, ...query } = params;
    return this._client.get(path`/servers/${namespace}/${name}/logs`, { query, ...options });
  }
}

export interface LogListResponse {
  invocations: Array<unknown>;

  /**
   * Total invocations matching query
   */
  total: number;
}

export interface LogListParams {
  /**
   * Path param:
   */
  namespace: string;

  /**
   * Query param: Start of time range (ISO 8601).
   */
  from?: string;

  /**
   * Query param: Max invocations to return. Defaults to 50.
   */
  limit?: number;

  /**
   * Query param: End of time range (ISO 8601).
   */
  to?: string;
}

export declare namespace Logs {
  export { type LogListResponse as LogListResponse, type LogListParams as LogListParams };
}
