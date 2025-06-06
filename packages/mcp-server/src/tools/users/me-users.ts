// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'todo-ninja-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TodoNinja from 'todo-ninja';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/users/me',
};

export const tool: Tool = {
  name: 'me_users',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: TodoNinja, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.users.me());
};

export default { metadata, tool, handler };
