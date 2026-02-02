// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectAPI from './connect/connect';
import { Connect } from './connect/connect';

export class Beta extends APIResource {
  connect: ConnectAPI.Connect = new ConnectAPI.Connect(this._client);
}

Beta.Connect = Connect;

export declare namespace Beta {
  export { Connect as Connect };
}
