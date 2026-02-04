// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ServersAPI from './servers';
import { ServerCreateParams, ServerCreateResponse, Servers } from './servers';
import { APIPromise } from '../../core/api-promise';
import { NamespacesPage, type NamespacesPageParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Namespaces extends APIResource {
  servers: ServersAPI.Servers = new ServersAPI.Servers(this._client);

  /**
   * Create a new namespace with a server-generated human-readable name, owned by the
   * authenticated user
   *
   * @example
   * ```ts
   * const namespace = await client.namespaces.create();
   * ```
   */
  create(options?: RequestOptions): APIPromise<NamespaceCreateResponse> {
    return this._client.post('/namespaces', options);
  }

  /**
   * When called without query params, returns the authenticated user's namespaces
   * (backwards compatible). When query params are provided, searches public
   * namespaces with pagination. Use ownerId to filter by owner, hasServers/hasSkills
   * to filter by content, q for text search.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const namespaceListResponse of client.namespaces.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: NamespaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NamespaceListResponsesNamespacesPage, NamespaceListResponse> {
    return this._client.getAPIList('/namespaces', NamespacesPage<NamespaceListResponse>, {
      query,
      ...options,
    });
  }

  /**
   * Create a new namespace owned by the authenticated user. This endpoint is
   * idempotent - if the namespace already exists and is owned by the user, returns
   * success.
   *
   * @example
   * ```ts
   * const response = await client.namespaces.set('xxx');
   * ```
   */
  set(name: string, options?: RequestOptions): APIPromise<NamespaceSetResponse> {
    return this._client.put(path`/namespaces/${name}`, options);
  }
}

export type NamespaceListResponsesNamespacesPage = NamespacesPage<NamespaceListResponse>;

export interface NamespaceCreateResponse {
  createdAt: string;

  name: string;
}

export interface NamespaceListResponse {
  name: string;
}

export interface NamespaceSetResponse {
  createdAt: string;

  name: string;
}

export interface NamespaceListParams extends NamespacesPageParams {
  /**
   * Comma-separated list of fields to include in response
   */
  fields?: string;

  /**
   * Filter namespaces with servers
   */
  hasServers?: '0' | '1' | 'true' | 'false';

  /**
   * Filter namespaces with skills
   */
  hasSkills?: '0' | '1' | 'true' | 'false';

  /**
   * Filter by owner ID
   */
  ownerId?: string;

  /**
   * Text search query (prefix match on name)
   */
  q?: string;
}

Namespaces.Servers = Servers;

export declare namespace Namespaces {
  export {
    type NamespaceCreateResponse as NamespaceCreateResponse,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceSetResponse as NamespaceSetResponse,
    type NamespaceListResponsesNamespacesPage as NamespaceListResponsesNamespacesPage,
    type NamespaceListParams as NamespaceListParams,
  };

  export {
    Servers as Servers,
    type ServerCreateResponse as ServerCreateResponse,
    type ServerCreateParams as ServerCreateParams,
  };
}
