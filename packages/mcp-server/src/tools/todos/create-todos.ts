// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TodoNinja from 'todo-ninja';

export const metadata: Metadata = {
  resource: 'todos',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/todos',
};

export const tool: Tool = {
  name: 'create_todos',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      completed_at: {
        type: 'string',
      },
      description: {
        type: 'string',
      },
      tag_ids: {
        type: 'array',
        items: {
          type: 'string',
        },
      },
      title: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TodoNinja, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.todos.create(body);
};

export default { metadata, tool, handler };
