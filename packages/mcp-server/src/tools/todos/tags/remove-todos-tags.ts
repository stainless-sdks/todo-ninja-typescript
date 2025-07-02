// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'todo-ninja-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import TodoNinja11112 from 'todo-ninja';

export const metadata: Metadata = {
  resource: 'todos.tags',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/v1/todos/{todoId}/tags/{tagId}',
};

export const tool: Tool = {
  name: 'remove_todos_tags',
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

export const handler = async (client: TodoNinja11112, args: Record<string, unknown> | undefined) => {
  const { tagId, ...body } = args as any;
  return asTextContentResult(await client.todos.tags.remove(tagId, body));
};

export default { metadata, tool, handler };
