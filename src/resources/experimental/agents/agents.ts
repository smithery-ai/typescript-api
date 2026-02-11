// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ResponsesAPI from './responses';
import { Responses } from './responses';

export class Agents extends APIResource {
  responses: ResponsesAPI.Responses = new ResponsesAPI.Responses(this._client);
}

Agents.Responses = Responses;

export declare namespace Agents {
  export { Responses as Responses };
}
