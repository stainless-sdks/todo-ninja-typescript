// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TodoNinja from 'Todo-Ninja';

export const metadata: Metadata = {
  resource: 'tags',
  operation: 'read',
  tags: [],
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

export const handler = (client: TodoNinja, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.tags.retrieve(id);
};

export default { metadata, tool, handler };
