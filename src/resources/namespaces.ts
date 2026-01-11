// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Namespaces extends APIResource {
  /**
   * Create a new namespace owned by the authenticated user
   *
   * @example
   * ```ts
   * const namespace = await client.namespaces.create({
   *   name: 'myorg',
   * });
   * ```
   */
  create(body: NamespaceCreateParams, options?: RequestOptions): APIPromise<NamespaceCreateResponse> {
    return this._client.put('/namespaces', { body, ...options });
  }

  /**
   * Get a list of all namespaces owned by the authenticated user
   *
   * @example
   * ```ts
   * const namespaces = await client.namespaces.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<NamespaceListResponse> {
    return this._client.get('/namespaces', options);
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

export interface NamespaceCreateParams {
  name: string;
}

export declare namespace Namespaces {
  export {
    type NamespaceCreateResponse as NamespaceCreateResponse,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceCreateParams as NamespaceCreateParams,
  };
}
