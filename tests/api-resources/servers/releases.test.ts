// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery, { toFile } from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource releases', () => {
  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.servers.releases.list('qualifiedName');
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
      client.servers.releases.list(
        'qualifiedName',
        { page: 1, pageSize: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Smithery.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('deploy: only required params', async () => {
    const responsePromise = client.servers.releases.deploy('qualifiedName', { payload: 'payload' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('deploy: required and optional params', async () => {
    const response = await client.servers.releases.deploy('qualifiedName', {
      payload: 'payload',
      bundle: await toFile(Buffer.from('# my file contents'), 'README.md'),
      module: await toFile(Buffer.from('# my file contents'), 'README.md'),
      sourcemap: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.servers.releases.get('id', { qualifiedName: 'qualifiedName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.servers.releases.get('id', { qualifiedName: 'qualifiedName' });
  });

  // Mock server tests are disabled
  test.skip('resume: only required params', async () => {
    const responsePromise = client.servers.releases.resume('id', { qualifiedName: 'qualifiedName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('resume: required and optional params', async () => {
    const response = await client.servers.releases.resume('id', { qualifiedName: 'qualifiedName' });
  });

  // Mock server tests are disabled
  test.skip('stream: only required params', async () => {
    const responsePromise = client.servers.releases.stream('id', { qualifiedName: 'qualifiedName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('stream: required and optional params', async () => {
    const response = await client.servers.releases.stream('id', { qualifiedName: 'qualifiedName' });
  });
});
