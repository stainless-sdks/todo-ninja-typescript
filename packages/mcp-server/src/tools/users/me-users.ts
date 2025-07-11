// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'todo-ninja-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\n\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string'\n    },\n    created_at: {\n      type: 'string'\n    },\n    name: {\n      type: 'string'\n    },\n    updated_at: {\n      type: 'string'\n    },\n    username: {\n      type: 'string'\n    }\n  },\n  required: [    'id',\n    'created_at',\n    'name',\n    'updated_at',\n    'username'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: TodoNinja, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.users.me()));
};

export default { metadata, tool, handler };
