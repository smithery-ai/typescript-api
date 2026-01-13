// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tools', () => {
  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.beta.tools.list({ q: 'x' });
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
    const response = await client.beta.tools.list({
      q: 'x',
      destructiveHint: '0',
      idempotentHint: '0',
      page: 1,
      pageSize: 1,
      readOnlyHint: '0',
      serverId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      serverIsDeployed: '0',
      serverQualifiedName: 'serverQualifiedName',
      serverVerified: '0',
      topK: 10,
    });
  });
});
