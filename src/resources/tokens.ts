// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Tokens extends APIResource {
  /**
   * Create a service token for machine-to-machine authentication. Accepts API key or
   * bearer token. Optionally apply restrictions.
   *
   * @example
   * ```ts
   * const createTokenResponse = await client.tokens.create();
   * ```
   */
  create(
    body: TokenCreateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CreateTokenResponse> {
    return this._client.post('/tokens', { body, ...options });
  }
}

/**
 * A policy constraint that restricts a token's scope. All specified fields within
 * a single constraint are AND'd together. When multiple constraints are passed in
 * the policy array, each is applied as an independent attenuation block.
 */
export interface Constraint {
  /**
   * Key-value metadata for fine-grained filtering. A single object requires all
   * pairs to match (AND). An array of objects requires any one to match (OR-of-AND),
   * e.g. [{"userId":"alice"},{"team":"backend"}] grants access when either condition
   * is met.
   */
  metadata?: { [key: string]: string } | Array<{ [key: string]: string }>;

  /**
   * Namespace(s) the token is scoped to. Accepts a single slug or an array.
   */
  namespaces?: string | Array<string>;

  /**
   * Operation(s) the token may perform: read, write, or execute.
   */
  operations?: 'read' | 'write' | 'execute' | Array<'read' | 'write' | 'execute'>;

  /**
   * Resource type(s) the token may access: connections, servers, namespaces, or
   * skills.
   */
  resources?:
    | 'connections'
    | 'servers'
    | 'namespaces'
    | 'skills'
    | Array<'connections' | 'servers' | 'namespaces' | 'skills'>;

  /**
   * MCP JSON-RPC request matching rules. Keys are dot-paths into the request body
   * (e.g. "params.name", "method"). Values are regex patterns. All entries must
   * match (AND).
   */
  rpcReqMatch?: { [key: string]: string };

  /**
   * Time-to-live for the constraint. Accepts seconds (number) or a duration string
   * such as "1h", "30m", or "20s".
   */
  ttl?: string | number;
}

export interface CreateTokenRequest {
  /**
   * Optional organization ID to scope the token to. When provided, the token is
   * minted with org context. The authenticated user must be an admin or owner of the
   * organization.
   */
  organizationId?: string;

  /**
   * Constraint objects to restrict the token. Each constraint may include a `ttl`
   * field (max 24 hours). Default TTL is 1 hour. Maximum is 24 hours.
   */
  policy?: Array<Constraint>;
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
   * Optional organization ID to scope the token to. When provided, the token is
   * minted with org context. The authenticated user must be an admin or owner of the
   * organization.
   */
  organizationId?: string;

  /**
   * Constraint objects to restrict the token. Each constraint may include a `ttl`
   * field (max 24 hours). Default TTL is 1 hour. Maximum is 24 hours.
   */
  policy?: Array<Constraint>;
}

export declare namespace Tokens {
  export {
    type Constraint as Constraint,
    type CreateTokenRequest as CreateTokenRequest,
    type CreateTokenResponse as CreateTokenResponse,
    type TokenCreateParams as TokenCreateParams,
  };
}
