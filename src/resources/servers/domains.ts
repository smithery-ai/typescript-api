// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Domains extends APIResource {
  /**
   * Update the managed run.tools slug for a server.
   *
   * @example
   * ```ts
   * const domain = await client.servers.domains.update(
   *   'domainId',
   *   {
   *     qualifiedName: 'qualifiedName',
   *     subdomain: 'subdomain',
   *   },
   * );
   * ```
   */
  update(
    domainID: string,
    params: DomainUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DomainUpdateResponse> {
    const { qualifiedName, ...body } = params;
    return this._client.patch(path`/servers/${qualifiedName}/domains/${domainID}`, { body, ...options });
  }

  /**
   * List the domains for a server.
   *
   * @example
   * ```ts
   * const domains = await client.servers.domains.list(
   *   'qualifiedName',
   * );
   * ```
   */
  list(qualifiedName: string, options?: RequestOptions): APIPromise<DomainListResponse> {
    return this._client.get(path`/servers/${qualifiedName}/domains`, options);
  }
}

export interface DomainUpdateResponse {
  id: 'managed';

  createdAt: string;

  hostname: string;

  subdomain: string;

  type: 'managed';

  updatedAt: string;
}

export interface DomainListResponse {
  domains: Array<DomainListResponse.Domain>;
}

export namespace DomainListResponse {
  export interface Domain {
    id: 'managed';

    createdAt: string;

    hostname: string;

    subdomain: string;

    type: 'managed';

    updatedAt: string;
  }
}

export interface DomainUpdateParams {
  /**
   * Path param: The server's qualified name (e.g. 'namespace/server' or 'namespace'
   * for namespace-only servers). Use %2F to encode the slash.
   */
  qualifiedName: string;

  /**
   * Body param
   */
  subdomain: string;
}

export declare namespace Domains {
  export {
    type DomainUpdateResponse as DomainUpdateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainUpdateParams as DomainUpdateParams,
  };
}
