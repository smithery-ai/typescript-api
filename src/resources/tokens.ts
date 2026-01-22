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
   *   allow: {},
   *   ttlSeconds: 3600,
   * });
   * ```
   */
  create(body: TokenCreateParams, options?: RequestOptions): APIPromise<CreateTokenResponse> {
    return this._client.post('/tokens', { body, ...options });
  }
}

/**
 * Permission action. 'read' allows reading/listing. 'write' allows
 * create/modify/delete.
 */
export type Action = 'read' | 'write';

/**
 * Permission grants with per-resource scoping. Each resource defines its own
 * namespaces and constraints.
 */
export interface Allow {
  /**
   * Scope for managing MCP connections.
   */
  connections?: ConnectionScope;

  /**
   * Scope for deployment operations.
   */
  deployments?: ResourceScope;

  /**
   * Scope for namespace management.
   */
  namespaces?: ResourceScope;

  /**
   * Scope for making RPC calls on connections.
   */
  rpc?: RpcScope;

  /**
   * Scope for server metadata and configuration.
   */
  servers?: ResourceScope;

  /**
   * Scope for token creation.
   */
  tokens?: ResourceScope;
}

/**
 * Scope for connection operations.
 */
export interface ConnectionScope {
  /**
   * Actions allowed on connections.
   */
  actions: Array<Action>;

  /**
   * Namespaces this scope applies to. Use '\*' for all namespaces.
   */
  namespaces: Array<string>;

  /**
   * Filter access to connections with matching metadata. All keys must match (AND
   * semantics).
   */
  metadata?: { [key: string]: string };
}

export interface CreateTokenRequest {
  /**
   * Per-resource permission grants. Format: { [resource]: { actions: [...],
   * namespaces: [...], metadata?: {...} } }
   */
  allow: Allow;

  /**
   * Token TTL in seconds. Required. Max 86400 (24 hours).
   */
  ttlSeconds: number;

  /**
   * Profile to scope the token to. If not provided, uses the default profile.
   */
  profileSlug?: string;
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

/**
 * Scope for resource operations.
 */
export interface ResourceScope {
  /**
   * Actions allowed on this resource.
   */
  actions: Array<Action>;

  /**
   * Namespaces this scope applies to. Use '\*' for all namespaces.
   */
  namespaces: Array<string>;
}

/**
 * Scope for RPC operations on connections.
 */
export interface RpcScope {
  /**
   * Actions allowed for RPC calls.
   */
  actions: Array<Action>;

  /**
   * Namespaces this scope applies to. Use '\*' for all namespaces.
   */
  namespaces: Array<string>;

  /**
   * Filter access to connections with matching metadata. All keys must match (AND
   * semantics).
   */
  metadata?: { [key: string]: string };
}

export interface TokenCreateParams {
  /**
   * Per-resource permission grants. Format: { [resource]: { actions: [...],
   * namespaces: [...], metadata?: {...} } }
   */
  allow: Allow;

  /**
   * Token TTL in seconds. Required. Max 86400 (24 hours).
   */
  ttlSeconds: number;

  /**
   * Profile to scope the token to. If not provided, uses the default profile.
   */
  profileSlug?: string;
}

export declare namespace Tokens {
  export {
    type Action as Action,
    type Allow as Allow,
    type ConnectionScope as ConnectionScope,
    type CreateTokenRequest as CreateTokenRequest,
    type CreateTokenResponse as CreateTokenResponse,
    type ResourceScope as ResourceScope,
    type RpcScope as RpcScope,
    type TokenCreateParams as TokenCreateParams,
  };
}
