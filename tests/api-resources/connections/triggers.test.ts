// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource triggers', () => {
  // Mock server tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.connections.triggers.list('connectionId', { namespace: 'namespace' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.connections.triggers.list('connectionId', { namespace: 'namespace' });
  });

  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.connections.triggers.get('triggerName', {
      namespace: 'namespace',
      connectionId: 'connectionId',
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
  test.skip('get: required and optional params', async () => {
    const response = await client.connections.triggers.get('triggerName', {
      namespace: 'namespace',
      connectionId: 'connectionId',
    });
  });

  // Mock server tests are disabled
  test.skip('subscribe: only required params', async () => {
    const responsePromise = client.connections.triggers.subscribe('triggerName', {
      namespace: 'namespace',
      connectionId: 'connectionId',
      delivery: {
        secret: 'whsec_dGVzdF9zZWNyZXRfMjRfYnl0ZXNfbWluaW11bSE=',
        url: 'https://my-app.example.com/events',
      },
      params: { foo: 'bar' },
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
  test.skip('subscribe: required and optional params', async () => {
    const response = await client.connections.triggers.subscribe('triggerName', {
      namespace: 'namespace',
      connectionId: 'connectionId',
      delivery: {
        secret: 'whsec_dGVzdF9zZWNyZXRfMjRfYnl0ZXNfbWluaW11bSE=',
        url: 'https://my-app.example.com/events',
      },
      params: { foo: 'bar' },
    });
  });

  // Mock server tests are disabled
  test.skip('unsubscribe: only required params', async () => {
    const responsePromise = client.connections.triggers.unsubscribe('triggerName', {
      namespace: 'namespace',
      connectionId: 'connectionId',
      delivery: { url: 'https://my-app.example.com/events' },
      params: { foo: 'bar' },
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
  test.skip('unsubscribe: required and optional params', async () => {
    const response = await client.connections.triggers.unsubscribe('triggerName', {
      namespace: 'namespace',
      connectionId: 'connectionId',
      delivery: { url: 'https://my-app.example.com/events' },
      params: { foo: 'bar' },
    });
  });
});
