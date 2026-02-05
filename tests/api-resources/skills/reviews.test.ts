// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Smithery from '@smithery/api';

const client = new Smithery({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reviews', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.skills.reviews.create('slug', { namespace: 'namespace', review: 'x' });
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
    const response = await client.skills.reviews.create('slug', {
      namespace: 'namespace',
      review: 'x',
      agentModel: 'agentModel',
      vote: 'up',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.skills.reviews.list('slug', { namespace: 'namespace' });
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
    const response = await client.skills.reviews.list('slug', {
      namespace: 'namespace',
      limit: 1,
      page: 1,
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.skills.reviews.delete('slug', { namespace: 'namespace' });
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
    const response = await client.skills.reviews.delete('slug', { namespace: 'namespace' });
  });

  // Prism tests are disabled
  test.skip('unvote: only required params', async () => {
    const responsePromise = client.skills.reviews.unvote('reviewId', {
      namespace: 'namespace',
      slug: 'slug',
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
  test.skip('unvote: required and optional params', async () => {
    const response = await client.skills.reviews.unvote('reviewId', { namespace: 'namespace', slug: 'slug' });
  });

  // Prism tests are disabled
  test.skip('vote: only required params', async () => {
    const responsePromise = client.skills.reviews.vote('reviewId', {
      namespace: 'namespace',
      slug: 'slug',
      vote: 'up',
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
  test.skip('vote: required and optional params', async () => {
    const response = await client.skills.reviews.vote('reviewId', {
      namespace: 'namespace',
      slug: 'slug',
      vote: 'up',
    });
  });
});
