// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Search for MCP servers using hybrid BM25 + vector search. When no query is
   * provided, returns servers sorted by engagement score.
   */
  servers(options?: RequestOptions): APIPromise<SearchServersResponse> {
    return this._client.get('/search/servers', options);
  }
}

export interface SearchServersResponse {
  data: Array<SearchServersResponse.Data>;

  pagination: SearchServersResponse.Pagination;

  debug?: SearchServersResponse.Debug;
}

export namespace SearchServersResponse {
  export interface Data {
    id: string;

    description: string;

    displayName: string;

    featured: boolean;

    isDeployed: boolean;

    qualifiedName: string;

    qualityScore: number;

    score: number;

    type: 'server';

    verified: boolean;

    createdAt?: string;

    homepage?: string | null;

    iconUrl?: string | null;

    remote?: boolean;

    repoName?: string;

    repoOwner?: string;

    useCount?: number;
  }

  export interface Pagination {
    page: number;

    pageSize: number;

    total: number;
  }

  export interface Debug {
    embeddingMs?: number;

    region?: string;

    searchMs?: number;

    totalMs?: number;
  }
}

export declare namespace Search {
  export { type SearchServersResponse as SearchServersResponse };
}
