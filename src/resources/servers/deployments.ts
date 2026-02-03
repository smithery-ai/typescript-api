// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Deployments extends APIResource {
  /**
   * List all deployments for a server, ordered by most recent first. Does not
   * include deployment logs — fetch a specific deployment to see logs.
   *
   * @example
   * ```ts
   * const deployments = await client.servers.deployments.list(
   *   'server',
   *   { namespace: 'namespace' },
   * );
   * ```
   */
  list(
    server: string,
    params: DeploymentListParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentListResponse> {
    const { namespace } = params;
    return this._client.get(path`/servers/${namespace}/${server}/deployments`, options);
  }

  /**
   * Deploy an MCP server via multipart form. Supports hosted deployments (upload a
   * JS module), external deployments (register a URL), stdio deployments (upload an
   * MCPB bundle), and repo deployments (build from a connected GitHub repository).
   *
   * @example
   * ```ts
   * const response = await client.servers.deployments.deploy(
   *   'server',
   *   { namespace: 'namespace', payload: 'payload' },
   * );
   * ```
   */
  deploy(
    server: string,
    params: DeploymentDeployParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentDeployResponse> {
    const { namespace, ...body } = params;
    return this._client.put(
      path`/servers/${namespace}/${server}/deployments`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Deploy an MCP server via multipart form. Supports hosted deployments (upload a
   * JS module), external deployments (register a URL), stdio deployments (upload an
   * MCPB bundle), and repo deployments (build from a connected GitHub repository).
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.deployments.deployByNamespace(
   *     'namespace',
   *     { payload: 'payload' },
   *   );
   * ```
   */
  deployByNamespace(
    namespace: string,
    body: DeploymentDeployByNamespaceParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentDeployByNamespaceResponse> {
    return this._client.put(
      path`/servers/${namespace}/deployments`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Get full details for a specific deployment, including status, type, git
   * metadata, pipeline logs, and MCP endpoint URL.
   *
   * @example
   * ```ts
   * const deployment = await client.servers.deployments.get(
   *   'id',
   *   { namespace: 'namespace', server: 'server' },
   * );
   * ```
   */
  get(id: string, params: DeploymentGetParams, options?: RequestOptions): APIPromise<DeploymentGetResponse> {
    const { namespace, server } = params;
    return this._client.get(path`/servers/${namespace}/${server}/deployments/${id}`, options);
  }

  /**
   * Get full details for a specific deployment, including status, type, git
   * metadata, pipeline logs, and MCP endpoint URL.
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.deployments.getByNamespace('id', {
   *     namespace: 'namespace',
   *   });
   * ```
   */
  getByNamespace(
    id: string,
    params: DeploymentGetByNamespaceParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentGetByNamespaceResponse> {
    const { namespace } = params;
    return this._client.get(path`/servers/${namespace}/deployments/${id}`, options);
  }

  /**
   * List all deployments for a server, ordered by most recent first. Does not
   * include deployment logs — fetch a specific deployment to see logs.
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.deployments.listByNamespace(
   *     'namespace',
   *   );
   * ```
   */
  listByNamespace(
    namespace: string,
    options?: RequestOptions,
  ): APIPromise<DeploymentListByNamespaceResponse> {
    return this._client.get(path`/servers/${namespace}/deployments`, options);
  }

  /**
   * Use id='latest' to resume the most recent deployment
   *
   * @example
   * ```ts
   * const response = await client.servers.deployments.resume(
   *   'id',
   *   { namespace: 'namespace', server: 'server' },
   * );
   * ```
   */
  resume(
    id: string,
    params: DeploymentResumeParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentResumeResponse> {
    const { namespace, server } = params;
    return this._client.post(path`/servers/${namespace}/${server}/deployments/${id}/resume`, options);
  }

  /**
   * Use id='latest' to resume the most recent deployment
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.deployments.resumeByNamespace('id', {
   *     namespace: 'namespace',
   *   });
   * ```
   */
  resumeByNamespace(
    id: string,
    params: DeploymentResumeByNamespaceParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentResumeByNamespaceResponse> {
    const { namespace } = params;
    return this._client.post(path`/servers/${namespace}/deployments/${id}/resume`, options);
  }

  /**
   * Returns a real-time SSE stream of deployment logs and status updates. Connect to
   * this endpoint to receive live updates as the deployment progresses.
   *
   * @example
   * ```ts
   * const response = await client.servers.deployments.stream(
   *   'id',
   *   { namespace: 'namespace', server: 'server' },
   * );
   * ```
   */
  stream(
    id: string,
    params: DeploymentStreamParams,
    options?: RequestOptions,
  ): APIPromise<Stream<DeploymentStreamResponse>> {
    const { namespace, server } = params;
    return this._client.get(path`/servers/${namespace}/${server}/deployments/${id}/stream`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<DeploymentStreamResponse>>;
  }

  /**
   * Returns a real-time SSE stream of deployment logs and status updates. Connect to
   * this endpoint to receive live updates as the deployment progresses.
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.deployments.streamByNamespace('id', {
   *     namespace: 'namespace',
   *   });
   * ```
   */
  streamByNamespace(
    id: string,
    params: DeploymentStreamByNamespaceParams,
    options?: RequestOptions,
  ): APIPromise<Stream<DeploymentStreamByNamespaceResponse>> {
    const { namespace } = params;
    return this._client.get(path`/servers/${namespace}/deployments/${id}/stream`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<DeploymentStreamByNamespaceResponse>>;
  }
}

export type DeployPayload =
  | HostedDeployPayload
  | ExternalDeployPayload
  | StdioDeployPayload
  | DeployPayload.RepoDeployPayload;

export namespace DeployPayload {
  export interface RepoDeployPayload {
    type: 'repo';

    baseDirectory?: string;

    branch?: string;

    repoName?: string;

    repoOwner?: string;
  }
}

export interface ExternalDeployPayload {
  type: 'external';

  upstreamUrl: string;

  configSchema?: { [key: string]: unknown };

  scanCredentials?: { [key: string]: string };
}

export interface HostedDeployPayload {
  stateful: boolean;

  type: 'hosted';

  configSchema?: { [key: string]: unknown };

  serverCard?: ServerCard;

  source?: HostedDeployPayload.Source;
}

export namespace HostedDeployPayload {
  export interface Source {
    branch?: string;

    commit?: string;
  }
}

export interface ServerCard {
  serverInfo: ServerCard.ServerInfo;

  authentication?: ServerCard.Authentication;

  prompts?: Array<ServerCard.Prompt>;

  resources?: Array<ServerCard.Resource>;

  tools?: Array<ServerCard.Tool>;

  [k: string]: unknown;
}

export namespace ServerCard {
  export interface ServerInfo {
    name: string;

    version: string;

    description?: string;

    icons?: Array<ServerInfo.Icon>;

    title?: string;

    websiteUrl?: string;
  }

  export namespace ServerInfo {
    export interface Icon {
      src: string;

      mimeType?: string;

      sizes?: Array<string>;

      theme?: 'light' | 'dark';
    }
  }

  export interface Authentication {
    required: boolean;

    schemes: Array<string>;
  }

  export interface Prompt {
    name: string;

    _meta?: { [key: string]: unknown };

    arguments?: Array<Prompt.Argument>;

    description?: string;

    icons?: Array<Prompt.Icon>;

    title?: string;
  }

  export namespace Prompt {
    export interface Argument {
      name: string;

      description?: string;

      required?: boolean;
    }

    export interface Icon {
      src: string;

      mimeType?: string;

      sizes?: Array<string>;

      theme?: 'light' | 'dark';
    }
  }

  export interface Resource {
    name: string;

    uri: string;

    _meta?: { [key: string]: unknown };

    annotations?: Resource.Annotations;

    description?: string;

    icons?: Array<Resource.Icon>;

    mimeType?: string;

    title?: string;
  }

  export namespace Resource {
    export interface Annotations {
      audience?: Array<'user' | 'assistant'>;

      lastModified?: string;

      priority?: number;
    }

    export interface Icon {
      src: string;

      mimeType?: string;

      sizes?: Array<string>;

      theme?: 'light' | 'dark';
    }
  }

  export interface Tool {
    inputSchema: Tool.InputSchema;

    name: string;

    _meta?: { [key: string]: unknown };

    annotations?: Tool.Annotations;

    description?: string;

    execution?: Tool.Execution;

    icons?: Array<Tool.Icon>;

    outputSchema?: Tool.OutputSchema;

    title?: string;
  }

  export namespace Tool {
    export interface InputSchema {
      type: 'object';

      properties?: { [key: string]: unknown };

      required?: Array<string>;

      [k: string]: unknown;
    }

    export interface Annotations {
      destructiveHint?: boolean;

      idempotentHint?: boolean;

      openWorldHint?: boolean;

      readOnlyHint?: boolean;

      title?: string;
    }

    export interface Execution {
      taskSupport?: 'required' | 'optional' | 'forbidden';
    }

    export interface Icon {
      src: string;

      mimeType?: string;

      sizes?: Array<string>;

      theme?: 'light' | 'dark';
    }

    export interface OutputSchema {
      type: 'object';

      properties?: { [key: string]: unknown };

      required?: Array<string>;

      [k: string]: unknown;
    }
  }
}

export interface StdioDeployPayload {
  runtime: 'node';

  type: 'stdio';

  configSchema?: { [key: string]: unknown };

  serverCard?: ServerCard;

  source?: StdioDeployPayload.Source;
}

export namespace StdioDeployPayload {
  export interface Source {
    branch?: string;

    commit?: string;
  }
}

export type DeploymentListResponse = Array<DeploymentListResponse.DeploymentListResponseItem>;

export namespace DeploymentListResponse {
  export interface DeploymentListResponseItem {
    id: string;

    /**
     * ISO 8601 timestamp of when the deployment was created.
     */
    createdAt: string;

    /**
     * Current deployment status: QUEUED, WORKING, SUCCESS, FAILURE, FAILURE_SCAN,
     * AUTH_REQUIRED, CANCELLED, or INTERNAL_ERROR.
     */
    status: string;

    /**
     * Deployment type: hosted_shttp (Smithery-hosted), external_shttp (external URL),
     * or stdio (local binary).
     */
    type: string;

    /**
     * ISO 8601 timestamp of the last status change.
     */
    updatedAt: string;

    /**
     * Git branch this deployment was built from.
     */
    branch?: string | null;

    /**
     * Git commit SHA that triggered this deployment. Present for repo and
     * source-tracked deployments.
     */
    commit?: string | null;

    /**
     * Git commit message associated with this deployment.
     */
    commitMessage?: string | null;

    /**
     * The MCP endpoint URL for connecting to this server.
     */
    mcpUrl?: string;

    /**
     * Upstream MCP server URL. Present only for external deployments.
     */
    upstreamUrl?: string | null;
  }
}

export interface DeploymentDeployResponse {
  /**
   * Unique identifier for this deployment.
   */
  deploymentId: string;

  /**
   * The MCP endpoint URL for connecting to this server once deployed.
   */
  mcpUrl: string;

  /**
   * Initial deployment status. Will be WORKING while the deployment is in progress.
   */
  status: string;

  /**
   * Non-fatal warnings encountered during deployment submission.
   */
  warnings?: Array<string>;
}

export interface DeploymentDeployByNamespaceResponse {
  /**
   * Unique identifier for this deployment.
   */
  deploymentId: string;

  /**
   * The MCP endpoint URL for connecting to this server once deployed.
   */
  mcpUrl: string;

  /**
   * Initial deployment status. Will be WORKING while the deployment is in progress.
   */
  status: string;

  /**
   * Non-fatal warnings encountered during deployment submission.
   */
  warnings?: Array<string>;
}

export interface DeploymentGetResponse {
  id: string;

  /**
   * ISO 8601 timestamp of when the deployment was created.
   */
  createdAt: string;

  /**
   * Current deployment status: QUEUED, WORKING, SUCCESS, FAILURE, FAILURE_SCAN,
   * AUTH_REQUIRED, CANCELLED, or INTERNAL_ERROR.
   */
  status: string;

  /**
   * Deployment type: hosted_shttp (Smithery-hosted), external_shttp (external URL),
   * or stdio (local binary).
   */
  type: string;

  /**
   * ISO 8601 timestamp of the last status change.
   */
  updatedAt: string;

  /**
   * Git branch this deployment was built from.
   */
  branch?: string | null;

  /**
   * Git commit SHA that triggered this deployment. Present for repo and
   * source-tracked deployments.
   */
  commit?: string | null;

  /**
   * Git commit message associated with this deployment.
   */
  commitMessage?: string | null;

  /**
   * Deployment pipeline log entries. Only included when fetching a single
   * deployment.
   */
  logs?: Array<DeploymentGetResponse.Log>;

  /**
   * The MCP endpoint URL for connecting to this server.
   */
  mcpUrl?: string;

  /**
   * Upstream MCP server URL. Present only for external deployments.
   */
  upstreamUrl?: string | null;
}

export namespace DeploymentGetResponse {
  export interface Log {
    /**
     * Log level: 'start', 'end', 'info', 'success', or 'failure'.
     */
    level: string;

    /**
     * Human-readable log message.
     */
    message: string;

    /**
     * Deployment pipeline stage: deploy (bundle upload), scan (security/OAuth check),
     * metadata (tool discovery), publish (making the server live).
     */
    stage: 'deploy' | 'scan' | 'metadata' | 'publish';

    /**
     * ISO 8601 timestamp of the log entry.
     */
    timestamp: string;

    /**
     * Error details, present only when the stage failed.
     */
    error?: Log.Error;
  }

  export namespace Log {
    /**
     * Error details, present only when the stage failed.
     */
    export interface Error {
      message?: string;
    }
  }
}

export interface DeploymentGetByNamespaceResponse {
  id: string;

  /**
   * ISO 8601 timestamp of when the deployment was created.
   */
  createdAt: string;

  /**
   * Current deployment status: QUEUED, WORKING, SUCCESS, FAILURE, FAILURE_SCAN,
   * AUTH_REQUIRED, CANCELLED, or INTERNAL_ERROR.
   */
  status: string;

  /**
   * Deployment type: hosted_shttp (Smithery-hosted), external_shttp (external URL),
   * or stdio (local binary).
   */
  type: string;

  /**
   * ISO 8601 timestamp of the last status change.
   */
  updatedAt: string;

  /**
   * Git branch this deployment was built from.
   */
  branch?: string | null;

  /**
   * Git commit SHA that triggered this deployment. Present for repo and
   * source-tracked deployments.
   */
  commit?: string | null;

  /**
   * Git commit message associated with this deployment.
   */
  commitMessage?: string | null;

  /**
   * Deployment pipeline log entries. Only included when fetching a single
   * deployment.
   */
  logs?: Array<DeploymentGetByNamespaceResponse.Log>;

  /**
   * The MCP endpoint URL for connecting to this server.
   */
  mcpUrl?: string;

  /**
   * Upstream MCP server URL. Present only for external deployments.
   */
  upstreamUrl?: string | null;
}

export namespace DeploymentGetByNamespaceResponse {
  export interface Log {
    /**
     * Log level: 'start', 'end', 'info', 'success', or 'failure'.
     */
    level: string;

    /**
     * Human-readable log message.
     */
    message: string;

    /**
     * Deployment pipeline stage: deploy (bundle upload), scan (security/OAuth check),
     * metadata (tool discovery), publish (making the server live).
     */
    stage: 'deploy' | 'scan' | 'metadata' | 'publish';

    /**
     * ISO 8601 timestamp of the log entry.
     */
    timestamp: string;

    /**
     * Error details, present only when the stage failed.
     */
    error?: Log.Error;
  }

  export namespace Log {
    /**
     * Error details, present only when the stage failed.
     */
    export interface Error {
      message?: string;
    }
  }
}

export type DeploymentListByNamespaceResponse =
  Array<DeploymentListByNamespaceResponse.DeploymentListByNamespaceResponseItem>;

export namespace DeploymentListByNamespaceResponse {
  export interface DeploymentListByNamespaceResponseItem {
    id: string;

    /**
     * ISO 8601 timestamp of when the deployment was created.
     */
    createdAt: string;

    /**
     * Current deployment status: QUEUED, WORKING, SUCCESS, FAILURE, FAILURE_SCAN,
     * AUTH_REQUIRED, CANCELLED, or INTERNAL_ERROR.
     */
    status: string;

    /**
     * Deployment type: hosted_shttp (Smithery-hosted), external_shttp (external URL),
     * or stdio (local binary).
     */
    type: string;

    /**
     * ISO 8601 timestamp of the last status change.
     */
    updatedAt: string;

    /**
     * Git branch this deployment was built from.
     */
    branch?: string | null;

    /**
     * Git commit SHA that triggered this deployment. Present for repo and
     * source-tracked deployments.
     */
    commit?: string | null;

    /**
     * Git commit message associated with this deployment.
     */
    commitMessage?: string | null;

    /**
     * The MCP endpoint URL for connecting to this server.
     */
    mcpUrl?: string;

    /**
     * Upstream MCP server URL. Present only for external deployments.
     */
    upstreamUrl?: string | null;
  }
}

export interface DeploymentResumeResponse {
  deploymentId: string;

  status: string;
}

export interface DeploymentResumeByNamespaceResponse {
  deploymentId: string;

  status: string;
}

/**
 * SSE events: init (with buffered logs), log, status, complete
 */
export type DeploymentStreamResponse = string;

/**
 * SSE events: init (with buffered logs), log, status, complete
 */
export type DeploymentStreamByNamespaceResponse = string;

export interface DeploymentListParams {
  namespace: string;
}

export interface DeploymentDeployParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param: JSON-encoded deployment payload. See DeployPayload schema for
   * structure.
   */
  payload: string;

  /**
   * Body param: MCPB bundle file (for stdio deployments)
   */
  bundle?: Uploadable;

  /**
   * Body param: JavaScript module file (for hosted deployments)
   */
  module?: Uploadable;

  /**
   * Body param: Source map file (for hosted deployments)
   */
  sourcemap?: Uploadable;
}

export interface DeploymentDeployByNamespaceParams {
  /**
   * JSON-encoded deployment payload. See DeployPayload schema for structure.
   */
  payload: string;

  /**
   * MCPB bundle file (for stdio deployments)
   */
  bundle?: Uploadable;

  /**
   * JavaScript module file (for hosted deployments)
   */
  module?: Uploadable;

  /**
   * Source map file (for hosted deployments)
   */
  sourcemap?: Uploadable;
}

export interface DeploymentGetParams {
  namespace: string;

  server: string;
}

export interface DeploymentGetByNamespaceParams {
  namespace: string;
}

export interface DeploymentResumeParams {
  namespace: string;

  server: string;
}

export interface DeploymentResumeByNamespaceParams {
  namespace: string;
}

export interface DeploymentStreamParams {
  namespace: string;

  server: string;
}

export interface DeploymentStreamByNamespaceParams {
  namespace: string;
}

export declare namespace Deployments {
  export {
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
}
