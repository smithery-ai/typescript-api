// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Namespaces extends APIResource {
  /**
   * Create a new Connect namespace. Name must be URL-friendly (lowercase
   * alphanumeric + hyphens, 3-64 chars). Requires a valid Smithery API key.
   *
   * @example
   * ```ts
   * const namespace =
   *   await client.beta.connect.namespaces.create('name');
   * ```
   */
  create(name: string, options?: RequestOptions): APIPromise<Namespace> {
    return this._client.put(path`/connect/namespaces/${name}`, options);
  }

  /**
   * Get details for a namespace. Requires API key and namespace ownership.
   *
   * @example
   * ```ts
   * const namespace =
   *   await client.beta.connect.namespaces.retrieve('name');
   * ```
   */
  retrieve(name: string, options?: RequestOptions): APIPromise<Namespace> {
    return this._client.get(path`/connect/namespaces/${name}`, options);
  }

  /**
   * List all namespaces owned by the authenticated user. Requires service token with
   * namespaces:read permission.
   *
   * @example
   * ```ts
   * const namespaces =
   *   await client.beta.connect.namespaces.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<NamespaceListResponse> {
    return this._client.get('/connect/namespaces', options);
  }

  /**
   * Delete a namespace and all its connections. Requires API key and namespace
   * ownership.
   *
   * @example
   * ```ts
   * const namespace =
   *   await client.beta.connect.namespaces.delete('name');
   * ```
   */
  delete(name: string, options?: RequestOptions): APIPromise<NamespaceDeleteResponse> {
    return this._client.delete(path`/connect/namespaces/${name}`, options);
  }
}

export interface Namespace {
  /**
   * ISO 8601 timestamp
   */
  createdAt: string;

  /**
   * Namespace name (also the unique ID)
   */
  name: string;

  /**
   * ISO 8601 timestamp
   */
  updatedAt?: string;
}

export interface NamespaceListResponse {
  namespaces: Array<Namespace>;

  /**
   * Cursor for next page, null if no more results
   */
  nextCursor: string | null;
}

export interface NamespaceDeleteResponse {
  success: true;
}

export declare namespace Namespaces {
  export {
    type Namespace as Namespace,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
  };
}
