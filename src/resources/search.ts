// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Search extends APIResource {
  /**
   * Search for MCP servers using hybrid BM25 + vector search
   */
  retrieveServers(options?: RequestOptions): APIPromise<SearchRetrieveServersResponse> {
    return this._client.get('/search/servers', options);
  }

  /**
   * Search for skills using hybrid BM25 + vector search
   */
  retrieveSkills(options?: RequestOptions): APIPromise<SearchRetrieveSkillsResponse> {
    return this._client.get('/search/skills', options);
  }
}

export interface SearchRetrieveServersResponse {
  data: Array<SearchRetrieveServersResponse.UnionMember0 | SearchRetrieveServersResponse.UnionMember1>;

  pagination: SearchRetrieveServersResponse.Pagination;

  debug?: SearchRetrieveServersResponse.Debug;
}

export namespace SearchRetrieveServersResponse {
  export interface UnionMember0 {
    id: string;

    description: string;

    displayName: string;

    namespace: string;

    qualityScore: number;

    score: number;

    slug: string;

    type: 'skill';

    categories?: Array<string>;

    externalStars?: number;

    gitUrl?: string;

    totalActivations?: number;
  }

  export interface UnionMember1 {
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

    rrfMs?: number;

    searchMs?: number;

    totalMs?: number;
  }
}

export interface SearchRetrieveSkillsResponse {
  data: Array<SearchRetrieveSkillsResponse.UnionMember0 | SearchRetrieveSkillsResponse.UnionMember1>;

  pagination: SearchRetrieveSkillsResponse.Pagination;

  debug?: SearchRetrieveSkillsResponse.Debug;
}

export namespace SearchRetrieveSkillsResponse {
  export interface UnionMember0 {
    id: string;

    description: string;

    displayName: string;

    namespace: string;

    qualityScore: number;

    score: number;

    slug: string;

    type: 'skill';

    categories?: Array<string>;

    externalStars?: number;

    gitUrl?: string;

    totalActivations?: number;
  }

  export interface UnionMember1 {
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

    rrfMs?: number;

    searchMs?: number;

    totalMs?: number;
  }
}

export declare namespace Search {
  export {
    type SearchRetrieveServersResponse as SearchRetrieveServersResponse,
    type SearchRetrieveSkillsResponse as SearchRetrieveSkillsResponse,
  };
}
