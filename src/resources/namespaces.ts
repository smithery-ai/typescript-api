// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Namespaces extends APIResource {
  /**
   * Get a list of all namespaces owned by the authenticated user
   */
  list(options?: RequestOptions): APIPromise<NamespaceListResponse> {
    return this._client.get('/namespaces', options);
  }
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

export declare namespace Namespaces {
  export { type NamespaceListResponse as NamespaceListResponse };
}
