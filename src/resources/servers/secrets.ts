// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Fetch secret names for the server's deployed Worker (requires ownership). Values
   * are not returned.
   */
  list(qualifiedName: string, options?: RequestOptions): APIPromise<SecretListResponse> {
    return this._client.get(path`/servers/${qualifiedName}/secrets`, options);
  }

  /**
   * Delete a secret by name from the server's deployed Worker (requires ownership).
   */
  delete(
    secretName: string,
    params: SecretDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SecretDeleteResponse> {
    const { qualifiedName } = params;
    return this._client.delete(path`/servers/${qualifiedName}/secrets/${secretName}`, options);
  }

  /**
   * Set a secret value for the server's deployed Worker (requires ownership).
   */
  set(qualifiedName: string, body: SecretSetParams, options?: RequestOptions): APIPromise<SecretSetResponse> {
    return this._client.put(path`/servers/${qualifiedName}/secrets`, { body, ...options });
  }
}

export type SecretListResponse = Array<SecretListResponse.SecretListResponseItem>;

export namespace SecretListResponse {
  export interface SecretListResponseItem {
    name: string;

    type: string;
  }
}

export interface SecretDeleteResponse {
  success: boolean;
}

export interface SecretSetResponse {
  success: boolean;
}

export interface SecretDeleteParams {
  qualifiedName: string;
}

export interface SecretSetParams {
  name: string;

  value: string;
}

export declare namespace Secrets {
  export {
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretSetResponse as SecretSetResponse,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretSetParams as SecretSetParams,
  };
}
