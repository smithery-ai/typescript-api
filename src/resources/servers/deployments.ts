// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Deployments extends APIResource {
  /**
   * Get deployment status
   */
  retrieve(
    id: string,
    params: DeploymentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentRetrieveResponse> {
    const { qualifiedName } = params;
    return this._client.get(path`/servers/${qualifiedName}/deployments/${id}`, options);
  }

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

export interface DeploymentRetrieveResponse {
  id: string;

  createdAt: string;

  status: string;

  updatedAt: string;

  logs?: Array<DeploymentRetrieveResponse.Log>;

  mcpUrl?: string;
}

export namespace DeploymentRetrieveResponse {
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

export interface DeploymentResumeResponse {
  deploymentId: string;

  status: string;
}

export interface DeploymentRetrieveParams {
  qualifiedName: string;
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

export interface DeploymentResumeParams {
  qualifiedName: string;
}

export declare namespace Deployments {
  export {
    type DeploymentRetrieveResponse as DeploymentRetrieveResponse,
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentDeployResponse as DeploymentDeployResponse,
    type DeploymentResumeResponse as DeploymentResumeResponse,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentDeployParams as DeploymentDeployParams,
    type DeploymentResumeParams as DeploymentResumeParams,
  };
}
