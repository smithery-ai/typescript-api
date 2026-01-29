// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ResponsesAPI from './responses';
import { Responses } from './responses';

export class Agents extends APIResource {
  responses: ResponsesAPI.Responses = new ResponsesAPI.Responses(this._client);
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
  input?:
    | string
    | Array<CreateResponseRequest.AgentUserMessage | CreateResponseRequest.AgentSystemMessage>
    | null;

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

export namespace CreateResponseRequest {
  export interface AgentUserMessage {
    content: Array<AgentUserMessage.UnionMember0> | string;

    role: 'user';

    type: 'message';
  }

  export namespace AgentUserMessage {
    export interface UnionMember0 {
      /**
       * The text content
       */
      text: string;

      type: 'input_text';
    }
  }

  export interface AgentSystemMessage {
    content: Array<AgentSystemMessage.UnionMember0> | string;

    role: 'system';

    type: 'message';
  }

  export namespace AgentSystemMessage {
    export interface UnionMember0 {
      /**
       * The text content
       */
      text: string;

      type: 'input_text';
    }
  }
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
  output: Array<Response.AgentAssistantMessage | Response.AgentFunctionCall>;

  /**
   * Previous response ID
   */
  previous_response_id: string | null;

  /**
   * Response status
   */
  status: 'queued' | 'in_progress' | 'completed' | 'failed' | 'incomplete';

  /**
   * Token usage
   */
  usage: Response.Usage | null;
}

export namespace Response {
  /**
   * Error details if failed
   */
  export interface Error {
    code: string;

    message: string;
  }

  export interface AgentAssistantMessage {
    /**
     * Message ID
     */
    id: string;

    content: Array<AgentAssistantMessage.Content>;

    role: 'assistant';

    status: 'in_progress' | 'completed' | 'incomplete';

    type: 'message';
  }

  export namespace AgentAssistantMessage {
    export interface Content {
      /**
       * The output text
       */
      text: string;

      type: 'output_text';
    }
  }

  export interface AgentFunctionCall {
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

  /**
   * Token usage
   */
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
}

Agents.Responses = Responses;

export declare namespace Agents {
  export {
    type CreateResponseRequest as CreateResponseRequest,
    type ErrorResponse as ErrorResponse,
    type Response as Response,
  };

  export { Responses as Responses };
}
