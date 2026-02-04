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
   * Create a new server under the specified namespace. This endpoint is idempotent -
   * if the server already exists and is owned by the user, returns success.
   *
   * @example
   * ```ts
   * const server = await client.servers.create('server', {
   *   namespace: 'namespace',
   * });
   * ```
   */
  create(
    server: string,
    params: ServerCreateParams,
    options?: RequestOptions,
  ): APIPromise<ServerCreateResponse> {
    const { namespace, ...body } = params;
    return this._client.put(path`/servers/${namespace}/${server}`, { body, ...options });
  }

  /**
   * Search and browse public MCP servers in the Smithery registry. Supports
   * full-text and semantic search via the `q` parameter, and filtering by deployment
   * status, verification, ownership, and more.
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
   * Create a namespace-only server where the namespace is also the server
   * identifier. This endpoint is idempotent - if the server already exists and is
   * owned by the user, returns success.
   *
   * @example
   * ```ts
   * const response = await client.servers.createByNamespace(
   *   'namespace',
   * );
   * ```
   */
  createByNamespace(
    namespace: string,
    body: ServerCreateByNamespaceParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServerCreateByNamespaceResponse> {
    return this._client.put(path`/servers/${namespace}`, { body, ...options });
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

export interface ServerCreateResponse {
  createdAt: string;

  description: string;

  displayName: string;

  namespace: string;

  server: string;
}

export interface ServerListResponse {
  id: string;

  /**
   * ISO 8601 timestamp of when the server was registered.
   */
  createdAt: string;

  description: string;

  displayName: string;

  /**
   * URL to the server's page on smithery.ai.
   */
  homepage: string;

  iconUrl: string | null;

  /**
   * Whether the server is currently hosted on Smithery infrastructure.
   */
  isDeployed: boolean;

  /**
   * The namespace this server belongs to, or null if unassigned.
   */
  namespace: string | null;

  /**
   * User ID of the server owner, or null for community servers.
   */
  owner: string | null;

  /**
   * Unique identifier in namespace/slug format.
   */
  qualifiedName: string;

  /**
   * Whether the server is accessed via URL (true) or runs locally via stdio (false).
   * Null if unknown.
   */
  remote: boolean | null;

  /**
   * URL-friendly short name within the namespace.
   */
  slug: string | null;

  /**
   * Total number of times this server has been connected to.
   */
  useCount: number;

  /**
   * Whether this server has been verified by Smithery.
   */
  verified: boolean;
}

export interface ServerDeleteResponse {
  qualifiedName: string;

  success: boolean;
}

export interface ServerCreateByNamespaceResponse {
  createdAt: string;

  description: string;

  displayName: string;

  namespace: string;

  server: string;
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

export interface ServerCreateParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  displayName?: string;
}

export interface ServerListParams extends SmitheryPageParams {
  /**
   * Comma-separated list of fields to include in response
   */
  fields?: string;

  /**
   * Filter by specific server IDs.
   */
  ids?: Array<string>;

  /**
   * Filter by deployment status. Deployed servers are hosted on Smithery
   * infrastructure.
   */
  isDeployed?: '0' | '1' | 'true' | 'false';

  /**
   * Filter by the namespace that owns the server.
   */
  namespace?: string;

  /**
   * Filter by the server owner's user ID.
   */
  ownerId?: string;

  /**
   * Search query for full-text and semantic search across server names and
   * descriptions.
   */
  q?: string;

  /**
   * Exact match on the server's qualified name (e.g. "smithery/hello-world").
   * Deprecated: use GET /servers/:namespace/:server instead.
   */
  qualifiedName?: string;

  /**
   * Filter by remote status. Remote servers are accessed via URL; non-remote servers
   * run locally via stdio.
   */
  remote?: '0' | '1' | 'true' | 'false';

  /**
   * Filter by connected GitHub repository name.
   */
  repoName?: string;

  /**
   * Filter by connected GitHub repository owner.
   */
  repoOwner?: string;

  /**
   * Maximum number of candidate results to consider from the search index before
   * pagination.
   */
  topK?: number;

  /**
   * Filter to only verified servers.
   */
  verified?: '0' | '1' | 'true' | 'false';
}

export interface ServerDeleteParams {
  namespace: string;
}

export interface ServerCreateByNamespaceParams {
  description?: string;

  displayName?: string;
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
    type ServerCreateResponse as ServerCreateResponse,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerCreateByNamespaceResponse as ServerCreateByNamespaceResponse,
    type ServerGetResponse as ServerGetResponse,
    type ServerGetByNamespaceResponse as ServerGetByNamespaceResponse,
    type ServerListResponsesSmitheryPage as ServerListResponsesSmitheryPage,
    type ServerCreateParams as ServerCreateParams,
    type ServerListParams as ServerListParams,
    type ServerDeleteParams as ServerDeleteParams,
    type ServerCreateByNamespaceParams as ServerCreateByNamespaceParams,
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
