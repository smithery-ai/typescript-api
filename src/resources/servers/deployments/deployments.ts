// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ResumeAPI from './resume';
import { Resume, ResumeCreateParams, ResumeCreateResponse } from './resume';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Deployments extends APIResource {
  resume: ResumeAPI.Resume = new ResumeAPI.Resume(this._client);

  /**
   * Upload and deploy an MCP server (hosted or external)
   */
  create(
    name: string,
    body: DeploymentCreateParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentCreateResponse> {
    return this._client.put(
      path`/servers//${name}/deployments`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

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
   * Upload and deploy an MCP server (hosted or external)
   */
  update(
    name: string,
    body: DeploymentUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DeploymentUpdateResponse> {
    return this._client.put(
      path`/servers/${name}/deployments`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
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
}

export interface DeploymentCreateResponse {
  deploymentId: string;

  mcpUrl: string;

  status: string;

  warnings?: Array<string>;
}

export interface DeploymentRetrieveResponse {
  id: string;

  createdAt: string;

  status: string;

  updatedAt: string;

  logs?: Array<unknown>;

  mcpUrl?: string;
}

export interface DeploymentUpdateResponse {
  deploymentId: string;

  mcpUrl: string;

  status: string;

  warnings?: Array<string>;
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

export interface DeploymentCreateParams {
  /**
   * JSON string of DeployPayload
   */
  payload: string;

  /**
   * JavaScript module content (for hosted deployments)
   */
  module?: string;

  /**
   * Source map content
   */
  sourcemap?: string;
}

export interface DeploymentRetrieveParams {
  namespace: string;

  name: string;
}

export interface DeploymentUpdateParams {
  /**
   * JSON string of DeployPayload
   */
  payload: string;

  /**
   * JavaScript module content (for hosted deployments)
   */
  module?: string;

  /**
   * Source map content
   */
  sourcemap?: string;
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

Deployments.Resume = Resume;

export declare namespace Deployments {
  export {
    type DeploymentCreateResponse as DeploymentCreateResponse,
    type DeploymentRetrieveResponse as DeploymentRetrieveResponse,
    type DeploymentUpdateResponse as DeploymentUpdateResponse,
    type DeploymentListResponse as DeploymentListResponse,
    type DeploymentDeployResponse as DeploymentDeployResponse,
    type DeploymentCreateParams as DeploymentCreateParams,
    type DeploymentRetrieveParams as DeploymentRetrieveParams,
    type DeploymentUpdateParams as DeploymentUpdateParams,
    type DeploymentListParams as DeploymentListParams,
    type DeploymentDeployParams as DeploymentDeployParams,
  };

  export {
    Resume as Resume,
    type ResumeCreateResponse as ResumeCreateResponse,
    type ResumeCreateParams as ResumeCreateParams,
  };
}
