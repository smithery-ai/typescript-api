// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource servers', () => {
  // Mock server tests are disabled
  test.skip('create', async () => {
    const responsePromise = client.servers.create('qualifiedName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.servers.create(
        'qualifiedName',
        { description: 'A simple server', displayName: 'My Server' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Smithery.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('update', async () => {
    const responsePromise = client.servers.update('qualifiedName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('update: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.servers.update(
        'qualifiedName',
        {
          backlinkUrl: 'backlinkUrl',
          description: 'description',
          displayName: 'displayName',
          homepage: 'homepage',
          iconUrl: 'iconUrl',
          license: 'license',
          repositoryUrl: 'repositoryUrl',
          unlisted: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Smithery.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.servers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.servers.list(
        {
          fields: 'fields',
          ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          isDeployed: '0',
          namespace: 'namespace',
          ownerId: 'ownerId',
          page: 1,
          pageSize: 1,
          q: 'q',
          qualifiedName: 'qualifiedName',
          remote: '0',
          repoName: 'repoName',
          repoOwner: 'repoOwner',
          seed: -9007199254740991,
          topK: 10,
          verified: '0',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Smithery.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('delete', async () => {
    const responsePromise = client.servers.delete('qualifiedName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.servers.get('qualifiedName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
