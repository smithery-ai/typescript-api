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
    const responsePromise = client.servers.deployments.deploy('qualifiedName', {
      payload: { stateful: true, type: 'hosted' },
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
    const response = await client.servers.deployments.deploy('qualifiedName', {
      payload: {
        stateful: true,
        type: 'hosted',
        configSchema: { foo: 'bar' },
        serverCard: {
          serverInfo: {
            name: 'name',
            version: 'version',
            description: 'description',
            icons: [
              {
                src: 'src',
                mimeType: 'mimeType',
                sizes: ['string'],
                theme: 'light',
              },
            ],
            title: 'title',
            websiteUrl: 'websiteUrl',
          },
          authentication: { required: true, schemes: ['string'] },
          prompts: [
            {
              name: 'name',
              _meta: { foo: 'bar' },
              arguments: [
                {
                  name: 'name',
                  description: 'description',
                  required: true,
                },
              ],
              description: 'description',
              icons: [
                {
                  src: 'src',
                  mimeType: 'mimeType',
                  sizes: ['string'],
                  theme: 'light',
                },
              ],
              title: 'title',
            },
          ],
          resources: [
            {
              name: 'name',
              uri: 'uri',
              _meta: { foo: 'bar' },
              annotations: {
                audience: ['user'],
                lastModified: '2019-12-27T18:11:19.117Z',
                priority: 0,
              },
              description: 'description',
              icons: [
                {
                  src: 'src',
                  mimeType: 'mimeType',
                  sizes: ['string'],
                  theme: 'light',
                },
              ],
              mimeType: 'mimeType',
              title: 'title',
            },
          ],
          tools: [
            {
              inputSchema: {
                type: 'object',
                properties: { foo: 'bar' },
                required: ['string'],
              },
              name: 'name',
              _meta: { foo: 'bar' },
              annotations: {
                destructiveHint: true,
                idempotentHint: true,
                openWorldHint: true,
                readOnlyHint: true,
                title: 'title',
              },
              description: 'description',
              execution: { taskSupport: 'required' },
              icons: [
                {
                  src: 'src',
                  mimeType: 'mimeType',
                  sizes: ['string'],
                  theme: 'light',
                },
              ],
              outputSchema: {
                type: 'object',
                properties: { foo: 'bar' },
                required: ['string'],
              },
              title: 'title',
            },
          ],
        },
        source: { branch: 'branch', commit: 'commit' },
      },
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
