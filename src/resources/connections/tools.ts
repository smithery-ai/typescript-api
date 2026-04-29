// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tools extends APIResource {
  /**
   * List tools exposed by a connection.
   *
   * @example
   * ```ts
   * const toolList = await client.connections.tools.list(
   *   'connectionId',
   *   { namespace: 'namespace' },
   * );
   * ```
   */
  list(connectionID: string, params: ToolListParams, options?: RequestOptions): APIPromise<ToolList> {
    const { namespace } = params;
    return this._client.get(path`/${namespace}/${connectionID}/.tools`, {
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
  }

  /**
   * Invoke a tool with JSON arguments.
   *
   * @example
   * ```ts
   * const response = await client.connections.tools.call(
   *   'toolPath',
   *   {
   *     namespace: 'namespace',
   *     connectionId: 'connectionId',
   *     body: { foo: 'bar' },
   *   },
   * );
   * ```
   */
  call(toolPath: string, params: ToolCallParams, options?: RequestOptions): APIPromise<ToolCallResponse> {
    const { namespace, connectionId, body } = params;
    return this._client.post(path`/${namespace}/${connectionId}/.tools/${toolPath}`, {
      body: body,
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
  }

  /**
   * Get one tool or list tools under a slash-separated category.
   *
   * @example
   * ```ts
   * const toolResponse = await client.connections.tools.get(
   *   'toolPath',
   *   { namespace: 'namespace', connectionId: 'connectionId' },
   * );
   * ```
   */
  get(toolPath: string, params: ToolGetParams, options?: RequestOptions): APIPromise<ToolResponse> {
    const { namespace, connectionId } = params;
    return this._client.get(path`/${namespace}/${connectionId}/.tools/${toolPath}`, {
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
  }
}

export interface Tool {
  inputSchema: Tool.InputSchema;

  name: string;

  _meta?: { [key: string]: unknown };

  annotations?: Tool.Annotations;

  description?: string;

  execution?: Tool.Execution;

  icons?: Array<Tool.Icon>;

  outputSchema?: Tool.OutputSchema;

  title?: string;
}

export namespace Tool {
  export interface InputSchema {
    type: 'object';

    properties?: { [key: string]: unknown };

    required?: Array<string>;

    [k: string]: unknown;
  }

  export interface Annotations {
    destructiveHint?: boolean;

    idempotentHint?: boolean;

    openWorldHint?: boolean;

    readOnlyHint?: boolean;

    title?: string;
  }

  export interface Execution {
    taskSupport?: 'required' | 'optional' | 'forbidden';
  }

  export interface Icon {
    src: string;

    mimeType?: string;

    sizes?: Array<string>;

    theme?: 'light' | 'dark';
  }

  export interface OutputSchema {
    type: 'object';

    properties?: { [key: string]: unknown };

    required?: Array<string>;

    [k: string]: unknown;
  }
}

export interface ToolList {
  tools: Array<Tool>;
}

export type ToolResponse = Tool | ToolList;

export type ToolCallResponse = { [key: string]: unknown };

export interface ToolListParams {
  namespace: string;
}

export interface ToolCallParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Path param
   */
  connectionId: string;

  /**
   * Body param
   */
  body: { [key: string]: unknown };
}

export interface ToolGetParams {
  namespace: string;

  connectionId: string;
}

export declare namespace Tools {
  export {
    type Tool as Tool,
    type ToolList as ToolList,
    type ToolResponse as ToolResponse,
    type ToolCallResponse as ToolCallResponse,
    type ToolListParams as ToolListParams,
    type ToolCallParams as ToolCallParams,
    type ToolGetParams as ToolGetParams,
  };
}
