// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { Stream } from '../../core/streaming';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Releases extends APIResource {
  /**
   * List releases ordered by most recent first. Logs are omitted — fetch a specific
   * release to see logs.
   *
   * @example
   * ```ts
   * const releases = await client.servers.releases.list(
   *   'qualifiedName',
   * );
   * ```
   */
  list(qualifiedName: string, options?: RequestOptions): APIPromise<ReleaseListResponse> {
    return this._client.get(path`/servers/${qualifiedName}/releases`, options);
  }

  /**
   * Submit a release via multipart form. Supports hosted (JS module upload),
   * external (URL), stdio (MCPB bundle), and repo (GitHub build) release types.
   *
   * @example
   * ```ts
   * const response = await client.servers.releases.deploy(
   *   'qualifiedName',
   *   { payload: 'payload' },
   * );
   * ```
   */
  deploy(
    qualifiedName: string,
    body: ReleaseDeployParams,
    options?: RequestOptions,
  ): APIPromise<ReleaseDeployResponse> {
    return this._client.put(
      path`/servers/${qualifiedName}/releases`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Retrieve release details including status, git metadata, pipeline logs, and MCP
   * endpoint URL.
   *
   * @example
   * ```ts
   * const release = await client.servers.releases.get('id', {
   *   qualifiedName: 'qualifiedName',
   * });
   * ```
   */
  get(id: string, params: ReleaseGetParams, options?: RequestOptions): APIPromise<ReleaseGetResponse> {
    const { qualifiedName } = params;
    return this._client.get(path`/servers/${qualifiedName}/releases/${id}`, options);
  }

  /**
   * Resume a paused release (e.g. after OAuth authorization). Use id='latest' to
   * resume the most recent one.
   *
   * @example
   * ```ts
   * const response = await client.servers.releases.resume(
   *   'id',
   *   { qualifiedName: 'qualifiedName' },
   * );
   * ```
   */
  resume(
    id: string,
    params: ReleaseResumeParams,
    options?: RequestOptions,
  ): APIPromise<ReleaseResumeResponse> {
    const { qualifiedName } = params;
    return this._client.post(path`/servers/${qualifiedName}/releases/${id}/resume`, options);
  }

  /**
   * Real-time SSE stream of release logs and status updates.
   *
   * @example
   * ```ts
   * const response = await client.servers.releases.stream(
   *   'id',
   *   { qualifiedName: 'qualifiedName' },
   * );
   * ```
   */
  stream(
    id: string,
    params: ReleaseStreamParams,
    options?: RequestOptions,
  ): APIPromise<Stream<ReleaseStreamResponse>> {
    const { qualifiedName } = params;
    return this._client.get(path`/servers/${qualifiedName}/releases/${id}/stream`, {
      ...options,
      headers: buildHeaders([{ Accept: 'text/event-stream' }, options?.headers]),
      stream: true,
    }) as APIPromise<Stream<ReleaseStreamResponse>>;
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
  hasAuthAdapter: boolean;

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

  eventTopics?: Array<ServerCard.EventTopic>;

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

  export interface EventTopic {
    name: string;

    topic: string;

    description?: string;

    eventSchema?: { [key: string]: unknown };

    inputSchema?: { [key: string]: unknown };
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
  hasAuthAdapter: boolean;

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

export type ReleaseListResponse = Array<ReleaseListResponse.ReleaseListResponseItem>;

export namespace ReleaseListResponse {
  export interface ReleaseListResponseItem {
    id: string;

    /**
     * ISO 8601 timestamp of when the release was created.
     */
    createdAt: string;

    /**
     * Current status: QUEUED, WORKING, SUCCESS, FAILURE, FAILURE_SCAN, AUTH_REQUIRED,
     * CANCELLED, or INTERNAL_ERROR.
     */
    status: string;

    /**
     * Release type: hosted_shttp (Smithery-hosted), external_shttp (external URL), or
     * stdio (local binary).
     */
    type: string;

    /**
     * ISO 8601 timestamp of the last status change.
     */
    updatedAt: string;

    /**
     * Git branch this release was built from.
     */
    branch?: string | null;

    /**
     * Git commit SHA that triggered this release.
     */
    commit?: string | null;

    /**
     * Git commit message associated with this release.
     */
    commitMessage?: string | null;

    /**
     * The MCP endpoint URL for connecting to this server.
     */
    mcpUrl?: string;

    /**
     * Upstream MCP server URL. Present only for external releases.
     */
    upstreamUrl?: string | null;
  }
}

export interface ReleaseDeployResponse {
  /**
   * Unique identifier for this release.
   */
  deploymentId: string;

  /**
   * The MCP endpoint URL for connecting to this server once published.
   */
  mcpUrl: string;

  /**
   * Initial status. Will be WORKING while the release is in progress.
   */
  status: string;

  /**
   * Non-fatal warnings encountered during submission.
   */
  warnings?: Array<string>;
}

export interface ReleaseGetResponse {
  id: string;

  /**
   * ISO 8601 timestamp of when the release was created.
   */
  createdAt: string;

  /**
   * Current status: QUEUED, WORKING, SUCCESS, FAILURE, FAILURE_SCAN, AUTH_REQUIRED,
   * CANCELLED, or INTERNAL_ERROR.
   */
  status: string;

  /**
   * Release type: hosted_shttp (Smithery-hosted), external_shttp (external URL), or
   * stdio (local binary).
   */
  type: string;

  /**
   * ISO 8601 timestamp of the last status change.
   */
  updatedAt: string;

  /**
   * Git branch this release was built from.
   */
  branch?: string | null;

  /**
   * Git commit SHA that triggered this release.
   */
  commit?: string | null;

  /**
   * Git commit message associated with this release.
   */
  commitMessage?: string | null;

  /**
   * Pipeline log entries. Only included when fetching a single release.
   */
  logs?: Array<ReleaseGetResponse.Log>;

  /**
   * The MCP endpoint URL for connecting to this server.
   */
  mcpUrl?: string;

  /**
   * Upstream MCP server URL. Present only for external releases.
   */
  upstreamUrl?: string | null;
}

export namespace ReleaseGetResponse {
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
     * Pipeline stage: deploy (bundle upload), scan (security/OAuth check), metadata
     * (tool discovery), publish (making the server live).
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

export interface ReleaseResumeResponse {
  deploymentId: string;

  status: string;
}

/**
 * SSE events: init (with buffered logs), log, status, complete
 */
export type ReleaseStreamResponse = string;

export interface ReleaseDeployParams {
  /**
   * JSON-encoded release payload. See DeployPayload schema for structure.
   */
  payload: string;

  /**
   * MCPB bundle file (for stdio releases)
   */
  bundle?: Uploadable;

  /**
   * JavaScript module file (for hosted releases)
   */
  module?: Uploadable;

  /**
   * Source map file (for hosted releases)
   */
  sourcemap?: Uploadable;
}

export interface ReleaseGetParams {
  /**
   * The server's qualified name (e.g. 'namespace/server' or 'namespace' for
   * namespace-only servers). Use %2F to encode the slash.
   */
  qualifiedName: string;
}

export interface ReleaseResumeParams {
  /**
   * The server's qualified name (e.g. 'namespace/server' or 'namespace' for
   * namespace-only servers). Use %2F to encode the slash.
   */
  qualifiedName: string;
}

export interface ReleaseStreamParams {
  /**
   * The server's qualified name (e.g. 'namespace/server' or 'namespace' for
   * namespace-only servers). Use %2F to encode the slash.
   */
  qualifiedName: string;
}

export declare namespace Releases {
  export {
    type DeployPayload as DeployPayload,
    type ExternalDeployPayload as ExternalDeployPayload,
    type HostedDeployPayload as HostedDeployPayload,
    type ServerCard as ServerCard,
    type StdioDeployPayload as StdioDeployPayload,
    type ReleaseListResponse as ReleaseListResponse,
    type ReleaseDeployResponse as ReleaseDeployResponse,
    type ReleaseGetResponse as ReleaseGetResponse,
    type ReleaseResumeResponse as ReleaseResumeResponse,
    type ReleaseStreamResponse as ReleaseStreamResponse,
    type ReleaseDeployParams as ReleaseDeployParams,
    type ReleaseGetParams as ReleaseGetParams,
    type ReleaseResumeParams as ReleaseResumeParams,
    type ReleaseStreamParams as ReleaseStreamParams,
  };
}
