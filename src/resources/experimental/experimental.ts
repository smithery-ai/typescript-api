// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AgentsAPI from './agents/agents';
import { Agents } from './agents/agents';
import * as ConnectAPI from './connect/connect';
import { Connect } from './connect/connect';

export class Experimental extends APIResource {
  agents: AgentsAPI.Agents = new AgentsAPI.Agents(this._client);
  connect: ConnectAPI.Connect = new ConnectAPI.Connect(this._client);
}

Experimental.Agents = Agents;
Experimental.Connect = Connect;

export declare namespace Experimental {
  export { Agents as Agents };

  export { Connect as Connect };
}
