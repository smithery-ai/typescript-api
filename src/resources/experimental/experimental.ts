// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents/agents';
import {
  Agents,
  AssistantMessage,
  CreateResponseRequest,
  ErrorResponse,
  FunctionCall,
  InputItem,
  InputTextContent,
  OutputItem,
  OutputTextContent,
  Response,
  ResponseStatus,
  StringContent,
  SystemMessage,
  Usage,
  UserMessage,
} from './agents/agents';
import * as ConnectAPI from './connect/connect';
import { Connect } from './connect/connect';

export class Experimental extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  connect: ConnectAPI.Connect = new ConnectAPI.Connect(this._client);
}

Experimental.Agents = Agents;
Experimental.Connect = Connect;

export declare namespace Experimental {
  export {
    Agents as Agents,
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

  export { Connect as Connect };
}
