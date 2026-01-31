// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Deployments extends APIResource {
  /**
   * List deployments for a server
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
   * Upload and deploy an MCP server (hosted or external)
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
   * Get deployment status
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

    createdAt: string;

    status: string;

    type: string;

    updatedAt: string;

    branch?: string | null;

    commit?: string | null;

    commitMessage?: string | null;

    mcpUrl?: string;

    upstreamUrl?: string | null;
  }
}

export interface DeploymentDeployResponse {
  deploymentId: string;

  mcpUrl: string;

  status: string;

  warnings?: Array<string>;
}

export interface DeploymentGetResponse {
  id: string;

  createdAt: string;

  status: string;

  type: string;

  updatedAt: string;

  branch?: string | null;

  commit?: string | null;

  commitMessage?: string | null;

  logs?: Array<DeploymentGetResponse.Log>;

  mcpUrl?: string;

  upstreamUrl?: string | null;
}

export namespace DeploymentGetResponse {
  export interface Log {
    level: string;

    message: string;

    stage: 'deploy' | 'scan' | 'metadata' | 'publish';

    timestamp: string;

    error?: Log.Error;
  }

  export namespace Log {
    export interface Error {
      message?: string;
    }
  }
}

export interface DeploymentResumeResponse {
  deploymentId: string;

  status: string;
}

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

export interface DeploymentGetParams {
  namespace: string;

  server: string;
}

export interface DeploymentResumeParams {
  namespace: string;

  server: string;
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
    type DeploymentGetResponse as DeploymentGetResponse,
    type DeploymentResumeResponse as DeploymentResumeResponse,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeployParams as DeploymentDeployParams,
    type DeploymentGetParams as DeploymentGetParams,
    type DeploymentResumeParams as DeploymentResumeParams,
  };
}
