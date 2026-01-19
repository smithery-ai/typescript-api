// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Namespaces extends APIResource {
  /**
   * Create a new Connect namespace. Requires a valid Smithery API key.
   *
   * @example
   * ```ts
   * const namespace =
   *   await client.beta.connect.namespaces.create({
   *     name: 'my-namespace',
   *   });
   * ```
   */
  create(body: NamespaceCreateParams, options?: RequestOptions): APIPromise<Namespace> {
    return this._client.post('/connect/namespaces', { body, ...options });
  }

  /**
   * Get details for a namespace. Requires API key and namespace ownership.
   *
   * @example
   * ```ts
   * const namespace =
   *   await client.beta.connect.namespaces.retrieve(
   *     'namespaceId',
   *   );
   * ```
   */
  retrieve(namespaceID: string, options?: RequestOptions): APIPromise<Namespace> {
    return this._client.get(path`/connect/namespaces/${namespaceID}`, options);
  }

  /**
   * Delete a namespace and all its connections. Requires API key and namespace
   * ownership.
   *
   * @example
   * ```ts
   * const namespace =
   *   await client.beta.connect.namespaces.delete(
   *     'namespaceId',
   *   );
   * ```
   */
  delete(namespaceID: string, options?: RequestOptions): APIPromise<NamespaceDeleteResponse> {
    return this._client.delete(path`/connect/namespaces/${namespaceID}`, options);
  }
}

export interface CreateNamespaceRequest {
  /**
   * Namespace name (lowercase alphanumeric with hyphens)
   */
  name: string;
}

export interface Namespace {
  /**
   * Unique namespace ID
   */
  id: string;

  /**
   * ISO 8601 timestamp
   */
  createdAt: string;

  /**
   * Namespace name
   */
  name: string;

  /**
   * ISO 8601 timestamp
   */
  updatedAt?: string;
}

export interface NamespaceDeleteResponse {
  success: true;
}

export interface NamespaceCreateParams {
  /**
   * Namespace name (lowercase alphanumeric with hyphens)
   */
  name: string;
}

export declare namespace Namespaces {
  export {
    type CreateNamespaceRequest as CreateNamespaceRequest,
    type Namespace as Namespace,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
    type NamespaceCreateParams as NamespaceCreateParams,
  };
}
