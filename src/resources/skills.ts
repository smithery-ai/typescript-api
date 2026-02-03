// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { PagePromise, SkillsPage, type SkillsPageParams } from '../core/pagination';
import { RequestOptions } from '../internal/request-options';

export class Skills extends APIResource {
  /**
   * Search and browse reusable prompt-based skills. Supports full-text and semantic
   * search via the `q` parameter, and filtering by category, namespace, or slug.
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

  /**
   * ISO 8601 timestamp of when the skill was created.
   */
  createdAt: string;

  description: string;

  displayName: string;

  /**
   * Whether this skill is publicly listed in the registry.
   */
  listed: boolean;

  /**
   * Namespace that owns this skill.
   */
  namespace: string;

  /**
   * The prompt template for this skill, or null if not publicly visible.
   */
  prompt: string | null;

  /**
   * Computed quality score from 0 to 1.
   */
  qualityScore: number;

  /**
   * URL-friendly short name within the namespace.
   */
  slug: string;

  /**
   * List of categories this skill belongs to.
   */
  categories?: Array<string>;

  /**
   * GitHub fork count of the source repository, if applicable.
   */
  externalForks?: number;

  /**
   * GitHub star count of the source repository, if applicable.
   */
  externalStars?: number;

  /**
   * URL to the skill's source repository.
   */
  gitUrl?: string;

  /**
   * Qualified names of MCP servers this skill depends on.
   */
  servers?: Array<string>;

  /**
   * Total number of times this skill has been activated.
   */
  totalActivations?: number;

  /**
   * Number of distinct users who have activated this skill.
   */
  uniqueUsers?: number;
}

export interface SkillListParams extends SkillsPageParams {
  /**
   * Filter by skill category (e.g. 'code', 'data', 'web').
   */
  category?: string;

  /**
   * Filter by the namespace that owns the skill.
   */
  namespace?: string;

  /**
   * Search query for full-text and semantic search across skill names and
   * descriptions.
   */
  q?: string;

  /**
   * Filter by exact skill slug within a namespace.
   */
  slug?: string;

  /**
   * Maximum number of candidate results to consider from the search index before
   * pagination.
   */
  topK?: number;
}

export declare namespace Skills {
  export {
    type SkillListResponse as SkillListResponse,
    type SkillListResponsesSkillsPage as SkillListResponsesSkillsPage,
    type SkillListParams as SkillListParams,
  };
}
