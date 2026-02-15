// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource domains', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.servers.domains.create('server', {
      namespace: 'namespace',
      subdomain: 'subdomain',
      type: 'managed',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.servers.domains.create('server', {
      namespace: 'namespace',
      subdomain: 'subdomain',
      type: 'managed',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.servers.domains.update('domainId', {
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
  test.skip('update: required and optional params', async () => {
    const response = await client.servers.domains.update('domainId', {
      namespace: 'namespace',
      server: 'server',
      allowUnauthenticated: true,
      requiresConfig: true,
      subdomain: 'subdomain',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.servers.domains.list('server', { namespace: 'namespace' });
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
    const response = await client.servers.domains.list('server', { namespace: 'namespace' });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.servers.domains.delete('domainId', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.servers.domains.delete('domainId', {
      namespace: 'namespace',
      server: 'server',
    });
  });

  // Prism tests are disabled
  test.skip('createByNamespace: only required params', async () => {
    const responsePromise = client.servers.domains.createByNamespace('namespace', {
      subdomain: 'subdomain',
      type: 'managed',
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
  test.skip('createByNamespace: required and optional params', async () => {
    const response = await client.servers.domains.createByNamespace('namespace', {
      subdomain: 'subdomain',
      type: 'managed',
    });
  });

  // Prism tests are disabled
  test.skip('deleteByNamespace: only required params', async () => {
    const responsePromise = client.servers.domains.deleteByNamespace('domainId', { namespace: 'namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('deleteByNamespace: required and optional params', async () => {
    const response = await client.servers.domains.deleteByNamespace('domainId', { namespace: 'namespace' });
  });

  // Prism tests are disabled
  test.skip('listByNamespace', async () => {
    const responsePromise = client.servers.domains.listByNamespace('namespace');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateByNamespace: only required params', async () => {
    const responsePromise = client.servers.domains.updateByNamespace('domainId', { namespace: 'namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('updateByNamespace: required and optional params', async () => {
    const response = await client.servers.domains.updateByNamespace('domainId', {
      namespace: 'namespace',
      allowUnauthenticated: true,
      requiresConfig: true,
      subdomain: 'subdomain',
    });
  });
});
