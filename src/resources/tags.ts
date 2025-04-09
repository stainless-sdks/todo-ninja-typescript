// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Tags extends APIResource {
  create(body: TagCreateParams, options?: RequestOptions): APIPromise<Tag> {
    return this._client.post('/v1/tags', { body, ...options });
  }

  retrieve(id: string, options?: RequestOptions): APIPromise<Tag> {
    return this._client.get(path`/v1/tags/${id}`, options);
  }

  list(query: TagListParams | null | undefined = {}, options?: RequestOptions): APIPromise<TagListResponse> {
    return this._client.get('/v1/tags', { query, ...options });
  }

  delete(id: string, options?: RequestOptions): APIPromise<TagDeleteResponse> {
    return this._client.delete(path`/v1/tags/${id}`, options);
  }
}

export interface Tag {
  id: string;

  created_at: string;

  label: string;

  owner_id: string;

  updated_at: string;
}

export interface TagListResponse {
  data: Array<Tag>;

  has_more: boolean;

  next_cursor: string | null;
}

export interface TagDeleteResponse {
  id: string;

  deleted: boolean;
}

export interface TagCreateParams {
  label: string;

  owner_id: string;
}

export interface TagListParams {
  cursor?: string;

  limit?: number | null;
}

export declare namespace Tags {
  export {
    type Tag as Tag,
    type TagListResponse as TagListResponse,
    type TagDeleteResponse as TagDeleteResponse,
    type TagCreateParams as TagCreateParams,
    type TagListParams as TagListParams,
  };
}
