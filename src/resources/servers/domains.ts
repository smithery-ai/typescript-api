// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Domains extends APIResource {
  /**
   * Add a new domain to a server. Supports managed run.tools and custom domains.
   *
   * @example
   * ```ts
   * const domain = await client.servers.domains.create(
   *   'server',
   *   {
   *     namespace: 'namespace',
   *     subdomain: 'subdomain',
   *     type: 'managed',
   *   },
   * );
   * ```
   */
  create(
    server: string,
    params: DomainCreateParams,
    options?: RequestOptions,
  ): APIPromise<DomainCreateResponse> {
    const { namespace, ...body } = params;
    return this._client.post(path`/servers/${namespace}/${server}/domains`, { body, ...options });
  }

  /**
   * Update settings for a specific domain. Use the domain ID from the list endpoint.
   *
   * @example
   * ```ts
   * const domain = await client.servers.domains.update(
   *   'domainId',
   *   { namespace: 'namespace', server: 'server' },
   * );
   * ```
   */
  update(
    domainID: string,
    params: DomainUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DomainUpdateResponse> {
    const { namespace, server, ...body } = params;
    return this._client.patch(path`/servers/${namespace}/${server}/domains/${domainID}`, {
      body,
      ...options,
    });
  }

  /**
   * List all domains associated with a server, including managed run.tools and
   * custom domains.
   *
   * @example
   * ```ts
   * const domains = await client.servers.domains.list(
   *   'server',
   *   { namespace: 'namespace' },
   * );
   * ```
   */
  list(server: string, params: DomainListParams, options?: RequestOptions): APIPromise<DomainListResponse> {
    const { namespace } = params;
    return this._client.get(path`/servers/${namespace}/${server}/domains`, options);
  }

  /**
   * Remove a domain from a server. For custom domains, also cleans up the Cloudflare
   * custom hostname.
   *
   * @example
   * ```ts
   * const domain = await client.servers.domains.delete(
   *   'domainId',
   *   { namespace: 'namespace', server: 'server' },
   * );
   * ```
   */
  delete(
    domainID: string,
    params: DomainDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DomainDeleteResponse> {
    const { namespace, server } = params;
    return this._client.delete(path`/servers/${namespace}/${server}/domains/${domainID}`, options);
  }

  /**
   * Add a new domain to a server. Supports managed run.tools and custom domains.
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.domains.createByNamespace(
   *     'namespace',
   *     { subdomain: 'subdomain', type: 'managed' },
   *   );
   * ```
   */
  createByNamespace(
    namespace: string,
    body: DomainCreateByNamespaceParams,
    options?: RequestOptions,
  ): APIPromise<DomainCreateByNamespaceResponse> {
    return this._client.post(path`/servers/${namespace}/domains`, { body, ...options });
  }

  /**
   * Remove a domain from a server. For custom domains, also cleans up the Cloudflare
   * custom hostname.
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.domains.deleteByNamespace(
   *     'domainId',
   *     { namespace: 'namespace' },
   *   );
   * ```
   */
  deleteByNamespace(
    domainID: string,
    params: DomainDeleteByNamespaceParams,
    options?: RequestOptions,
  ): APIPromise<DomainDeleteByNamespaceResponse> {
    const { namespace } = params;
    return this._client.delete(path`/servers/${namespace}/domains/${domainID}`, options);
  }

  /**
   * List all domains associated with a server, including managed run.tools and
   * custom domains.
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.domains.listByNamespace('namespace');
   * ```
   */
  listByNamespace(namespace: string, options?: RequestOptions): APIPromise<DomainListByNamespaceResponse> {
    return this._client.get(path`/servers/${namespace}/domains`, options);
  }

  /**
   * Update settings for a specific domain. Use the domain ID from the list endpoint.
   *
   * @example
   * ```ts
   * const response =
   *   await client.servers.domains.updateByNamespace(
   *     'domainId',
   *     { namespace: 'namespace' },
   *   );
   * ```
   */
  updateByNamespace(
    domainID: string,
    params: DomainUpdateByNamespaceParams,
    options?: RequestOptions,
  ): APIPromise<DomainUpdateByNamespaceResponse> {
    const { namespace, ...body } = params;
    return this._client.patch(path`/servers/${namespace}/domains/${domainID}`, { body, ...options });
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

export interface DomainCreateByNamespaceResponse {
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

  validation: DomainCreateByNamespaceResponse.Validation | null;
}

export namespace DomainCreateByNamespaceResponse {
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

export interface DomainDeleteByNamespaceResponse {
  success: boolean;
}

export interface DomainListByNamespaceResponse {
  domains: Array<DomainListByNamespaceResponse.Domain>;
}

export namespace DomainListByNamespaceResponse {
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

export interface DomainUpdateByNamespaceResponse {
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

  validation: DomainUpdateByNamespaceResponse.Validation | null;
}

export namespace DomainUpdateByNamespaceResponse {
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

export type DomainCreateParams = DomainCreateParams.Variant0 | DomainCreateParams.Variant1;

export declare namespace DomainCreateParams {
  export interface Variant0 {
    /**
     * Path param
     */
    namespace: string;

    /**
     * Body param
     */
    subdomain: string;

    /**
     * Body param
     */
    type: 'managed';
  }

  export interface Variant1 {
    /**
     * Path param
     */
    namespace: string;

    /**
     * Body param
     */
    hostname: string;

    /**
     * Body param
     */
    type: 'custom';
  }
}

export interface DomainUpdateParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Path param
   */
  server: string;

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

export interface DomainListParams {
  namespace: string;
}

export interface DomainDeleteParams {
  namespace: string;

  server: string;
}

export type DomainCreateByNamespaceParams =
  | DomainCreateByNamespaceParams.Variant0
  | DomainCreateByNamespaceParams.Variant1;

export declare namespace DomainCreateByNamespaceParams {
  export interface Variant0 {
    subdomain: string;

    type: 'managed';
  }

  export interface Variant1 {
    hostname: string;

    type: 'custom';
  }
}

export interface DomainDeleteByNamespaceParams {
  namespace: string;
}

export interface DomainUpdateByNamespaceParams {
  /**
   * Path param
   */
  namespace: string;

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

export declare namespace Domains {
  export {
    type DomainCreateResponse as DomainCreateResponse,
    type DomainUpdateResponse as DomainUpdateResponse,
    type DomainListResponse as DomainListResponse,
    type DomainDeleteResponse as DomainDeleteResponse,
    type DomainCreateByNamespaceResponse as DomainCreateByNamespaceResponse,
    type DomainDeleteByNamespaceResponse as DomainDeleteByNamespaceResponse,
    type DomainListByNamespaceResponse as DomainListByNamespaceResponse,
    type DomainUpdateByNamespaceResponse as DomainUpdateByNamespaceResponse,
    type DomainCreateParams as DomainCreateParams,
    type DomainUpdateParams as DomainUpdateParams,
    type DomainListParams as DomainListParams,
    type DomainDeleteParams as DomainDeleteParams,
    type DomainCreateByNamespaceParams as DomainCreateByNamespaceParams,
    type DomainDeleteByNamespaceParams as DomainDeleteByNamespaceParams,
    type DomainUpdateByNamespaceParams as DomainUpdateByNamespaceParams,
  };
}
