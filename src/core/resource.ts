// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Smithery } from '../client';

export abstract class APIResource {
  protected _client: Smithery;

  constructor(client: Smithery) {
    this._client = client;
  }
}
