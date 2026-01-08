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
import { PagePromise, SmitheryPage, type SmitheryPageParams } from '../../core/pagination';
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
  ): PagePromise<ServerListResponsesSmitheryPage, ServerListResponse> {
    return this._client.getAPIList('/servers', SmitheryPage<ServerListResponse>, { query, ...options });
  }
}

export type ServerListResponsesSmitheryPage = SmitheryPage<ServerListResponse>;

export interface ServerRetrieveResponse {
  connections: Array<ServerRetrieveResponse.StdioConnection | ServerRetrieveResponse.HTTPConnection>;

  deploymentUrl: string | null;

  description: string;

  displayName: string;

  iconUrl: string | null;

  qualifiedName: string;

  remote: boolean;

  security: ServerRetrieveResponse.Security | null;

  tools: Array<ServerRetrieveResponse.Tool> | null;
}

export namespace ServerRetrieveResponse {
  export interface StdioConnection {
    configSchema: { [key: string]: unknown };

    type: 'stdio';

    bundleUrl?: string;

    runtime?: string;

    stdioFunction?: string;
  }

  export interface HTTPConnection {
    configSchema: { [key: string]: unknown };

    deploymentUrl: string;

    type: 'http';
  }

  export interface Security {
    scanPassed: boolean;
  }

  export interface Tool {
    description: string | null;

    inputSchema: Tool.InputSchema;

    name: string;
  }

  export namespace Tool {
    export interface InputSchema {
      type: 'object';

      properties?: { [key: string]: unknown };
    }
  }
}

export interface ServerListResponse {
  createdAt: string;

  description: string | null;

  displayName: string | null;

  homepage: string;

  iconUrl: string | null;

  isDeployed: boolean;

  qualifiedName: string;

  remote: boolean | null;

  useCount: number;

  verified: boolean;
}

export interface ServerListParams extends SmitheryPageParams {
  q?: string;
}

Servers.Deployments = Deployments;
Servers.Logs = Logs;

export declare namespace Servers {
  export {
    type ServerRetrieveResponse as ServerRetrieveResponse,
    type ServerListResponse as ServerListResponse,
    type ServerListResponsesSmitheryPage as ServerListResponsesSmitheryPage,
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
