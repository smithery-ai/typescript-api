// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Repo extends APIResource {
  /**
   * Disconnect the GitHub repository connection from a server.
   *
   * @example
   * ```ts
   * const repo = await client.servers.repo.delete('server', {
   *   namespace: 'namespace',
   * });
   * ```
   */
  delete(server: string, params: RepoDeleteParams, options?: RequestOptions): APIPromise<RepoDeleteResponse> {
    const { namespace } = params;
    return this._client.delete(path`/servers/${namespace}/${server}/repo`, options);
  }

  /**
   * Disconnect the GitHub repository connection from a server.
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.repo.deleteByNamespace('namespace');
   * ```
   */
  deleteByNamespace(namespace: string, options?: RequestOptions): APIPromise<RepoDeleteByNamespaceResponse> {
    return this._client.delete(path`/servers/${namespace}/repo`, options);
  }

  /**
   * Get the GitHub repository connection for a server, if one exists.
   *
   * @example
   * ```ts
   * const repo = await client.servers.repo.get('server', {
   *   namespace: 'namespace',
   * });
   * ```
   */
  get(server: string, params: RepoGetParams, options?: RequestOptions): APIPromise<RepoGetResponse> {
    const { namespace } = params;
    return this._client.get(path`/servers/${namespace}/${server}/repo`, options);
  }

  /**
   * Get the GitHub repository connection for a server, if one exists.
   *
   * @example
   * ```ts
   * const response = await client.servers.repo.getByNamespace(
   *   'namespace',
   * );
   * ```
   */
  getByNamespace(namespace: string, options?: RequestOptions): APIPromise<RepoGetByNamespaceResponse> {
    return this._client.get(path`/servers/${namespace}/repo`, options);
  }

  /**
   * Upsert a GitHub repository connection for a server. Creates a new connection if
   * none exists, or updates the existing one.
   *
   * @example
   * ```ts
   * const response = await client.servers.repo.set('server', {
   *   namespace: 'namespace',
   *   repoName: 'x',
   *   repoOwner: 'x',
   * });
   * ```
   */
  set(server: string, params: RepoSetParams, options?: RequestOptions): APIPromise<RepoSetResponse> {
    const { namespace, ...body } = params;
    return this._client.put(path`/servers/${namespace}/${server}/repo`, { body, ...options });
  }

  /**
   * Upsert a GitHub repository connection for a server. Creates a new connection if
   * none exists, or updates the existing one.
   *
   * @example
   * ```ts
   * const response = await client.servers.repo.setByNamespace(
   *   'namespace',
   *   { repoName: 'x', repoOwner: 'x' },
   * );
   * ```
   */
  setByNamespace(
    namespace: string,
    body: RepoSetByNamespaceParams,
    options?: RequestOptions,
  ): APIPromise<RepoSetByNamespaceResponse> {
    return this._client.put(path`/servers/${namespace}/repo`, { body, ...options });
  }
}

export interface RepoDeleteResponse {
  success: boolean;
}

export interface RepoDeleteByNamespaceResponse {
  success: boolean;
}

export interface RepoGetResponse {
  autoDeploy: boolean | null;

  baseDirectory: string;

  branch: string | null;

  isPrivate: boolean;

  repoName: string;

  repoOwner: string;

  type: 'github';
}

export interface RepoGetByNamespaceResponse {
  autoDeploy: boolean | null;

  baseDirectory: string;

  branch: string | null;

  isPrivate: boolean;

  repoName: string;

  repoOwner: string;

  type: 'github';
}

export interface RepoSetResponse {
  autoDeploy: boolean | null;

  baseDirectory: string;

  branch: string | null;

  isPrivate: boolean;

  repoName: string;

  repoOwner: string;

  type: 'github';
}

export interface RepoSetByNamespaceResponse {
  autoDeploy: boolean | null;

  baseDirectory: string;

  branch: string | null;

  isPrivate: boolean;

  repoName: string;

  repoOwner: string;

  type: 'github';
}

export interface RepoDeleteParams {
  namespace: string;
}

export interface RepoGetParams {
  namespace: string;
}

export interface RepoSetParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param
   */
  repoName: string;

  /**
   * Body param
   */
  repoOwner: string;

  /**
   * Body param
   */
  autoDeploy?: boolean;

  /**
   * Body param
   */
  baseDirectory?: string;

  /**
   * Body param
   */
  branch?: string | null;
}

export interface RepoSetByNamespaceParams {
  repoName: string;

  repoOwner: string;

  autoDeploy?: boolean;

  baseDirectory?: string;

  branch?: string | null;
}

export declare namespace Repo {
  export {
    type RepoDeleteResponse as RepoDeleteResponse,
    type RepoDeleteByNamespaceResponse as RepoDeleteByNamespaceResponse,
    type RepoGetResponse as RepoGetResponse,
    type RepoGetByNamespaceResponse as RepoGetByNamespaceResponse,
    type RepoSetResponse as RepoSetResponse,
    type RepoSetByNamespaceResponse as RepoSetByNamespaceResponse,
    type RepoDeleteParams as RepoDeleteParams,
    type RepoGetParams as RepoGetParams,
    type RepoSetParams as RepoSetParams,
    type RepoSetByNamespaceParams as RepoSetByNamespaceParams,
  };
}
