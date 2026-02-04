/**
 * Tests that verify the MCP SDK behavior we depend on for the handshake optimization.
 *
 * When transport.sessionId is set, Client.connect() skips initialization.
 * If these tests fail after an SDK upgrade, our optimization in mcp-transport.ts is broken.
 */

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import type { Transport } from '@modelcontextprotocol/sdk/shared/transport.js';

describe('MCP SDK sessionId behavior', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
  });

  it('should skip init when sessionId is pre-set on transport', async () => {
    const requests: Array<{ method: string }> = [];

    global.fetch = jest.fn(async (_url, init) => {
      const body = JSON.parse((init as RequestInit)?.body as string);
      requests.push({ method: body.method });

      // Return minimal valid response for any request
      return new Response(
        JSON.stringify({
          jsonrpc: '2.0',
          id: body.id,
          result: body.method === 'tools/list' ? { tools: [] } : {},
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    });

    const transport = new StreamableHTTPClientTransport(new URL('http://localhost/mcp'), {
      sessionId: 'test-session', // Pre-set sessionId
    });

    const client = new Client({ name: 'test', version: '1.0.0' });
    await client.connect(transport as Transport);

    // Key assertion: no initialize request should be made
    const initRequests = requests.filter((r) => r.method === 'initialize');
    expect(initRequests).toHaveLength(0);
  });

  it('should send init when sessionId is not set', async () => {
    const requests: Array<{ method: string }> = [];

    global.fetch = jest.fn(async (_url, init) => {
      const body = JSON.parse((init as RequestInit)?.body as string);
      requests.push({ method: body.method });

      if (body.method === 'initialize') {
        return new Response(
          JSON.stringify({
            jsonrpc: '2.0',
            id: body.id,
            result: {
              protocolVersion: '2024-11-05',
              capabilities: {},
              serverInfo: { name: 'test', version: '1.0.0' },
            },
          }),
          { status: 200, headers: { 'Content-Type': 'application/json' } },
        );
      }

      return new Response(
        JSON.stringify({
          jsonrpc: '2.0',
          id: body.id,
          result: {},
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } },
      );
    });

    const transport = new StreamableHTTPClientTransport(new URL('http://localhost/mcp'), {});

    const client = new Client({ name: 'test', version: '1.0.0' });
    await client.connect(transport as Transport);

    // Should have sent initialize request
    const initRequests = requests.filter((r) => r.method === 'initialize');
    expect(initRequests).toHaveLength(1);
  });
});
