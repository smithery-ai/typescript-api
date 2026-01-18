// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tokens extends APIResource {
  /**
   * Create a service token for machine-to-machine authentication. Requires API key
   * authentication.
   *
   * @example
   * ```ts
   * const createTokenResponse = await client.tokens.create({
   *   permissions: {
   *     connections: { can: ['read', 'write'] },
   *     'connections.rpc': { can: ['write'] },
   *   },
   *   ttlSeconds: 3600,
   * });
   * ```
   */
  create(body: TokenCreateParams, options?: RequestOptions): APIPromise<CreateTokenResponse> {
    return this._client.post('/tokens', { body, ...options });
  }
}

export interface CreateTokenRequest {
  /**
   * Permissions to grant. Format: { [subject]: { can: [actions] } }
   */
  permissions: { [key: string]: CreateTokenRequest.Permissions };

  /**
   * Token TTL in seconds. Required. Max 86400 (24 hours).
   */
  ttlSeconds: number;

  /**
   * Optional constraints to limit token access.
   */
  constraints?: CreateTokenRequest.Constraints;

  /**
   * Profile to scope the token to. If not provided, uses the default profile.
   */
  profileSlug?: string;
}

export namespace CreateTokenRequest {
  export interface Permissions {
    /**
     * Actions granted on this subject.
     */
    can: Array<'read' | 'write'>;
  }

  /**
   * Optional constraints to limit token access.
   */
  export interface Constraints {
    /**
     * Limit access to specific namespace IDs.
     */
    namespaceIds?: Array<string>;

    /**
     * Limit access to specific server qualified names.
     */
    serverQualifiedNames?: Array<string>;
  }
}

export interface CreateTokenResponse {
  /**
   * The signed service token (PASETO v4).
   */
  token: string;

  /**
   * ISO 8601 timestamp when the token expires.
   */
  expiresAt: string;
}

export interface TokenCreateParams {
  /**
   * Permissions to grant. Format: { [subject]: { can: [actions] } }
   */
  permissions: { [key: string]: TokenCreateParams.Permissions };

  /**
   * Token TTL in seconds. Required. Max 86400 (24 hours).
   */
  ttlSeconds: number;

  /**
   * Optional constraints to limit token access.
   */
  constraints?: TokenCreateParams.Constraints;

  /**
   * Profile to scope the token to. If not provided, uses the default profile.
   */
  profileSlug?: string;
}

export namespace TokenCreateParams {
  export interface Permissions {
    /**
     * Actions granted on this subject.
     */
    can: Array<'read' | 'write'>;
  }

  /**
   * Optional constraints to limit token access.
   */
  export interface Constraints {
    /**
     * Limit access to specific namespace IDs.
     */
    namespaceIds?: Array<string>;

    /**
     * Limit access to specific server qualified names.
     */
    serverQualifiedNames?: Array<string>;
  }
}

export declare namespace Tokens {
  export {
    type CreateTokenRequest as CreateTokenRequest,
    type CreateTokenResponse as CreateTokenResponse,
    type TokenCreateParams as TokenCreateParams,
  };
}
