// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DeploymentsAPI from './deployments';
import {
  DeploymentDeployParams,
  DeploymentDeployResponse,
  DeploymentListResponse,
  DeploymentResumeParams,
  DeploymentResumeResponse,
  DeploymentRetrieveParams,
  DeploymentRetrieveResponse,
  Deployments,
} from './deployments';
import * as LogsAPI from './logs';
import { LogListParams, LogListResponse, Logs } from './logs';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Servers extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Get a single server by its qualified name.
   */
  retrieve(qualifiedName: string, options?: RequestOptions): APIPromise<ServerRetrieveResponse> {
    return this._client.get(path`/servers/${qualifiedName}`, options);
  }

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

export interface ServerRetrieveResponse {
  connections: Array<unknown>;

  deploymentUrl: string | null;

  description: string;

  displayName: string;

  iconUrl: string | null;

  qualifiedName: string;

  remote: boolean;

  security: unknown;

  tools: Array<unknown> | null;
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
  export {
    type ServerRetrieveResponse as ServerRetrieveResponse,
    type ServerListResponse as ServerListResponse,
    type ServerListParams as ServerListParams,
  };

  export {
    Deployments as Deployments,
    type DeploymentRetrieveResponse as DeploymentRetrieveResponse,
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentDeployResponse as DeploymentDeployResponse,
    type DeploymentResumeResponse as DeploymentResumeResponse,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentDeployParams as DeploymentDeployParams,
    type DeploymentResumeParams as DeploymentResumeParams,
  };

  export { Logs as Logs, type LogListResponse as LogListResponse, type LogListParams as LogListParams };
}
