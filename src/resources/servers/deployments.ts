// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
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
    const { namespace, name } = params;
    return this._client.get(path`/servers/${namespace}/${name}/deployments/${id}`, options);
  }

  /**
   * List deployments for a server
   */
  list(
    name: string,
    params: DeploymentListParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentListResponse> {
    const { namespace } = params;
    return this._client.get(path`/servers/${namespace}/${name}/deployments`, options);
  }

  /**
   * Upload and deploy an MCP server (hosted or external)
   */
  deploy(
    name: string,
    params: DeploymentDeployParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentDeployResponse> {
    const { namespace, ...body } = params;
    return this._client.put(
      path`/servers/${namespace}/${name}/deployments`,
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
    const { namespace, name } = params;
    return this._client.post(path`/servers/${namespace}/${name}/deployments/${id}/resume`, options);
  }
}

export interface DeploymentRetrieveResponse {
  id: string;

  createdAt: string;

  status: string;

  updatedAt: string;

  logs?: Array<unknown>;

  mcpUrl?: string;
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
  namespace: string;

  name: string;
}

export interface DeploymentListParams {
  namespace: string;
}

export interface DeploymentDeployParams {
  /**
   * Path param:
   */
  namespace: string;

  /**
   * Body param: JSON string of DeployPayload
   */
  payload: string;

  /**
   * Body param: JavaScript module content (for hosted deployments)
   */
  module?: string;

  /**
   * Body param: Source map content
   */
  sourcemap?: string;
}

export interface DeploymentResumeParams {
  namespace: string;

  name: string;
}

export declare namespace Deployments {
  export {
    type DeploymentRetrieveResponse as DeploymentRetrieveResponse,
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentDeployResponse as DeploymentDeployResponse,
    type DeploymentResumeResponse as DeploymentResumeResponse,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeployParams as DeploymentDeployParams,
    type DeploymentResumeParams as DeploymentResumeParams,
  };
}
