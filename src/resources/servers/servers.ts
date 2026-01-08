// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as LogsAPI from './logs';
import { LogListParams, LogListResponse, LogRetrieveParams, LogRetrieveResponse, Logs } from './logs';
import * as DeploymentsAPI from './deployments/deployments';
import {
  DeploymentCreateParams,
  DeploymentCreateResponse,
  DeploymentDeployParams,
  DeploymentDeployResponse,
  DeploymentListParams,
  DeploymentListResponse,
  DeploymentRetrieveParams,
  DeploymentRetrieveResponse,
  DeploymentUpdateParams,
  DeploymentUpdateResponse,
  Deployments,
} from './deployments/deployments';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Servers extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Get a single server by its qualified name.
   */
  retrieve(
    name: string,
    params: ServerRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<ServerRetrieveResponse> {
    const { namespace } = params;
    return this._client.get(path`/servers/${namespace}/${name}`, options);
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

export interface ServerRetrieveParams {
  namespace: string;
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
    type ServerRetrieveParams as ServerRetrieveParams,
    type ServerListParams as ServerListParams,
  };

  export {
    Deployments as Deployments,
    type DeploymentCreateResponse as DeploymentCreateResponse,
    type DeploymentRetrieveResponse as DeploymentRetrieveResponse,
    type DeploymentUpdateResponse as DeploymentUpdateResponse,
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentDeployResponse as DeploymentDeployResponse,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentUpdateParams as DeploymentUpdateParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeployParams as DeploymentDeployParams,
  };

  export {
    Logs as Logs,
    type LogRetrieveResponse as LogRetrieveResponse,
    type LogListResponse as LogListResponse,
    type LogRetrieveParams as LogRetrieveParams,
    type LogListParams as LogListParams,
  };
}
