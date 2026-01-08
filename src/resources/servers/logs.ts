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
  retrieve(
    name: string,
    query: LogRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogRetrieveResponse> {
    return this._client.get(path`/servers/${name}/logs`, { query, ...options });
  }

  /**
   * Fetch recent runtime logs for the server's deployed Worker, grouped by
   * invocation (requires ownership).
   */
  list(
    name: string,
    query: LogListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogListResponse> {
    return this._client.get(path`/servers//${name}/logs`, { query, ...options });
  }
}

export interface LogRetrieveResponse {
  invocations: Array<unknown>;

  /**
   * Total invocations matching query
   */
  total: number;
}

export interface LogListResponse {
  invocations: Array<unknown>;

  /**
   * Total invocations matching query
   */
  total: number;
}

export interface LogRetrieveParams {
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
  export {
    type LogRetrieveResponse as LogRetrieveResponse,
    type LogListResponse as LogListResponse,
    type LogRetrieveParams as LogRetrieveParams,
    type LogListParams as LogListParams,
  };
}
