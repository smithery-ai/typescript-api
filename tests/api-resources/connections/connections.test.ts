// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource connections', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.connections.create('namespace', { mcpUrl: 'https://mcp.example.com/sse' });
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
    const response = await client.connections.create('namespace', {
      mcpUrl: 'https://mcp.example.com/sse',
      headers: { 'X-API-Key': 'secret-key' },
      metadata: { userId: 'bar', team: 'bar' },
      name: 'My MCP Server',
      unstableCallbackUrl: 'https://example.com/mcp/callback',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.connections.list('namespace');
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
      client.connections.list(
        'namespace',
        {
          cursor: 'cursor',
          limit: 50,
          mcpUrl: 'mcpUrl',
          name: 'name',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Smithery.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.connections.delete('connectionId', { namespace: 'namespace' });
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
    const response = await client.connections.delete('connectionId', { namespace: 'namespace' });
  });

  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.connections.get('connectionId', { namespace: 'namespace' });
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
    const response = await client.connections.get('connectionId', { namespace: 'namespace' });
  });

  // Prism tests are disabled
  test.skip('set: only required params', async () => {
    const responsePromise = client.connections.set('connectionId', { namespace: 'namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('set: required and optional params', async () => {
    const response = await client.connections.set('connectionId', {
      namespace: 'namespace',
      headers: { 'X-API-Key': 'secret-key' },
      mcpUrl: 'https://mcp.example.com/sse',
      metadata: { userId: 'bar', team: 'bar' },
      name: 'My MCP Server',
      unstableCallbackUrl: 'https://example.com/mcp/callback',
    });
  });
});
