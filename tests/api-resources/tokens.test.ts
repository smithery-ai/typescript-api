// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tokens', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.tokens.create({
      allow: {},
      ttlSeconds: 3600,
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
    const response = await client.tokens.create({
      allow: {
        connections: {
          actions: ['read', 'write'],
          namespaces: ['my-app'],
          metadata: { userId: 'user-123' },
        },
        deployments: { actions: ['read', 'write'], namespaces: ['my-app'] },
        namespaces: { actions: ['read', 'write'], namespaces: ['my-app'] },
        rpc: {
          actions: ['write'],
          namespaces: ['my-app'],
          metadata: { userId: 'user-123' },
        },
        servers: { actions: ['read', 'write'], namespaces: ['my-app'] },
        tokens: { actions: ['read', 'write'], namespaces: ['my-app'] },
      },
      ttlSeconds: 3600,
      profileSlug: 'my-profile',
    });
  });
});
