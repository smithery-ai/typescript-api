// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery, { toFile } from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource deployments', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.servers.deployments.list('server', { namespace: 'namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.servers.deployments.list('server', { namespace: 'namespace' });
  });

  // Prism tests are disabled
  test.skip('deploy: only required params', async () => {
    const responsePromise = client.servers.deployments.deploy('server', {
      namespace: 'namespace',
      payload: 'payload',
    });
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
    const response = await client.servers.deployments.deploy('server', {
      namespace: 'namespace',
      payload: 'payload',
      bundle: await toFile(Buffer.from('# my file contents'), 'README.md'),
      module: await toFile(Buffer.from('# my file contents'), 'README.md'),
      sourcemap: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // Prism tests are disabled
  test.skip('deployByNamespace: only required params', async () => {
    const responsePromise = client.servers.deployments.deployByNamespace('namespace', { payload: 'payload' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deployByNamespace: required and optional params', async () => {
    const response = await client.servers.deployments.deployByNamespace('namespace', {
      payload: 'payload',
      bundle: await toFile(Buffer.from('# my file contents'), 'README.md'),
      module: await toFile(Buffer.from('# my file contents'), 'README.md'),
      sourcemap: await toFile(Buffer.from('# my file contents'), 'README.md'),
    });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.servers.deployments.get('id', {
      namespace: 'namespace',
      server: 'server',
    });
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
    const response = await client.servers.deployments.get('id', { namespace: 'namespace', server: 'server' });
  });

  // Prism tests are disabled
  test.skip('getByNamespace: only required params', async () => {
    const responsePromise = client.servers.deployments.getByNamespace('id', { namespace: 'namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getByNamespace: required and optional params', async () => {
    const response = await client.servers.deployments.getByNamespace('id', { namespace: 'namespace' });
  });

  // Prism tests are disabled
  test.skip('listByNamespace', async () => {
    const responsePromise = client.servers.deployments.listByNamespace('namespace');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resume: only required params', async () => {
    const responsePromise = client.servers.deployments.resume('id', {
      namespace: 'namespace',
      server: 'server',
    });
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
    const response = await client.servers.deployments.resume('id', {
      namespace: 'namespace',
      server: 'server',
    });
  });

  // Prism tests are disabled
  test.skip('resumeByNamespace: only required params', async () => {
    const responsePromise = client.servers.deployments.resumeByNamespace('id', { namespace: 'namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('resumeByNamespace: required and optional params', async () => {
    const response = await client.servers.deployments.resumeByNamespace('id', { namespace: 'namespace' });
  });

  // Prism doesn't support text/event-stream responses
  test.skip('stream: only required params', async () => {
    const responsePromise = client.servers.deployments.stream('id', {
      namespace: 'namespace',
      server: 'server',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support text/event-stream responses
  test.skip('stream: required and optional params', async () => {
    const response = await client.servers.deployments.stream('id', {
      namespace: 'namespace',
      server: 'server',
    });
  });

  // Prism doesn't support text/event-stream responses
  test.skip('streamByNamespace: only required params', async () => {
    const responsePromise = client.servers.deployments.streamByNamespace('id', { namespace: 'namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism doesn't support text/event-stream responses
  test.skip('streamByNamespace: required and optional params', async () => {
    const response = await client.servers.deployments.streamByNamespace('id', { namespace: 'namespace' });
  });
});
