// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ResponsesAPI from './responses';
import { ResponseCreateParams, Responses } from './responses';

export class Agents extends APIResource {
  responses: ResponsesAPI.Responses = new ResponsesAPI.Responses(this._client);
}

export interface AssistantMessage {
  /**
   * Message ID
   */
  id: string;

  content: Array<OutputTextContent>;

  role: 'assistant';

  status: 'in_progress' | 'completed' | 'incomplete';

  type: 'message';
}

export interface CreateResponseRequest {
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
  input?: string | Array<InputItem> | null;

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

export interface ErrorResponse {
  error: ErrorResponse.Error;
}

export namespace ErrorResponse {
  export interface Error {
    /**
     * Error code
     */
    code: string;

    /**
     * Error message
     */
    message: string;

    /**
     * Error type
     */
    type?: string;
  }
}

export interface FunctionCall {
  /**
   * Function call ID
   */
  id: string;

  /**
   * JSON-encoded arguments
   */
  arguments: string;

  /**
   * Tool call ID
   */
  call_id: string;

  /**
   * Function name
   */
  name: string;

  status: 'in_progress' | 'completed' | 'incomplete';

  type: 'function_call';
}

export type InputItem = UserMessage | SystemMessage;

export interface InputTextContent {
  /**
   * The text content
   */
  text: string;

  type: 'input_text';
}

export type OutputItem = AssistantMessage | FunctionCall;

export interface OutputTextContent {
  /**
   * The output text
   */
  text: string;

  type: 'output_text';
}

export interface Response {
  /**
   * Response ID
   */
  id: string;

  /**
   * Whether running in background
   */
  background: boolean;

  /**
   * Unix timestamp of completion
   */
  completed_at: number | null;

  /**
   * Unix timestamp of creation
   */
  created_at: number;

  /**
   * Error details if failed
   */
  error: Response.Error | null;

  /**
   * System instructions used
   */
  instructions: string | null;

  /**
   * Request metadata
   */
  metadata: { [key: string]: string } | null;

  /**
   * Model used
   */
  model: string;

  object: 'response';

  /**
   * Output items
   */
  output: Array<OutputItem>;

  /**
   * Previous response ID
   */
  previous_response_id: string | null;

  /**
   * Response status
   */
  status: ResponseStatus;

  /**
   * Token usage
   */
  usage: Usage | null;
}

export namespace Response {
  /**
   * Error details if failed
   */
  export interface Error {
    code: string;

    message: string;
  }
}

export type ResponseStatus = 'queued' | 'in_progress' | 'completed' | 'failed' | 'incomplete';

/**
 * Simple text content
 */
export type StringContent = string;

export interface SystemMessage {
  /**
   * Simple text content
   */
  content: Array<InputTextContent> | StringContent;

  role: 'system';

  type: 'message';
}

export interface Usage {
  /**
   * Input tokens used
   */
  input_tokens: number;

  /**
   * Output tokens generated
   */
  output_tokens: number;

  /**
   * Total tokens
   */
  total_tokens: number;
}

export interface UserMessage {
  /**
   * Simple text content
   */
  content: Array<InputTextContent> | StringContent;

  role: 'user';

  type: 'message';
}

Agents.Responses = Responses;

export declare namespace Agents {
  export {
    type AssistantMessage as AssistantMessage,
    type CreateResponseRequest as CreateResponseRequest,
    type ErrorResponse as ErrorResponse,
    type FunctionCall as FunctionCall,
    type InputItem as InputItem,
    type InputTextContent as InputTextContent,
    type OutputItem as OutputItem,
    type OutputTextContent as OutputTextContent,
    type Response as Response,
    type ResponseStatus as ResponseStatus,
    type StringContent as StringContent,
    type SystemMessage as SystemMessage,
    type Usage as Usage,
    type UserMessage as UserMessage,
  };

  export { Responses as Responses, type ResponseCreateParams as ResponseCreateParams };
}
