// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource subscriptions', () => {
  // Mock server tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.subscriptions.create('namespace', {
      secret: 'whsec_dGVzdF9zZWNyZXRfMjRfYnl0ZXNfbWluaW11bSE=',
      url: 'https://my-app.example.com/events',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.subscriptions.create('namespace', {
      secret: 'whsec_dGVzdF9zZWNyZXRfMjRfYnl0ZXNfbWluaW11bSE=',
      url: 'https://my-app.example.com/events',
    });
  });

  // Mock server tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.subscriptions.list('namespace');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.subscriptions.delete('subscriptionId', { namespace: 'namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.subscriptions.delete('subscriptionId', { namespace: 'namespace' });
  });
});
