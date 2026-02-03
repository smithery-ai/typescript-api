// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Servers extends APIResource {
  /**
   * **Deprecated:** Use PUT /servers/{namespace}/{server} instead. Create a new
   * server under the specified namespace. This endpoint is idempotent.
   *
   * @deprecated
   */
  create(
    server: string,
    params: ServerCreateParams,
    options?: RequestOptions,
  ): APIPromise<ServerCreateResponse> {
    const { namespace, ...body } = params;
    return this._client.put(path`/namespaces/${namespace}/servers/${server}`, { body, ...options });
  }
}

export interface ServerCreateResponse {
  createdAt: string;

  description: string;

  displayName: string;

  namespace: string;

  server: string;
}

export interface ServerCreateParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  displayName?: string;
}

export declare namespace Servers {
  export { type ServerCreateResponse as ServerCreateResponse, type ServerCreateParams as ServerCreateParams };
}
