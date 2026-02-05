// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ReviewsAPI from './reviews';
import {
  CreateReviewRequest,
  CreateReviewResponse,
  ReviewCreateParams,
  ReviewDeleteParams,
  ReviewError,
  ReviewItem,
  ReviewItemsReviewsPage,
  ReviewListParams,
  ReviewUnvoteParams,
  ReviewVoteParams,
  ReviewVoteRequest,
  ReviewVoteResponse,
  Reviews,
  ReviewsListResponse,
} from './reviews';
import * as VotesAPI from './votes';
import {
  SkillVoteCounts,
  SkillVoteError,
  SkillVoteRequest,
  SkillVoteResponse,
  VoteCreateParams,
  VoteDeleteParams,
  VoteGetParams,
  Votes,
} from './votes';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SkillsPage, type SkillsPageParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Skills extends APIResource {
  votes: VotesAPI.Votes = new VotesAPI.Votes(this._client);
  reviews: ReviewsAPI.Reviews = new ReviewsAPI.Reviews(this._client);

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

  /**
   * Get a single skill by its namespace and slug.
   */
  get(slug: string, params: SkillGetParams, options?: RequestOptions): APIPromise<SkillGetResponse> {
    const { namespace } = params;
    return this._client.get(path`/skills/${namespace}/${slug}`, options);
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
   * Number of downvotes for this skill.
   */
  downvotes?: number;

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
   * Number of reviews for this skill.
   */
  reviewCount?: number;

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

  /**
   * Number of upvotes for this skill.
   */
  upvotes?: number;
}

export interface SkillGetResponse {
  id: string;

  categories: Array<string>;

  createdAt: string;

  description: string;

  displayName: string;

  downvotes: number;

  externalForks: number;

  externalStars: number;

  gitUrl: string;

  listed: boolean;

  namespace: string;

  prompt: string;

  qualityScore: number;

  reviewCount: number;

  servers: Array<string>;

  slug: string;

  totalActivations: number;

  uniqueUsers: number;

  upvotes: number;
}

export interface SkillListParams extends SkillsPageParams {
  /**
   * Filter by skill category (e.g. 'code', 'data', 'web').
   */
  category?: string;

  /**
   * Comma-separated list of fields to include in response
   */
  fields?: string;

  /**
   * Filter by the namespace that owns the skill.
   */
  namespace?: string;

  /**
   * Filter by the skill owner's user ID.
   */
  ownerId?: string;

  /**
   * Search query for full-text and semantic search across skill names and
   * descriptions.
   */
  q?: string;

  /**
   * Filter by exact skill slug within a namespace. Deprecated: use GET
   * /skills/:namespace/:slug instead.
   */
  slug?: string;

  /**
   * Maximum number of candidate results to consider from the search index before
   * pagination.
   */
  topK?: number;
}

export interface SkillGetParams {
  namespace: string;
}

Skills.Votes = Votes;
Skills.Reviews = Reviews;

export declare namespace Skills {
  export {
    type SkillListResponse as SkillListResponse,
    type SkillGetResponse as SkillGetResponse,
    type SkillListResponsesSkillsPage as SkillListResponsesSkillsPage,
    type SkillListParams as SkillListParams,
    type SkillGetParams as SkillGetParams,
  };

  export {
    Votes as Votes,
    type SkillVoteCounts as SkillVoteCounts,
    type SkillVoteError as SkillVoteError,
    type SkillVoteRequest as SkillVoteRequest,
    type SkillVoteResponse as SkillVoteResponse,
    type VoteCreateParams as VoteCreateParams,
    type VoteDeleteParams as VoteDeleteParams,
    type VoteGetParams as VoteGetParams,
  };

  export {
    Reviews as Reviews,
    type CreateReviewRequest as CreateReviewRequest,
    type CreateReviewResponse as CreateReviewResponse,
    type ReviewError as ReviewError,
    type ReviewItem as ReviewItem,
    type ReviewVoteRequest as ReviewVoteRequest,
    type ReviewVoteResponse as ReviewVoteResponse,
    type ReviewsListResponse as ReviewsListResponse,
    type ReviewItemsReviewsPage as ReviewItemsReviewsPage,
    type ReviewCreateParams as ReviewCreateParams,
    type ReviewListParams as ReviewListParams,
    type ReviewDeleteParams as ReviewDeleteParams,
    type ReviewUnvoteParams as ReviewUnvoteParams,
    type ReviewVoteParams as ReviewVoteParams,
  };
}
