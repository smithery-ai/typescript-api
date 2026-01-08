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
  list(
    qualifiedName: string,
    query: LogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/servers/${qualifiedName}/logs`, { query, ...options });
  }
}

export type LogListResponse = unknown;

export interface LogListParams {
  /**
   * Start of time range (ISO 8601).
   */
  from?: string;

  /**
   * Max invocations to return. Defaults to 50.
   */
  limit?: number;

  /**
   * End of time range (ISO 8601).
   */
  to?: string;
}

export declare namespace Logs {
  export { type LogListResponse as LogListResponse, type LogListParams as LogListParams };
}
