// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tools', () => {
  // Prism tests are disabled
  test.skip('search', async () => {
    const responsePromise = client.beta.connect.tools.search('namespace');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('search: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.beta.connect.tools.search(
        'namespace',
        {
          connectionId: 'connectionId',
          cursor: 'cursor',
          limit: 1,
          q: 'x',
          server: 'server',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Smithery.NotFoundError);
  });
});
