// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tokens extends APIResource {
  /**
   * Create a service token for machine-to-machine authentication. Accepts API key or
   * bearer token. Optionally apply restrictions.
   */
  create(
    body: TokenCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CreateTokenResponse> {
    return this._client.post('/tokens', { body, ...options });
  }
}

export interface Constraint {
  /**
   * Metadata key-value pairs for fine-grained access control. When an array is
   * provided, each object is evaluated as an OR condition (any must match). Within a
   * single object, all key-value pairs must match (AND). For example, [{"userId":
   * "alice"}, {"team": "backend"}] allows access if userId is alice OR team is
   * backend.
   */
  metadata?: { [key: string]: string } | Array<{ [key: string]: string }>;

  /**
   * Restrict token to specific namespaces.
   */
  namespaces?: string | Array<string>;

  /**
   * Restrict token to specific operations.
   */
  operations?: 'read' | 'write' | 'execute' | Array<'read' | 'write' | 'execute'>;

  /**
   * Restrict token to specific resource types.
   */
  resources?:
    | 'connections'
    | 'servers'
    | 'namespaces'
    | 'skills'
    | Array<'connections' | 'servers' | 'namespaces' | 'skills'>;

  /**
   * TTL as seconds or duration string ("1h", "30m", "20s").
   */
  ttl?: string | number;
}

export interface CreateTokenRequest {
  /**
   * Constraint objects to restrict the token. Cannot be combined with profileSlug.
   * Each constraint may include a `ttl` field (max 24 hours). Default TTL is 1 hour.
   * Maximum is 24 hours.
   */
  policy?: Array<Constraint>;

  /**
   * Profile slug for legacy token minting. Cannot be combined with policy.
   */
  profileSlug?: string;
}

export interface CreateTokenResponse {
  /**
   * The signed service token.
   */
  token: string;

  /**
   * ISO 8601 timestamp when the token expires.
   */
  expiresAt: string;
}

export interface TokenCreateParams {
  /**
   * Constraint objects to restrict the token. Cannot be combined with profileSlug.
   * Each constraint may include a `ttl` field (max 24 hours). Default TTL is 1 hour.
   * Maximum is 24 hours.
   */
  policy?: Array<Constraint>;

  /**
   * Profile slug for legacy token minting. Cannot be combined with policy.
   */
  profileSlug?: string;
}

export declare namespace Tokens {
  export {
    type Constraint as Constraint,
    type CreateTokenRequest as CreateTokenRequest,
    type CreateTokenResponse as CreateTokenResponse,
    type TokenCreateParams as TokenCreateParams,
  };
}
