// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Creates an API key owned by the organization. Requires admin role.
   */
  create(
    orgID: string,
    body: APIKeyCreateParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyCreateResponse> {
    return this._client.post(path`/organizations/${orgID}/api-keys`, { body, ...options });
  }

  /**
   * Returns all API keys belonging to the organization. Requires admin role. Key
   * values are not included in the response.
   */
  list(orgID: string, options?: RequestOptions): APIPromise<APIKeyListResponse> {
    return this._client.get(path`/organizations/${orgID}/api-keys`, options);
  }

  /**
   * Deletes an API key belonging to the organization. Requires admin role.
   */
  delete(
    keyID: string,
    params: APIKeyDeleteParams,
    options?: RequestOptions,
  ): APIPromise<APIKeyDeleteResponse> {
    const { orgId } = params;
    return this._client.delete(path`/organizations/${orgId}/api-keys/${keyID}`, options);
  }
}

export interface APIKeyCreateResponse {
  id: string;

  createdAt: string;

  key: string;

  name: string;
}

export interface APIKeyListResponse {
  apiKeys: Array<unknown>;
}

export interface APIKeyDeleteResponse {
  success: boolean;
}

export interface APIKeyCreateParams {
  /**
   * Name for the team API key
   */
  name: string;
}

export interface APIKeyDeleteParams {
  orgId: string;
}

export declare namespace APIKeys {
  export {
    type APIKeyCreateResponse as APIKeyCreateResponse,
    type APIKeyListResponse as APIKeyListResponse,
    type APIKeyDeleteResponse as APIKeyDeleteResponse,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyDeleteParams as APIKeyDeleteParams,
  };
}
