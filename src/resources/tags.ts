// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { PagePromise, Pagination, type PaginationParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tags extends APIResource {
  /**
   * @example
   * ```ts
   * const tag = await client.tags.create({
   *   label: 'Work',
   *   owner_id: 'owner_id',
   * });
   * ```
   */
  create(body: TagCreateParams, options?: RequestOptions): APIPromise<Tag> {
    return this._client.post('/v1/tags', { body, ...options });
  }

  /**
   * @example
   * ```ts
   * const tag = await client.tags.retrieve(
   *   'tag_tz4a98xxat96iws9zmbrgj3a',
   * );
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Tag> {
    return this._client.get(path`/v1/tags/${id}`, options);
  }

  /**
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tag of client.tags.list()) {
   *   // ...
   * }
   * ```
   */
  list(
    query: TagListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TagsPagination, Tag> {
    return this._client.getAPIList('/v1/tags', Pagination<Tag>, { query, ...options });
  }

  /**
   * @example
   * ```ts
   * const tag = await client.tags.delete(
   *   'tag_tz4a98xxat96iws9zmbrgj3a',
   * );
   * ```
   */
  delete(id: string, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    return this._client.delete(path`/v1/tags/${id}`, options);
  }
}

export type TagsPagination = Pagination<Tag>;

export interface Tag {
  id: string;

  created_at: string;

  label: string;

  owner_id: string;

  updated_at: string;
}

export interface TagDeleteResponse {
  id: string;

  deleted: boolean;
}

export interface TagCreateParams {
  label: string;

  owner_id: string;
}

export interface TagListParams extends PaginationParams {}

export declare namespace Tags {
  export {
    type Tag as Tag,
    type TagDeleteResponse as TagDeleteResponse,
    type TagsPagination as TagsPagination,
    type TagCreateParams as TagCreateParams,
    type TagListParams as TagListParams,
  };
}
