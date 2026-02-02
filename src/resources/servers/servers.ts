// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DeploymentsAPI from './deployments';
import {
  DeployPayload,
  DeploymentDeployByNamespaceParams,
  DeploymentDeployByNamespaceResponse,
  DeploymentDeployParams,
  DeploymentDeployResponse,
  DeploymentGetByNamespaceParams,
  DeploymentGetByNamespaceResponse,
  DeploymentGetParams,
  DeploymentGetResponse,
  DeploymentListByNamespaceResponse,
  DeploymentListParams,
  DeploymentListResponse,
  DeploymentResumeByNamespaceParams,
  DeploymentResumeByNamespaceResponse,
  DeploymentResumeParams,
  DeploymentResumeResponse,
  DeploymentStreamByNamespaceParams,
  DeploymentStreamByNamespaceResponse,
  DeploymentStreamParams,
  DeploymentStreamResponse,
  Deployments,
  ExternalDeployPayload,
  HostedDeployPayload,
  ServerCard,
  StdioDeployPayload,
} from './deployments';
import * as LogsAPI from './logs';
import {
  LogListByNamespaceParams,
  LogListByNamespaceResponse,
  LogListParams,
  LogListResponse,
  Logs,
} from './logs';
import * as RepoAPI from './repo';
import {
  Repo,
  RepoDeleteByNamespaceResponse,
  RepoDeleteParams,
  RepoDeleteResponse,
  RepoGetByNamespaceResponse,
  RepoGetParams,
  RepoGetResponse,
  RepoSetByNamespaceParams,
  RepoSetByNamespaceResponse,
  RepoSetParams,
  RepoSetResponse,
} from './repo';
import * as SecretsAPI from './secrets';
import {
  SecretDeleteByNamespaceParams,
  SecretDeleteByNamespaceResponse,
  SecretDeleteParams,
  SecretDeleteResponse,
  SecretListByNamespaceResponse,
  SecretListParams,
  SecretListResponse,
  SecretSetByNamespaceParams,
  SecretSetByNamespaceResponse,
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
  repo: RepoAPI.Repo = new RepoAPI.Repo(this._client);

  /**
   * Get a paginated list of all servers. Use the `q` parameter to search.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const serverListResponse of client.servers.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: ServerListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ServerListResponsesSmitheryPage, ServerListResponse> {
    return this._client.getAPIList('/servers', SmitheryPage<ServerListResponse>, { query, ...options });
  }

  /**
   * Delete a server by namespace and server name.
   *
   * @example
   * ```ts
   * const server = await client.servers.delete('server', {
   *   namespace: 'namespace',
   * });
   * ```
   */
  delete(
    server: string,
    params: ServerDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ServerDeleteResponse> {
    const { namespace } = params;
    return this._client.delete(path`/servers/${namespace}/${server}`, options);
  }

  /**
   * Download the MCPB bundle for the latest successful stdio deployment
   *
   * @example
   * ```ts
   * const response = await client.servers.download('server', {
   *   namespace: 'namespace',
   * });
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(server: string, params: ServerDownloadParams, options?: RequestOptions): APIPromise<Response> {
    const { namespace } = params;
    return this._client.get(path`/servers/${namespace}/${server}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/zip' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Get a single server by its namespace and server name.
   *
   * @example
   * ```ts
   * const server = await client.servers.get('server', {
   *   namespace: 'namespace',
   * });
   * ```
   */
  get(server: string, params: ServerGetParams, options?: RequestOptions): APIPromise<ServerGetResponse> {
    const { namespace } = params;
    return this._client.get(path`/servers/${namespace}/${server}`, options);
  }

  /**
   * Get a server by namespace name. Used for namespace-only servers where the
   * namespace name is also the server name. Also handles deprecated encoded
   * patterns.
   *
   * @example
   * ```ts
   * const response = await client.servers.getByNamespace(
   *   'namespace',
   * );
   * ```
   */
  getByNamespace(namespace: string, options?: RequestOptions): APIPromise<ServerGetByNamespaceResponse> {
    return this._client.get(path`/servers/${namespace}`, options);
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

  namespace: string | null;

  owner: string | null;

  qualifiedName: string;

  remote: boolean | null;

  slug: string | null;

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

export interface ServerGetByNamespaceResponse {
  connections: Array<
    ServerGetByNamespaceResponse.StdioConnection | ServerGetByNamespaceResponse.HTTPConnection
  >;

  deploymentUrl: string | null;

  description: string;

  displayName: string;

  iconUrl: string | null;

  qualifiedName: string;

  remote: boolean;

  security: ServerGetByNamespaceResponse.Security | null;

  tools: Array<ServerGetByNamespaceResponse.Tool> | null;
}

export namespace ServerGetByNamespaceResponse {
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

export interface ServerDeleteParams {
  namespace: string;
}

export interface ServerDownloadParams {
  namespace: string;
}

export interface ServerGetParams {
  namespace: string;
}

Servers.Deployments = Deployments;
Servers.Logs = Logs;
Servers.Secrets = Secrets;
Servers.Repo = Repo;

export declare namespace Servers {
  export {
    type BuildConfig as BuildConfig,
    type DeploymentTarget as DeploymentTarget,
    type ProjectConfig as ProjectConfig,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerGetResponse as ServerGetResponse,
    type ServerGetByNamespaceResponse as ServerGetByNamespaceResponse,
    type ServerListResponsesSmitheryPage as ServerListResponsesSmitheryPage,
    type ServerListParams as ServerListParams,
    type ServerDeleteParams as ServerDeleteParams,
    type ServerDownloadParams as ServerDownloadParams,
    type ServerGetParams as ServerGetParams,
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
    type DeploymentDeployByNamespaceResponse as DeploymentDeployByNamespaceResponse,
    type DeploymentGetResponse as DeploymentGetResponse,
    type DeploymentGetByNamespaceResponse as DeploymentGetByNamespaceResponse,
    type DeploymentListByNamespaceResponse as DeploymentListByNamespaceResponse,
    type DeploymentResumeResponse as DeploymentResumeResponse,
    type DeploymentResumeByNamespaceResponse as DeploymentResumeByNamespaceResponse,
    type DeploymentStreamResponse as DeploymentStreamResponse,
    type DeploymentStreamByNamespaceResponse as DeploymentStreamByNamespaceResponse,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeployParams as DeploymentDeployParams,
    type DeploymentDeployByNamespaceParams as DeploymentDeployByNamespaceParams,
    type DeploymentGetParams as DeploymentGetParams,
    type DeploymentGetByNamespaceParams as DeploymentGetByNamespaceParams,
    type DeploymentResumeParams as DeploymentResumeParams,
    type DeploymentResumeByNamespaceParams as DeploymentResumeByNamespaceParams,
    type DeploymentStreamParams as DeploymentStreamParams,
    type DeploymentStreamByNamespaceParams as DeploymentStreamByNamespaceParams,
  };

  export {
    Logs as Logs,
    type LogListResponse as LogListResponse,
    type LogListByNamespaceResponse as LogListByNamespaceResponse,
    type LogListParams as LogListParams,
    type LogListByNamespaceParams as LogListByNamespaceParams,
  };

  export {
    Secrets as Secrets,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretDeleteByNamespaceResponse as SecretDeleteByNamespaceResponse,
    type SecretListByNamespaceResponse as SecretListByNamespaceResponse,
    type SecretSetResponse as SecretSetResponse,
    type SecretSetByNamespaceResponse as SecretSetByNamespaceResponse,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretDeleteByNamespaceParams as SecretDeleteByNamespaceParams,
    type SecretSetParams as SecretSetParams,
    type SecretSetByNamespaceParams as SecretSetByNamespaceParams,
  };

  export {
    Repo as Repo,
    type RepoDeleteResponse as RepoDeleteResponse,
    type RepoDeleteByNamespaceResponse as RepoDeleteByNamespaceResponse,
    type RepoGetResponse as RepoGetResponse,
    type RepoGetByNamespaceResponse as RepoGetByNamespaceResponse,
    type RepoSetResponse as RepoSetResponse,
    type RepoSetByNamespaceResponse as RepoSetByNamespaceResponse,
    type RepoDeleteParams as RepoDeleteParams,
    type RepoGetParams as RepoGetParams,
    type RepoSetParams as RepoSetParams,
    type RepoSetByNamespaceParams as RepoSetByNamespaceParams,
  };
}
