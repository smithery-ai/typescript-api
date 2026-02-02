// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource servers', () => {
  // Prism tests are disabled
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

  // Prism tests are disabled
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.servers.list(
        {
          ids: ['182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e'],
          isDeployed: '0',
          ownerId: 'ownerId',
          page: 1,
          pageSize: 1,
          q: 'q',
          qualifiedName: 'qualifiedName',
          remote: '0',
          repoName: 'repoName',
          repoOwner: 'repoOwner',
          topK: 10,
          verified: '0',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Smithery.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.servers.delete('server', { namespace: 'namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.servers.delete('server', { namespace: 'namespace' });
  });

  test('download: required and optional params', async () => {
    const response = await client.servers.download('server', { namespace: 'namespace' });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.servers.get('server', { namespace: 'namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.servers.get('server', { namespace: 'namespace' });
  });

  // Prism tests are disabled
  test.skip('getByNamespace', async () => {
    const responsePromise = client.servers.getByNamespace('namespace');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
