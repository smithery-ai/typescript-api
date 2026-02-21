// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Repo extends APIResource {
  /**
   * Partially update the GitHub repository connection settings. Only provided fields
   * are updated.
   *
   * @example
   * ```ts
   * const repo = await client.servers.repo.update(
   *   'qualifiedName',
   * );
   * ```
   */
  update(
    qualifiedName: string,
    body: RepoUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RepoUpdateResponse> {
    return this._client.patch(path`/servers/${qualifiedName}/repo`, { body, ...options });
  }

  /**
   * Remove the GitHub repository connection.
   *
   * @example
   * ```ts
   * const repo = await client.servers.repo.delete(
   *   'qualifiedName',
   * );
   * ```
   */
  delete(qualifiedName: string, options?: RequestOptions): APIPromise<RepoDeleteResponse> {
    return this._client.delete(path`/servers/${qualifiedName}/repo`, options);
  }

  /**
   * Get the connected GitHub repository, if one exists.
   *
   * @example
   * ```ts
   * const repo = await client.servers.repo.get('qualifiedName');
   * ```
   */
  get(qualifiedName: string, options?: RequestOptions): APIPromise<RepoGetResponse> {
    return this._client.get(path`/servers/${qualifiedName}/repo`, options);
  }

  /**
   * Create or update the GitHub repository connection. Idempotent — updates if a
   * connection already exists.
   *
   * @example
   * ```ts
   * const response = await client.servers.repo.set(
   *   'qualifiedName',
   *   { repoName: 'x', repoOwner: 'x' },
   * );
   * ```
   */
  set(qualifiedName: string, body: RepoSetParams, options?: RequestOptions): APIPromise<RepoSetResponse> {
    return this._client.put(path`/servers/${qualifiedName}/repo`, { body, ...options });
  }
}

export interface RepoUpdateResponse {
  autoDeploy: boolean | null;

  baseDirectory: string;

  branch: string | null;

  isPrivate: boolean;

  repoName: string;

  repoOwner: string;

  type: 'github';
}

export interface RepoDeleteResponse {
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

export interface RepoSetResponse {
  autoDeploy: boolean | null;

  baseDirectory: string;

  branch: string | null;

  isPrivate: boolean;

  repoName: string;

  repoOwner: string;

  type: 'github';
}

export interface RepoUpdateParams {
  autoDeploy?: boolean;

  baseDirectory?: string;

  branch?: string | null;
}

export interface RepoSetParams {
  repoName: string;

  repoOwner: string;

  autoDeploy?: boolean;

  baseDirectory?: string;

  branch?: string | null;
}

export declare namespace Repo {
  export {
    type RepoUpdateResponse as RepoUpdateResponse,
    type RepoDeleteResponse as RepoDeleteResponse,
    type RepoGetResponse as RepoGetResponse,
    type RepoSetResponse as RepoSetResponse,
    type RepoUpdateParams as RepoUpdateParams,
    type RepoSetParams as RepoSetParams,
  };
}
