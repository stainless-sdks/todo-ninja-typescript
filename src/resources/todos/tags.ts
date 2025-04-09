// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TodosAPI from './todos';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tags extends APIResource {
  add(tagID: string, params: TagAddParams, options?: RequestOptions): APIPromise<TodosAPI.Todo> {
    const { todoId } = params;
    return this._client.post(path`/v1/todos/${todoId}/tags/${tagID}`, options);
  }

  remove(tagID: string, params: TagRemoveParams, options?: RequestOptions): APIPromise<TodosAPI.Todo> {
    const { todoId } = params;
    return this._client.delete(path`/v1/todos/${todoId}/tags/${tagID}`, options);
  }
}

export interface TagAddParams {
  todoId: string;
}

export interface TagRemoveParams {
  todoId: string;
}

export declare namespace Tags {
  export { type TagAddParams as TagAddParams, type TagRemoveParams as TagRemoveParams };
}
