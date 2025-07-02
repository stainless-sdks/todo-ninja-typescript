// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { TodoNinja11112 } from '../client';

export abstract class APIResource {
  protected _client: TodoNinja11112;

  constructor(client: TodoNinja11112) {
    this._client = client;
  }
}
