// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DeploymentsAPI from './deployments';
import {
  DeployPayload,
  DeploymentDeployParams,
  DeploymentDeployResponse,
  DeploymentListResponse,
  DeploymentResumeParams,
  DeploymentResumeResponse,
  DeploymentRetrieveParams,
  DeploymentRetrieveResponse,
  Deployments,
  ExternalDeployPayload,
  HostedDeployPayload,
  ServerCard,
  StdioDeployPayload,
} from './deployments';
import * as LogsAPI from './logs';
import { LogListParams, LogListResponse, Logs } from './logs';
import * as SecretsAPI from './secrets';
import {
  SecretDeleteParams,
  SecretDeleteResponse,
  SecretListResponse,
  SecretSetParams,
  SecretSetResponse,
  Secrets,
} from './secrets';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SmitheryPage, type SmitheryPageParams } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Servers extends APIResource {
  deployments: DeploymentsAPI.Deployments = new DeploymentsAPI.Deployments(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);

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

  /**
   * Download the MCPB bundle for the latest successful stdio deployment
   */
  download(qualifiedName: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/servers/${qualifiedName}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/zip' }, options?.headers]),
      __binaryResponse: true,
    });
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
Servers.Secrets = Secrets;

export declare namespace Servers {
  export {
    type ServerRetrieveResponse as ServerRetrieveResponse,
    type ServerListResponse as ServerListResponse,
    type ServerListResponsesSmitheryPage as ServerListResponsesSmitheryPage,
    type ServerListParams as ServerListParams,
  };

  export {
    Deployments as Deployments,
    type DeployPayload as DeployPayload,
    type ExternalDeployPayload as ExternalDeployPayload,
    type HostedDeployPayload as HostedDeployPayload,
    type ServerCard as ServerCard,
    type StdioDeployPayload as StdioDeployPayload,
    type DeploymentRetrieveResponse as DeploymentRetrieveResponse,
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentDeployResponse as DeploymentDeployResponse,
    type DeploymentResumeResponse as DeploymentResumeResponse,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentDeployParams as DeploymentDeployParams,
    type DeploymentResumeParams as DeploymentResumeParams,
  };

  export { Logs as Logs, type LogListResponse as LogListResponse, type LogListParams as LogListParams };

  export {
    Secrets as Secrets,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretSetResponse as SecretSetResponse,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretSetParams as SecretSetParams,
  };
}
