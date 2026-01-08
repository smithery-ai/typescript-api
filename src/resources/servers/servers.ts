// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DeploymentsAPI from './deployments';
import { Deployments } from './deployments';
import * as LogsAPI from './logs';
import { Logs } from './logs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Servers extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Get a paginated list of all servers
   */
  list(
    query: ServerListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServerListResponse> {
    return this._client.get('/servers', { query, ...options });
  }
}

export interface ServerListResponse {
  pagination: unknown;

  servers: Array<unknown>;
}

export interface ServerListParams {
  page?: number;

  pageSize?: number;

  q?: string;
}

Servers.Deployments = Deployments;
Servers.Logs = Logs;

export declare namespace Servers {
  export { type ServerListResponse as ServerListResponse, type ServerListParams as ServerListParams };

  export { Deployments as Deployments };

  export { Logs as Logs };
}
