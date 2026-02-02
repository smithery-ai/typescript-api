// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Logs extends APIResource {
  /**
   * Fetch recent runtime logs for the server's deployed Worker, grouped by
   * invocation (requires ownership).
   *
   * @example
   * ```ts
   * const logs = await client.servers.logs.list('server', {
   *   namespace: 'namespace',
   * });
   * ```
   */
  list(server: string, params: LogListParams, options?: RequestOptions): APIPromise<LogListResponse> {
    const { namespace, ...query } = params;
    return this._client.get(path`/servers/${namespace}/${server}/logs`, { query, ...options });
  }

  /**
   * Fetch recent runtime logs for the server's deployed Worker, grouped by
   * invocation (requires ownership).
   *
   * @example
   * ```ts
   * const response = await client.servers.logs.listByNamespace(
   *   'namespace',
   * );
   * ```
   */
  listByNamespace(
    namespace: string,
    query: LogListByNamespaceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LogListByNamespaceResponse> {
    return this._client.get(path`/servers/${namespace}/logs`, { query, ...options });
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

export interface LogListByNamespaceResponse {
  invocations: Array<LogListByNamespaceResponse.Invocation>;

  /**
   * Total invocations matching query
   */
  total: number;
}

export namespace LogListByNamespaceResponse {
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
   * Path param
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

export interface LogListByNamespaceParams {
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
    type LogListResponse as LogListResponse,
    type LogListByNamespaceResponse as LogListByNamespaceResponse,
    type LogListParams as LogListParams,
    type LogListByNamespaceParams as LogListByNamespaceParams,
  };
}
