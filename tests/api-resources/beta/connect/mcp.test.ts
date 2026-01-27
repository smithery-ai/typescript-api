// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource mcp', () => {
  // Prism tests are disabled
  test.skip('call: only required params', async () => {
    const responsePromise = client.beta.connect.mcp.call('connectionId', {
      namespace: 'namespace',
      jsonrpc: '2.0',
      method: 'tools/list',
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
  test.skip('call: required and optional params', async () => {
    const response = await client.beta.connect.mcp.call('connectionId', {
      namespace: 'namespace',
      jsonrpc: '2.0',
      method: 'tools/list',
      id: 'string',
      params: {},
    });
  });
});
