// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as AgentsAPI from './agents';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Responses extends APIResource {
  /**
   * Create a new agent response. Supports synchronous, streaming, and background
   * execution modes.
   *
   * @example
   * ```ts
   * const response =
   *   await client.experimental.agents.responses.create({
   *     namespace: 'namespace',
   *   });
   * ```
   */
  create(body: ResponseCreateParams, options?: RequestOptions): APIPromise<AgentsAPI.Response> {
    return this._client.post('/agents/responses', { body, ...options });
  }

  /**
   * Get the status and result of an agent response by ID. Used to poll background
   * responses.
   *
   * @example
   * ```ts
   * const response =
   *   await client.experimental.agents.responses.get('id');
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<AgentsAPI.Response> {
    return this._client.get(path`/agents/responses/${id}`, options);
  }
}

export interface ResponseCreateParams {
  /**
   * Smithery namespace for tool discovery
   */
  namespace: string;

  /**
   * Run in background for long-running tasks
   */
  background?: boolean;

  /**
   * Input text or array of messages
   */
  input?: string | Array<AgentsAPI.InputItem> | null;

  /**
   * Additional system instructions
   */
  instructions?: string | null;

  /**
   * Maximum output tokens
   */
  max_output_tokens?: number | null;

  /**
   * Maximum tool calls before stopping
   */
  max_tool_calls?: number | null;

  /**
   * Request metadata
   */
  metadata?: { [key: string]: string } | null;

  /**
   * Model to use
   */
  model?: string | null;

  /**
   * Previous response ID for multi-turn
   */
  previous_response_id?: string | null;

  /**
   * Enable streaming response
   */
  stream?: boolean;

  /**
   * Temperature for generation
   */
  temperature?: number | null;

  /**
   * Top-p sampling
   */
  top_p?: number | null;
}

export declare namespace Responses {
  export { type ResponseCreateParams as ResponseCreateParams };
}
