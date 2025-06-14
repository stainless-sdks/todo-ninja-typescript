// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { TodoNinja } from '../client';

export abstract class APIResource {
  protected _client: TodoNinja;

  constructor(client: TodoNinja) {
    this._client = client;
  }
}
