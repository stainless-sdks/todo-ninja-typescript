// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TodoNinja from 'Todo-Ninja';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_todos from './todos/create-todos';
import retrieve_todos from './todos/retrieve-todos';
import update_todos from './todos/update-todos';
import list_todos from './todos/list-todos';
import delete_todos from './todos/delete-todos';
import complete_todos from './todos/complete-todos';
import add_todos_tags from './todos/tags/add-todos-tags';
import remove_todos_tags from './todos/tags/remove-todos-tags';
import create_users from './users/create-users';
import me_users from './users/me-users';
import create_tags from './tags/create-tags';
import retrieve_tags from './tags/retrieve-tags';
import list_tags from './tags/list-tags';
import delete_tags from './tags/delete-tags';

export type HandlerFunction = (client: TodoNinja, args: Record<string, unknown> | undefined) => Promise<any>;

export type Metadata = {
  resource: string;
  operation: 'read' | 'write';
  tags: string[];
};

export type Endpoint = {
  metadata: Metadata;
  tool: Tool;
  handler: HandlerFunction;
};

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_todos);
addEndpoint(retrieve_todos);
addEndpoint(update_todos);
addEndpoint(list_todos);
addEndpoint(delete_todos);
addEndpoint(complete_todos);
addEndpoint(add_todos_tags);
addEndpoint(remove_todos_tags);
addEndpoint(create_users);
addEndpoint(me_users);
addEndpoint(create_tags);
addEndpoint(retrieve_tags);
addEndpoint(list_tags);
addEndpoint(delete_tags);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  if (unmatchedFilters.size > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${[...unmatchedFilters]
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
