// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TodoNinja1 from 'Todo-Ninja';

const client = new TodoNinja1({
  username: 'My Username',
  password: 'My Password',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tags', () => {
  // skipped: tests are disabled for the time being
  test.skip('add: only required params', async () => {
    const responsePromise = client.todos.tags.add('tag_tz4a98xxat96iws9zmbrgj3a', {
      todoId: 'todo_nc6bzmkmd014706rfda898to',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('add: required and optional params', async () => {
    const response = await client.todos.tags.add('tag_tz4a98xxat96iws9zmbrgj3a', {
      todoId: 'todo_nc6bzmkmd014706rfda898to',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('remove: only required params', async () => {
    const responsePromise = client.todos.tags.remove('tag_tz4a98xxat96iws9zmbrgj3a', {
      todoId: 'todo_nc6bzmkmd014706rfda898to',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('remove: required and optional params', async () => {
    const response = await client.todos.tags.remove('tag_tz4a98xxat96iws9zmbrgj3a', {
      todoId: 'todo_nc6bzmkmd014706rfda898to',
    });
  });
});
