// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Fetch secret names for the server. Values are not returned.
   *
   * @example
   * ```ts
   * const secrets = await client.servers.secrets.list(
   *   'server',
   *   { namespace: 'namespace' },
   * );
   * ```
   */
  list(server: string, params: SecretListParams, options?: RequestOptions): APIPromise<SecretListResponse> {
    const { namespace } = params;
    return this._client.get(path`/servers/${namespace}/${server}/secrets`, options);
  }

  /**
   * Delete a secret by name from the server.
   *
   * @example
   * ```ts
   * const secret = await client.servers.secrets.delete(
   *   'secretName',
   *   { namespace: 'namespace', server: 'server' },
   * );
   * ```
   */
  delete(
    secretName: string,
    params: SecretDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SecretDeleteResponse> {
    const { namespace, server } = params;
    return this._client.delete(path`/servers/${namespace}/${server}/secrets/${secretName}`, options);
  }

  /**
   * Delete a secret by name from the server.
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.secrets.deleteByNamespace(
   *     'secretName',
   *     { namespace: 'namespace' },
   *   );
   * ```
   */
  deleteByNamespace(
    secretName: string,
    params: SecretDeleteByNamespaceParams,
    options?: RequestOptions,
  ): APIPromise<SecretDeleteByNamespaceResponse> {
    const { namespace } = params;
    return this._client.delete(path`/servers/${namespace}/secrets/${secretName}`, options);
  }

  /**
   * Fetch secret names for the server. Values are not returned.
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.secrets.listByNamespace('namespace');
   * ```
   */
  listByNamespace(namespace: string, options?: RequestOptions): APIPromise<SecretListByNamespaceResponse> {
    return this._client.get(path`/servers/${namespace}/secrets`, options);
  }

  /**
   * Set a secret value for the server.
   *
   * @example
   * ```ts
   * const response = await client.servers.secrets.set(
   *   'server',
   *   {
   *     namespace: 'namespace',
   *     name: 'x',
   *     value: 'x',
   *   },
   * );
   * ```
   */
  set(server: string, params: SecretSetParams, options?: RequestOptions): APIPromise<SecretSetResponse> {
    const { namespace, ...body } = params;
    return this._client.put(path`/servers/${namespace}/${server}/secrets`, { body, ...options });
  }

  /**
   * Set a secret value for the server.
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.secrets.setByNamespace('namespace', {
   *     name: 'x',
   *     value: 'x',
   *   });
   * ```
   */
  setByNamespace(
    namespace: string,
    body: SecretSetByNamespaceParams,
    options?: RequestOptions,
  ): APIPromise<SecretSetByNamespaceResponse> {
    return this._client.put(path`/servers/${namespace}/secrets`, { body, ...options });
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

export interface SecretDeleteByNamespaceResponse {
  success: boolean;
}

export type SecretListByNamespaceResponse =
  Array<SecretListByNamespaceResponse.SecretListByNamespaceResponseItem>;

export namespace SecretListByNamespaceResponse {
  export interface SecretListByNamespaceResponseItem {
    name: string;

    type: string;
  }
}

export interface SecretSetResponse {
  success: boolean;
}

export interface SecretSetByNamespaceResponse {
  success: boolean;
}

export interface SecretListParams {
  namespace: string;
}

export interface SecretDeleteParams {
  namespace: string;

  server: string;
}

export interface SecretDeleteByNamespaceParams {
  namespace: string;
}

export interface SecretSetParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  value: string;
}

export interface SecretSetByNamespaceParams {
  name: string;

  value: string;
}

export declare namespace Secrets {
  export {
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretDeleteByNamespaceResponse as SecretDeleteByNamespaceResponse,
    type SecretListByNamespaceResponse as SecretListByNamespaceResponse,
    type SecretSetResponse as SecretSetResponse,
    type SecretSetByNamespaceResponse as SecretSetByNamespaceResponse,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretDeleteByNamespaceParams as SecretDeleteByNamespaceParams,
    type SecretSetParams as SecretSetParams,
    type SecretSetByNamespaceParams as SecretSetByNamespaceParams,
  };
}
