// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

/**
 * Browse the MCP server registry, manage server configuration, and handle deployments
 */
export class Secrets extends APIResource {
  /**
   * List secret names. Values are not returned.
   *
   * @example
   * ```ts
   * const secrets = await client.servers.secrets.list(
   *   'qualifiedName',
   * );
   * ```
   */
  list(qualifiedName: string, options?: RequestOptions): APIPromise<SecretListResponse> {
    return this._client.get(path`/servers/${qualifiedName}/secrets`, options);
  }

  /**
   * Remove a secret by name.
   *
   * @example
   * ```ts
   * const secret = await client.servers.secrets.delete(
   *   'secretName',
   *   { qualifiedName: 'qualifiedName' },
   * );
   * ```
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
   * Create or update a secret value.
   *
   * @example
   * ```ts
   * const response = await client.servers.secrets.set(
   *   'qualifiedName',
   *   { name: 'x', value: 'x' },
   * );
   * ```
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
  /**
   * The server's qualified name (e.g. 'namespace/server' or 'namespace' for
   * namespace-only servers). Use %2F to encode the slash.
   */
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
