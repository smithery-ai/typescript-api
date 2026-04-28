// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DomainsAPI from './domains';
import { DomainListResponse, DomainUpdateParams, DomainUpdateResponse, Domains } from './domains';
import * as IconAPI from './icon';
import { Icon, IconDeleteResponse, IconUploadResponse } from './icon';
import * as LogsAPI from './logs';
import { LogListParams, LogListResponse, Logs } from './logs';
import * as ReleasesAPI from './releases';
import {
  DeployPayload,
  ExternalDeployPayload,
  HostedDeployPayload,
  ReleaseDeployParams,
  ReleaseDeployResponse,
  ReleaseGetParams,
  ReleaseGetResponse,
  ReleaseListParams,
  ReleaseListResponse,
  ReleaseListResponsesReleasesPage,
  ReleaseResumeParams,
  ReleaseResumeResponse,
  ReleaseStreamParams,
  ReleaseStreamResponse,
  Releases,
  ServerCard,
} from './releases';
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

/**
 * Browse the MCP server registry, manage server configuration, and handle deployments
 */
export class Servers extends APIResource {
  releases: ReleasesAPI.Releases = new ReleasesAPI.Releases(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
  icon: IconAPI.Icon = new IconAPI.Icon(this._client);
  domains: DomainsAPI.Domains = new DomainsAPI.Domains(this._client);

  /**
   * Create a new server. Idempotent — returns success if the server already exists
   * and is owned by the caller.
   *
   * @example
   * ```ts
   * const server = await client.servers.create('qualifiedName');
   * ```
   */
  create(
    qualifiedName: string,
    body: ServerCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServerCreateResponse> {
    return this._client.put(path`/servers/${qualifiedName}`, { body, ...options });
  }

  /**
   * Update server metadata such as display name, description, repository, icon, or
   * visibility.
   *
   * @example
   * ```ts
   * const server = await client.servers.update('qualifiedName');
   * ```
   */
  update(
    qualifiedName: string,
    body: ServerUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ServerUpdateResponse> {
    return this._client.patch(path`/servers/${qualifiedName}`, { body, ...options });
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
   * Permanently delete a server, its releases, and associated resources.
   *
   * @example
   * ```ts
   * const server = await client.servers.delete('qualifiedName');
   * ```
   */
  delete(qualifiedName: string, options?: RequestOptions): APIPromise<ServerDeleteResponse> {
    return this._client.delete(path`/servers/${qualifiedName}`, options);
  }

  /**
   * Download the MCPB bundle for the latest successful stdio release.
   *
   * @example
   * ```ts
   * const response = await client.servers.download(
   *   'qualifiedName',
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(qualifiedName: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/servers/${qualifiedName}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/zip' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Retrieve server details including connections, tools, and security status.
   *
   * @example
   * ```ts
   * const server = await client.servers.get('qualifiedName');
   * ```
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

export interface ServerCreateResponse {
  createdAt: string;

  description: string;

  displayName: string;

  namespace: string;

  server: string;
}

export interface ServerUpdateResponse {
  namespace: string;

  server: string;

  success: boolean;
}

export interface ServerListResponse {
  id: string;

  /**
   * Whether this server is maintained by Smithery (i.e. owned by the Smithery
   * organization).
   */
  bySmithery: boolean;

  /**
   * ISO 8601 timestamp of when the server was registered.
   */
  createdAt: string;

  description: string;

  displayName: string;

  /**
   * The server owner's homepage URL, or the server's Smithery page as a fallback.
   * Will become nullable in a future release.
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
   * RRF relevance score from search (null for browse requests).
   */
  score: number | null;

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
  namespace: string;

  server: string;

  success: boolean;
}

export interface ServerGetResponse {
  connections: Array<ServerGetResponse.StdioConnection | ServerGetResponse.HTTPConnection>;

  deploymentUrl: string | null;

  description: string;

  displayName: string;

  iconUrl: string | null;

  prompts: Array<ServerGetResponse.Prompt> | null;

  qualifiedName: string;

  remote: boolean;

  resources: Array<ServerGetResponse.Resource> | null;

  security: ServerGetResponse.Security | null;

  tools: Array<ServerGetResponse.Tool> | null;
}

export namespace ServerGetResponse {
  export interface StdioConnection {
    bundleUrl: string;

    configSchema: { [key: string]: unknown };

    runtime: 'node' | 'binary' | 'python' | 'bun';

    type: 'stdio';
  }

  export interface HTTPConnection {
    configSchema: { [key: string]: unknown };

    deploymentUrl: string;

    type: 'http';
  }

  export interface Prompt {
    name: string;

    arguments?: Array<Prompt.Argument>;

    description?: string;
  }

  export namespace Prompt {
    export interface Argument {
      name: string;

      description?: string;

      required?: boolean;
    }
  }

  export interface Resource {
    name: string;

    uri: string;

    description?: string;

    mimeType?: string;
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
  description?: string;

  displayName?: string;
}

export interface ServerUpdateParams {
  backlinkUrl?: string | null;

  description?: string;

  displayName?: string;

  homepage?: string | null;

  iconUrl?: string | null;

  license?: string | null;

  repositoryUrl?: string | null;

  unlisted?: boolean;
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
   * Filter by GitHub repository name from repository_url.
   */
  repoName?: string;

  /**
   * Filter by GitHub repository owner from repository_url.
   */
  repoOwner?: string;

  /**
   * Random seed for deterministic pagination. When provided, results use a stable
   * sort order that is consistent across pages for the same seed value.
   */
  seed?: number;

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

Servers.Releases = Releases;
Servers.Logs = Logs;
Servers.Secrets = Secrets;
Servers.Icon = Icon;
Servers.Domains = Domains;

export declare namespace Servers {
  export {
    type BuildConfig as BuildConfig,
    type DeploymentTarget as DeploymentTarget,
    type ProjectConfig as ProjectConfig,
    type ServerCreateResponse as ServerCreateResponse,
    type ServerUpdateResponse as ServerUpdateResponse,
    type ServerListResponse as ServerListResponse,
    type ServerDeleteResponse as ServerDeleteResponse,
    type ServerGetResponse as ServerGetResponse,
    type ServerListResponsesSmitheryPage as ServerListResponsesSmitheryPage,
    type ServerCreateParams as ServerCreateParams,
    type ServerUpdateParams as ServerUpdateParams,
    type ServerListParams as ServerListParams,
  };

  export {
    Releases as Releases,
    type DeployPayload as DeployPayload,
    type ExternalDeployPayload as ExternalDeployPayload,
    type HostedDeployPayload as HostedDeployPayload,
    type ServerCard as ServerCard,
    type ReleaseListResponse as ReleaseListResponse,
    type ReleaseDeployResponse as ReleaseDeployResponse,
    type ReleaseGetResponse as ReleaseGetResponse,
    type ReleaseResumeResponse as ReleaseResumeResponse,
    type ReleaseStreamResponse as ReleaseStreamResponse,
    type ReleaseListResponsesReleasesPage as ReleaseListResponsesReleasesPage,
    type ReleaseListParams as ReleaseListParams,
    type ReleaseDeployParams as ReleaseDeployParams,
    type ReleaseGetParams as ReleaseGetParams,
    type ReleaseResumeParams as ReleaseResumeParams,
    type ReleaseStreamParams as ReleaseStreamParams,
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

  export {
    Icon as Icon,
    type IconDeleteResponse as IconDeleteResponse,
    type IconUploadResponse as IconUploadResponse,
  };

  export {
    Domains as Domains,
    type DomainUpdateResponse as DomainUpdateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainUpdateParams as DomainUpdateParams,
  };
}
