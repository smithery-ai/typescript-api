// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ConnectAPI from './connect/connect';
import { Connect } from './connect/connect';

export class Experimental extends APIResource {
  connect: ConnectAPI.Connect = new ConnectAPI.Connect(this._client);
}

Experimental.Connect = Connect;

export declare namespace Experimental {
  export { Connect as Connect };
}
