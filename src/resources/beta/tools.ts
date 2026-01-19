// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, ToolsPage, type ToolsPageParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class Tools extends APIResource {
  /**
   * Get a paginated list of all MCP tools across servers. Use the `q` parameter for
   * semantic search.
   */
  list(
    query: ToolListParams,
    options?: RequestOptions,
  ): PagePromise<ToolListResponsesToolsPage, ToolListResponse> {
    return this._client.getAPIList('/tools', ToolsPage<ToolListResponse>, { query, ...options });
  }
}

export type ToolListResponsesToolsPage = ToolsPage<ToolListResponse>;

export interface ToolListResponse {
  id: string;

  server: ToolListResponse.Server;

  tool: ToolListResponse.Tool;
}

export namespace ToolListResponse {
  export interface Server {
    id: string;

    displayName: string;

    iconUrl: string | null;

    isDeployed: boolean;

    qualifiedName: string;

    verified: boolean;
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
}

export interface ToolListParams extends ToolsPageParams {
  q: string;

  destructiveHint?: '0' | '1' | 'true' | 'false';

  idempotentHint?: '0' | '1' | 'true' | 'false';

  readOnlyHint?: '0' | '1' | 'true' | 'false';

  serverId?: string;

  serverIsDeployed?: '0' | '1' | 'true' | 'false';

  serverQualifiedName?: string;

  serverVerified?: '0' | '1' | 'true' | 'false';

  topK?: number;
}

export declare namespace Tools {
  export {
    type ToolListResponse as ToolListResponse,
    type ToolListResponsesToolsPage as ToolListResponsesToolsPage,
    type ToolListParams as ToolListParams,
  };
}
