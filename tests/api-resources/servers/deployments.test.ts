// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery, { toFile } from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deployments', () => {
  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.servers.deployments.retrieve('id', { qualifiedName: 'qualifiedName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.servers.deployments.retrieve('id', { qualifiedName: 'qualifiedName' });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.servers.deployments.list('qualifiedName');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deploy: only required params', async () => {
    const responsePromise = client.servers.deployments.deploy('qualifiedName', { payload: 'payload' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deploy: required and optional params', async () => {
    const response = await client.servers.deployments.deploy('qualifiedName', {
      payload: 'payload',
      bundle: await toFile(Buffer.from('# my file contents'), 'README.md'),
      module: await toFile(Buffer.from('# my file contents'), 'README.md'),
      sourcemap: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // Prism tests are disabled
  test.skip('resume: only required params', async () => {
    const responsePromise = client.servers.deployments.resume('id', { qualifiedName: 'qualifiedName' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resume: required and optional params', async () => {
    const response = await client.servers.deployments.resume('id', { qualifiedName: 'qualifiedName' });
  });
});
