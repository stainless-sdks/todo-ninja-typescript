// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TagsAPI from './tags';
import { TagAddParams, TagRemoveParams, Tags } from './tags';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, Pagination, type PaginationParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Todos extends APIResource {
  tags: TagsAPI.Tags = new TagsAPI.Tags(this._client);

  create(body: TodoCreateParams, options?: RequestOptions): APIPromise<Todo> {
    return this._client.post('/v1/todos', { body, ...options });
  }

  retrieve(id: string, options?: RequestOptions): APIPromise<Todo> {
    return this._client.get(path`/v1/todos/${id}`, options);
  }

  update(
    id: string,
    body: TodoUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Todo> {
    return this._client.put(path`/v1/todos/${id}`, { body, ...options });
  }

  list(
    query: TodoListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TodosPagination, Todo> {
    return this._client.getAPIList('/v1/todos', Pagination<Todo>, { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<TodoDeleteResponse> {
    return this._client.delete(path`/v1/todos/${id}`, options);
  }

  complete(id: string, options?: RequestOptions): APIPromise<Todo> {
    return this._client.post(path`/v1/todos/${id}/complete`, options);
  }
}

export type TodosPagination = Pagination<Todo>;

export interface Todo {
  id: string;

  completed_at: string | null;

  created_at: string;

  description: string | null;

  tags: Array<Todo.Tag>;

  title: string;

  updated_at: string;
}

export namespace Todo {
  export interface Tag {
    id: string;

    created_at: string;

    label: string;

    owner_id: string;

    updated_at: string;
  }
}

export interface TodoDeleteResponse {
  id: string;

  deleted: boolean;
}

export interface TodoCreateParams {
  completed_at: string | null;

  description: string | null;

  tag_ids: Array<string>;

  title: string;
}

export interface TodoUpdateParams {
  completed_at?: string | null;

  description?: string | null;

  tag_ids?: Array<string>;

  title?: string;
}

export interface TodoListParams extends PaginationParams {}

Todos.Tags = Tags;

export declare namespace Todos {
  export {
    type Todo as Todo,
    type TodoDeleteResponse as TodoDeleteResponse,
    type TodosPagination as TodosPagination,
    type TodoCreateParams as TodoCreateParams,
    type TodoUpdateParams as TodoUpdateParams,
    type TodoListParams as TodoListParams,
  };

  export { Tags as Tags, type TagAddParams as TagAddParams, type TagRemoveParams as TagRemoveParams };
}
