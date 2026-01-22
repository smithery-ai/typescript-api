// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DeploymentsAPI from './deployments';
import {
  DeployPayload,
  DeploymentDeployParams,
  DeploymentDeployResponse,
  DeploymentGetParams,
  DeploymentGetResponse,
  DeploymentListResponse,
  DeploymentResumeParams,
  DeploymentResumeResponse,
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
   * Get a paginated list of all servers. Use the `q` parameter to search.
   */
  list(
    query: ServerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ServerListResponsesSmitheryPage, ServerListResponse> {
    return this._client.getAPIList('/servers', SmitheryPage<ServerListResponse>, { query, ...options });
  }

  /**
   * Delete a server by qualified name.
   */
  delete(qualifiedName: string, options?: RequestOptions): APIPromise<ServerDeleteResponse> {
    return this._client.delete(path`/servers/${qualifiedName}`, options);
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

  /**
   * Get a single server by its qualified name.
   */
  get(qualifiedName: string, options?: RequestOptions): APIPromise<ServerGetResponse> {
    return this._client.get(path`/servers/${qualifiedName}`, options);
  }
}

export type ServerListResponsesSmitheryPage = SmitheryPage<ServerListResponse>;

/**
 * Custom build configuration for cloud builds
 */
export interface BuildConfig {
  /**
   * Custom build command. Defaults to 'npm run build'
   */
  buildCommand?: string;

  /**
   * Custom install command. Defaults to 'npm install'
   */
  installCommand?: string;

  /**
   * Directory containing the build output, relative to base directory. Defaults to
   * '.smithery'
   */
  outputDirectory?: string;
}

export type DeploymentTarget = 'local' | 'remote';

export interface ProjectConfig {
  /**
   * Custom build configuration for cloud builds
   */
  build?: ProjectConfig.Build;

  target?: 'local' | 'remote';

  [k: string]: unknown;
}

export namespace ProjectConfig {
  /**
   * Custom build configuration for cloud builds
   */
  export interface Build {
    /**
     * Custom build command. Defaults to 'npm run build'
     */
    buildCommand?: string;

    /**
     * Custom install command. Defaults to 'npm install'
     */
    installCommand?: string;

    /**
     * Directory containing the build output, relative to base directory. Defaults to
     * '.smithery'
     */
    outputDirectory?: string;
  }
}

export interface ServerListResponse {
  id: string;

  createdAt: string;

  description: string;

  displayName: string;

  homepage: string;

  iconUrl: string | null;

  isDeployed: boolean;

  owner: string | null;

  qualifiedName: string;

  remote: boolean | null;

  useCount: number;

  verified: boolean;
}

export interface ServerDeleteResponse {
  qualifiedName: string;

  success: boolean;
}

export interface ServerGetResponse {
  connections: Array<ServerGetResponse.StdioConnection | ServerGetResponse.HTTPConnection>;

  deploymentUrl: string | null;

  description: string;

  displayName: string;

  iconUrl: string | null;

  qualifiedName: string;

  remote: boolean;

  security: ServerGetResponse.Security | null;

  tools: Array<ServerGetResponse.Tool> | null;
}

export namespace ServerGetResponse {
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

export interface ServerListParams extends SmitheryPageParams {
  ids?: Array<string>;

  isDeployed?: '0' | '1' | 'true' | 'false';

  ownerId?: string;

  q?: string;

  qualifiedName?: string;

  remote?: '0' | '1' | 'true' | 'false';

  repoName?: string;

  repoOwner?: string;

  topK?: number;

  verified?: '0' | '1' | 'true' | 'false';
}

Servers.Deployments = Deployments;
Servers.Logs = Logs;
Servers.Secrets = Secrets;

export declare namespace Servers {
  export {
    type BuildConfig as BuildConfig,
    type DeploymentTarget as DeploymentTarget,
    type ProjectConfig as ProjectConfig,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerGetResponse as ServerGetResponse,
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
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentDeployResponse as DeploymentDeployResponse,
    type DeploymentGetResponse as DeploymentGetResponse,
    type DeploymentResumeResponse as DeploymentResumeResponse,
    type DeploymentDeployParams as DeploymentDeployParams,
    type DeploymentGetParams as DeploymentGetParams,
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
