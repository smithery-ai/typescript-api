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
  retrieve(id: string, params: DeploymentRetrieveParams, options?: RequestOptions): APIPromise<unknown> {
    const { qualifiedName } = params;
    return this._client.get(path`/servers/${qualifiedName}/deployments/${id}`, options);
  }

  /**
   * List deployments for a server
   */
  list(qualifiedName: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.get(path`/servers/${qualifiedName}/deployments`, options);
  }

  /**
   * Upload and deploy an MCP server (hosted or external)
   */
  deploy(qualifiedName: string, body: DeploymentDeployParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.put(
      path`/servers/${qualifiedName}/deployments`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Use id='latest' to resume the most recent deployment
   */
  resume(id: string, params: DeploymentResumeParams, options?: RequestOptions): APIPromise<unknown> {
    const { qualifiedName } = params;
    return this._client.post(path`/servers/${qualifiedName}/deployments/${id}/resume`, options);
  }
}

export type DeploymentRetrieveResponse = unknown;

export type DeploymentListResponse = unknown;

export type DeploymentDeployResponse = unknown;

export type DeploymentResumeResponse = unknown;

export interface DeploymentRetrieveParams {
  qualifiedName: string;
}

export interface DeploymentDeployParams {
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
