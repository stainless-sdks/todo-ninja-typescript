// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from 'todo-ninja-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TodoNinja from 'todo-ninja';

export const metadata: Metadata = {
  resource: 'tags',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/v1/tags/{id}',
};

export const tool: Tool = {
  name: 'retrieve_tags',
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

export const handler = async (client: TodoNinja, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.tags.retrieve(id));
};

export default { metadata, tool, handler };
