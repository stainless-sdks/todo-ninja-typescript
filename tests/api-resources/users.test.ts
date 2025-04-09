// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import TodoNinja1 from 'Todo-Ninja';

const client = new TodoNinja1({
  username: 'My Username',
  password: 'My Password',
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.users.create({
      name: 'John Doe',
      password: 'password',
      username: 'john_doe',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.users.create({
      name: 'John Doe',
      password: 'password',
      username: 'john_doe',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMe', async () => {
    const responsePromise = client.users.retrieveMe();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
