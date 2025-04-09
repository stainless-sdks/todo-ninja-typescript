// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    return this._client.post('/v1/users', { body, ...options });
  }

  me(options?: RequestOptions): APIPromise<UserMeResponse> {
    return this._client.get('/v1/users/me', options);
  }
}

export interface UserCreateResponse {
  id: string;

  api_key: string | null;

  created_at: string;

  name: string;

  updated_at: string;

  username: string;
}

export interface UserMeResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  username: string;
}

export interface UserCreateParams {
  name: string;

  password: string | null;

  username: string;
}

export declare namespace Users {
  export {
    type UserCreateResponse as UserCreateResponse,
    type UserMeResponse as UserMeResponse,
    type UserCreateParams as UserCreateParams,
  };
}
