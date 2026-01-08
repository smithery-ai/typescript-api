// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Resume extends APIResource {
  /**
   * Use id='latest' to resume the most recent deployment
   */
  create(id: string, params: ResumeCreateParams, options?: RequestOptions): APIPromise<ResumeCreateResponse> {
    const { name } = params;
    return this._client.post(path`/servers//${name}/deployments/${id}/resume`, options);
  }
}

export interface ResumeCreateResponse {
  deploymentId: string;

  status: string;
}

export interface ResumeCreateParams {
  name: string;
}

export declare namespace Resume {
  export { type ResumeCreateResponse as ResumeCreateResponse, type ResumeCreateParams as ResumeCreateParams };
}
