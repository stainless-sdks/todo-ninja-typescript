// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TodoNinja from 'todo-ninja';

export const metadata: Metadata = {
  resource: 'todos.tags',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/todos/{todoId}/tags/{tagId}',
};

export const tool: Tool = {
  name: 'add_todos_tags',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      todoId: {
        type: 'string',
      },
      tagId: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TodoNinja, args: Record<string, unknown> | undefined) => {
  const { tagId, ...body } = args as any;
  return client.todos.tags.add(tagId, body);
};

export default { metadata, tool, handler };
