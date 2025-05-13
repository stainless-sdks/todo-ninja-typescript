// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import TodoNinja from 'todo-ninja';

export const metadata: Metadata = {
  resource: 'tags',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'create_tags',
  description: '',
  inputSchema: {
    type: 'object',
    properties: {
      label: {
        type: 'string',
      },
      owner_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: TodoNinja, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.tags.create(body);
};

export default { metadata, tool, handler };
