// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ToolsAPI from './tools';
import { ToolSearchParams, ToolSearchResponse, Tools } from './tools';
import * as ConnectAPI from './connect/connect';
import { Connect } from './connect/connect';

export class Beta extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  connect: ConnectAPI.Connect = new ConnectAPI.Connect(this._client);
}

Beta.Tools = Tools;
Beta.Connect = Connect;

export declare namespace Beta {
  export {
    Tools as Tools,
    type ToolSearchResponse as ToolSearchResponse,
    type ToolSearchParams as ToolSearchParams,
  };

  export { Connect as Connect };
}
