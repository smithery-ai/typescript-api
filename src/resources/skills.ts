// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { PagePromise, SkillsPage, type SkillsPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Skills extends APIResource {
  /**
   * Get a paginated list of skills. When q parameter is provided, uses hybrid BM25 +
   * vector search.
   */
  list(
    query: SkillListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<SkillListResponsesSkillsPage, SkillListResponse> {
    return this._client.getAPIList('/skills', SkillsPage<SkillListResponse>, { query, ...options });
  }
}

export type SkillListResponsesSkillsPage = SkillsPage<SkillListResponse>;

export interface SkillListResponse {
  id: string;

  description: string;

  displayName: string;

  namespace: string;

  qualityScore: number;

  slug: string;

  categories?: Array<string>;

  externalStars?: number;

  gitUrl?: string;

  totalActivations?: number;

  uniqueUsers?: number;
}

export interface SkillListParams extends SkillsPageParams {
  category?: string;

  q?: string;
}

export declare namespace Skills {
  export {
    type SkillListResponse as SkillListResponse,
    type SkillListResponsesSkillsPage as SkillListResponsesSkillsPage,
    type SkillListParams as SkillListParams,
  };
}
