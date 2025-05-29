// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TodoNinja from 'todo-ninja';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/v1/users',
};

export const tool: Tool = {
  name: 'create_users',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
      },
      password: {
        type: 'string',
      },
      username: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TodoNinja, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.users.create(body);
};

export default { metadata, tool, handler };
