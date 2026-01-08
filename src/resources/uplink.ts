// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Uplink extends APIResource {
  /**
   * Create or retrieve an authtoken for uplink connections
   */
  createToken(options?: RequestOptions): APIPromise<UplinkCreateTokenResponse> {
    return this._client.post('/uplink/token', options);
  }
}

export interface UplinkCreateTokenResponse {
  authtoken: string;

  domain: string;
}

export declare namespace Uplink {
  export { type UplinkCreateTokenResponse as UplinkCreateTokenResponse };
}
