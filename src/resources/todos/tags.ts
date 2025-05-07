// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TodosAPI from './todos';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tags extends APIResource {
  /**
   * @example
   * ```ts
   * const todo = await client.todos.tags.add(
   *   'tag_tz4a98xxat96iws9zmbrgj3a',
   *   { todoId: 'todo_nc6bzmkmd014706rfda898to' },
   * );
   * ```
   */
  add(tagID: string, params: TagAddParams, options?: RequestOptions): APIPromise<TodosAPI.Todo> {
    const { todoId } = params;
    return this._client.post(path`/v1/todos/${todoId}/tags/${tagID}`, options);
  }

  /**
   * @example
   * ```ts
   * const todo = await client.todos.tags.remove(
   *   'tag_tz4a98xxat96iws9zmbrgj3a',
   *   { todoId: 'todo_nc6bzmkmd014706rfda898to' },
   * );
   * ```
   */
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
