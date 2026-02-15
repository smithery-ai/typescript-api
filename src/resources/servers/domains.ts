// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Domains extends APIResource {
  /**
   * Add a managed run.tools or custom domain.
   *
   * @example
   * ```ts
   * const domain = await client.servers.domains.create(
   *   'qualifiedName',
   *   { subdomain: 'subdomain', type: 'managed' },
   * );
   * ```
   */
  create(
    qualifiedName: string,
    body: DomainCreateParams,
    options?: RequestOptions,
  ): APIPromise<DomainCreateResponse> {
    return this._client.post(path`/servers/${qualifiedName}/domains`, { body, ...options });
  }

  /**
   * Update domain settings such as subdomain slug or authentication requirements.
   *
   * @example
   * ```ts
   * const domain = await client.servers.domains.update(
   *   'domainId',
   *   { qualifiedName: 'qualifiedName' },
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
   * List all domains, including managed run.tools and custom domains.
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

  /**
   * Remove a domain and clean up associated DNS records.
   *
   * @example
   * ```ts
   * const domain = await client.servers.domains.delete(
   *   'domainId',
   *   { qualifiedName: 'qualifiedName' },
   * );
   * ```
   */
  delete(
    domainID: string,
    params: DomainDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DomainDeleteResponse> {
    const { qualifiedName } = params;
    return this._client.delete(path`/servers/${qualifiedName}/domains/${domainID}`, options);
  }
}

export interface DomainCreateResponse {
  id: string;

  allowUnauthenticated: boolean;

  cnameTarget: string | null;

  createdAt: string;

  hostname: string;

  requiresConfig: boolean;

  status: 'pending_validation' | 'pending' | 'active' | 'failed' | null;

  subdomain: string | null;

  type: 'managed' | 'custom';

  updatedAt: string;

  validation: DomainCreateResponse.Validation | null;
}

export namespace DomainCreateResponse {
  export interface Validation {
    records: Array<Validation.Record>;

    type: string;
  }

  export namespace Validation {
    export interface Record {
      name: string;

      value: string;
    }
  }
}

export interface DomainUpdateResponse {
  id: string;

  allowUnauthenticated: boolean;

  cnameTarget: string | null;

  createdAt: string;

  hostname: string;

  requiresConfig: boolean;

  status: 'pending_validation' | 'pending' | 'active' | 'failed' | null;

  subdomain: string | null;

  type: 'managed' | 'custom';

  updatedAt: string;

  validation: DomainUpdateResponse.Validation | null;
}

export namespace DomainUpdateResponse {
  export interface Validation {
    records: Array<Validation.Record>;

    type: string;
  }

  export namespace Validation {
    export interface Record {
      name: string;

      value: string;
    }
  }
}

export interface DomainListResponse {
  domains: Array<DomainListResponse.Domain>;
}

export namespace DomainListResponse {
  export interface Domain {
    id: string;

    allowUnauthenticated: boolean;

    cnameTarget: string | null;

    createdAt: string;

    hostname: string;

    requiresConfig: boolean;

    status: 'pending_validation' | 'pending' | 'active' | 'failed' | null;

    subdomain: string | null;

    type: 'managed' | 'custom';

    updatedAt: string;

    validation: Domain.Validation | null;
  }

  export namespace Domain {
    export interface Validation {
      records: Array<Validation.Record>;

      type: string;
    }

    export namespace Validation {
      export interface Record {
        name: string;

        value: string;
      }
    }
  }
}

export interface DomainDeleteResponse {
  success: boolean;
}

export type DomainCreateParams = DomainCreateParams.Variant0 | DomainCreateParams.Variant1;

export declare namespace DomainCreateParams {
  export interface Variant0 {
    subdomain: string;

    type: 'managed';
  }

  export interface Variant1 {
    hostname: string;

    type: 'custom';
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
  allowUnauthenticated?: boolean;

  /**
   * Body param
   */
  requiresConfig?: boolean;

  /**
   * Body param
   */
  subdomain?: string;
}

export interface DomainDeleteParams {
  /**
   * The server's qualified name (e.g. 'namespace/server' or 'namespace' for
   * namespace-only servers). Use %2F to encode the slash.
   */
  qualifiedName: string;
}

export declare namespace Domains {
  export {
    type DomainCreateResponse as DomainCreateResponse,
    type DomainUpdateResponse as DomainUpdateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainCreateParams as DomainCreateParams,
    type DomainUpdateParams as DomainUpdateParams,
    type DomainDeleteParams as DomainDeleteParams,
  };
}
