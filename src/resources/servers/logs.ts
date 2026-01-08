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
  ): APIPromise<LogListResponse> {
    return this._client.get(path`/servers/${qualifiedName}/logs`, { query, ...options });
  }
}

export interface LogListResponse {
  invocations: Array<LogListResponse.Invocation>;

  /**
   * Total invocations matching query
   */
  total: number;
}

export namespace LogListResponse {
  export interface Invocation {
    id: string;

    duration: Invocation.Duration;

    exceptions: Array<Invocation.Exception>;

    logs: Array<Invocation.Log>;

    request: Invocation.Request;

    response: Invocation.Response;

    timestamp: string;
  }

  export namespace Invocation {
    export interface Duration {
      cpuMs: number;

      wallMs: number;
    }

    export interface Exception {
      message: string;

      name: string;

      timestamp: string;

      stack?: string;
    }

    export interface Log {
      level: string;

      message: string;

      timestamp: string;
    }

    export interface Request {
      method: string;

      url: string;
    }

    export interface Response {
      outcome: string;

      status: number;
    }
  }
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
  export { type LogListResponse as LogListResponse, type LogListParams as LogListParams };
}
