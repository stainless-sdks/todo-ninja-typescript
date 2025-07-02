// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'todo-ninja-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TodoNinja11112 from 'todo-ninja';

export const metadata: Metadata = {
  resource: 'tags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/tags',
};

export const tool: Tool = {
  name: 'list_tags',
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

export const handler = async (client: TodoNinja11112, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.tags.list(body));
};

export default { metadata, tool, handler };
