// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Namespaces extends APIResource {
  /**
   * Create a new namespace with a server-generated human-readable name, owned by the
   * authenticated user
   */
  create(options?: RequestOptions): APIPromise<NamespaceCreateResponse> {
    return this._client.post('/namespaces', options);
  }

  /**
   * Get a list of all namespaces owned by the authenticated user
   */
  list(options?: RequestOptions): APIPromise<NamespaceListResponse> {
    return this._client.get('/namespaces', options);
  }

  /**
   * Create a new namespace owned by the authenticated user. This endpoint is
   * idempotent - if the namespace already exists and is owned by the user, returns
   * success.
   */
  set(name: string, options?: RequestOptions): APIPromise<NamespaceSetResponse> {
    return this._client.put(path`/namespaces/${name}`, options);
  }
}

export interface NamespaceCreateResponse {
  createdAt: string;

  name: string;
}

export interface NamespaceListResponse {
  namespaces: Array<NamespaceListResponse.Namespace>;
}

export namespace NamespaceListResponse {
  export interface Namespace {
    createdAt: string;

    name: string;
  }
}

export interface NamespaceSetResponse {
  createdAt: string;

  name: string;
}

export declare namespace Namespaces {
  export {
    type NamespaceCreateResponse as NamespaceCreateResponse,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceSetResponse as NamespaceSetResponse,
  };
}
