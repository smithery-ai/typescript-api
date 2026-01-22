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
   */
  list(qualifiedName: string, options?: RequestOptions): APIPromise<DeploymentListResponse> {
    return this._client.get(path`/servers/${qualifiedName}/deployments`, options);
  }

  /**
   * Upload and deploy an MCP server (hosted or external)
   */
  deploy(
    qualifiedName: string,
    body: DeploymentDeployParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentDeployResponse> {
    return this._client.put(
      path`/servers/${qualifiedName}/deployments`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Get deployment status
   */
  get(id: string, params: DeploymentGetParams, options?: RequestOptions): APIPromise<DeploymentGetResponse> {
    const { qualifiedName } = params;
    return this._client.get(path`/servers/${qualifiedName}/deployments/${id}`, options);
  }

  /**
   * Use id='latest' to resume the most recent deployment
   */
  resume(
    id: string,
    params: DeploymentResumeParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentResumeResponse> {
    const { qualifiedName } = params;
    return this._client.post(path`/servers/${qualifiedName}/deployments/${id}/resume`, options);
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

    updatedAt: string;

    mcpUrl?: string;
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

  updatedAt: string;

  logs?: Array<DeploymentGetResponse.Log>;

  mcpUrl?: string;
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

export interface DeploymentDeployParams {
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
  qualifiedName: string;
}

export interface DeploymentResumeParams {
  qualifiedName: string;
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
    type DeploymentDeployParams as DeploymentDeployParams,
    type DeploymentGetParams as DeploymentGetParams,
    type DeploymentResumeParams as DeploymentResumeParams,
  };
}
