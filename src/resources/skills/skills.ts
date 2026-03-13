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
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

/**
 * Discover and search reusable prompt-based skills for MCP servers
 */
export class Skills extends APIResource {
  votes: VotesAPI.Votes = new VotesAPI.Votes(this._client);
  reviews: ReviewsAPI.Reviews = new ReviewsAPI.Reviews(this._client);

  /**
   * **Deprecated:** Use PUT /skills/{namespace}/{slug} instead. Create a new skill
   * by linking a GitHub repository containing a SKILL.md file.
   *
   * @deprecated
   */
  create(body: SkillCreateParams, options?: RequestOptions): APIPromise<SkillCreateResponse> {
    return this._client.post('/skills', { body, ...options });
  }

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
   * Delete a skill by namespace and slug. Requires ownership of the namespace.
   */
  delete(slug: string, params: SkillDeleteParams, options?: RequestOptions): APIPromise<SkillDeleteResponse> {
    const { namespace } = params;
    return this._client.delete(path`/skills/${namespace}/${slug}`, options);
  }

  /**
   * Download a ZIP bundle containing all skill files.
   */
  download(slug: string, params: SkillDownloadParams, options?: RequestOptions): APIPromise<Response> {
    const { namespace } = params;
    return this._client.get(path`/skills/${namespace}/${slug}/download`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/zip' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Get a single skill by its namespace and slug.
   */
  get(slug: string, params: SkillGetParams, options?: RequestOptions): APIPromise<SkillGetResponse> {
    const { namespace } = params;
    return this._client.get(path`/skills/${namespace}/${slug}`, options);
  }

  /**
   * Idempotent endpoint to create or update a GitHub-backed skill. Send
   * application/json with `gitUrl`.
   */
  set(slug: string, params: SkillSetParams, options?: RequestOptions): APIPromise<SkillSetResponse> {
    const { namespace, body } = params;
    return this._client.put(path`/skills/${namespace}/${slug}`, { body: body, ...options });
  }

  /**
   * **Deprecated:** Use PUT /skills/{namespace}/{slug} instead. Refetch SKILL.md and
   * repository stars from GitHub and update the skill record.
   *
   * @deprecated
   */
  sync(slug: string, params: SkillSyncParams, options?: RequestOptions): APIPromise<SkillSyncResponse> {
    const { namespace } = params;
    return this._client.post(path`/skills/${namespace}/${slug}/sync`, options);
  }

  /**
   * Upload or replace a skill bundle via multipart/form-data with an `archive` file.
   */
  upload(slug: string, params: SkillUploadParams, options?: RequestOptions): APIPromise<SkillUploadResponse> {
    const { namespace, ...body } = params;
    return this._client.put(
      path`/skills/${namespace}/${slug}/upload`,
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

export type SkillListResponsesSkillsPage = SkillsPage<SkillListResponse>;

export interface SkillCreateResponse {
  id: string;

  createdAt: string;

  description: string;

  displayName: string;

  gitUrl: string;

  listed: boolean;

  namespace: string;

  slug: string;
}

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
   * Whether this skill's namespace is verified.
   */
  verified: boolean;

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
  gitUrl?: string | null;

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

export interface SkillDeleteResponse {
  qualifiedName: string;

  success: boolean;
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

  gitUrl: string | null;

  listed: boolean;

  namespace: string;

  /**
   * User ID of the skill owner (from namespace)
   */
  owner: string | null;

  prompt: string;

  qualityScore: number;

  reviewCount: number;

  servers: Array<string>;

  slug: string;

  totalActivations: number;

  uniqueUsers: number;

  upvotes: number;

  /**
   * Whether this skill's namespace is verified.
   */
  verified: boolean;
}

export interface SkillSetResponse {
  id: string;

  createdAt: string;

  description: string;

  displayName: string;

  externalStars: number;

  gitUrl: string | null;

  listed: boolean;

  namespace: string;

  slug: string;

  updatedAt: string;
}

export interface SkillSyncResponse {
  id: string;

  description: string;

  displayName: string;

  externalStars: number;

  gitUrl: string;

  namespace: string;

  slug: string;

  updatedAt: string;
}

export interface SkillUploadResponse {
  id: string;

  createdAt: string;

  description: string;

  displayName: string;

  externalStars: number;

  gitUrl: string | null;

  listed: boolean;

  namespace: string;

  slug: string;

  updatedAt: string;
}

export interface SkillCreateParams {
  /**
   * GitHub URL pointing to a repository with SKILL.md
   */
  gitUrl: string;

  /**
   * The namespace to create the skill in.
   */
  namespace: string;

  /**
   * URL-friendly identifier for the skill.
   */
  slug: string;
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

  /**
   * Filter by whether the skill's namespace is verified.
   */
  verified?: boolean;
}

export interface SkillDeleteParams {
  namespace: string;
}

export interface SkillDownloadParams {
  namespace: string;
}

export interface SkillGetParams {
  namespace: string;
}

export interface SkillSetParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param
   */
  body: unknown;
}

export interface SkillSyncParams {
  namespace: string;
}

export interface SkillUploadParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param: ZIP file upload containing a skill folder with SKILL.md and any
   * scripts, references, or assets.
   */
  archive: Uploadable;
}

Skills.Votes = Votes;
Skills.Reviews = Reviews;

export declare namespace Skills {
  export {
    type SkillCreateResponse as SkillCreateResponse,
    type SkillListResponse as SkillListResponse,
    type SkillDeleteResponse as SkillDeleteResponse,
    type SkillGetResponse as SkillGetResponse,
    type SkillSetResponse as SkillSetResponse,
    type SkillSyncResponse as SkillSyncResponse,
    type SkillUploadResponse as SkillUploadResponse,
    type SkillListResponsesSkillsPage as SkillListResponsesSkillsPage,
    type SkillCreateParams as SkillCreateParams,
    type SkillListParams as SkillListParams,
    type SkillDeleteParams as SkillDeleteParams,
    type SkillDownloadParams as SkillDownloadParams,
    type SkillGetParams as SkillGetParams,
    type SkillSetParams as SkillSetParams,
    type SkillSyncParams as SkillSyncParams,
    type SkillUploadParams as SkillUploadParams,
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
