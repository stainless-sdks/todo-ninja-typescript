// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TodoNinja from 'todo-ninja';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'me_users',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: TodoNinja, args: Record<string, unknown> | undefined) => {
  return client.users.me();
};

export default { metadata, tool, handler };
