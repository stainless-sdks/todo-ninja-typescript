// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TodoNinja from 'todo-ninja';

export const metadata: Metadata = {
  resource: 'todos',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/todos/{id}',
};

export const tool: Tool = {
  name: 'delete_todos',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TodoNinja, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.todos.delete(id);
};

export default { metadata, tool, handler };
