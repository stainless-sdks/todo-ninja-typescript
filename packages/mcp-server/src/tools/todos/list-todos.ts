// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TodoNinja from 'todo-ninja';

export const metadata: Metadata = {
  resource: 'todos',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/todos',
};

export const tool: Tool = {
  name: 'list_todos',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
      },
      limit: {
        type: 'number',
      },
    },
  },
};

export const handler = (client: TodoNinja, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.todos.list(body);
};

export default { metadata, tool, handler };
