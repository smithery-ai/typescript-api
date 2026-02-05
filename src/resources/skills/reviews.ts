// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, ReviewsPage, type ReviewsPageParams } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Reviews extends APIResource {
  /**
   * Submit a review for a skill. Updates existing review if one already exists.
   */
  create(
    slug: string,
    params: ReviewCreateParams,
    options?: RequestOptions,
  ): APIPromise<CreateReviewResponse> {
    const { namespace, ...body } = params;
    return this._client.post(path`/skills/${namespace}/${slug}/reviews`, { body, ...options });
  }

  /**
   * Get paginated list of reviews with vote counts
   */
  list(
    slug: string,
    params: ReviewListParams,
    options?: RequestOptions,
  ): PagePromise<ReviewItemsReviewsPage, ReviewItem> {
    const { namespace, ...query } = params;
    return this._client.getAPIList(path`/skills/${namespace}/${slug}/reviews`, ReviewsPage<ReviewItem>, {
      query,
      ...options,
    });
  }

  /**
   * Delete your review
   */
  delete(slug: string, params: ReviewDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { namespace } = params;
    return this._client.delete(path`/skills/${namespace}/${slug}/reviews`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Remove vote from a review
   */
  unvote(reviewID: string, params: ReviewUnvoteParams, options?: RequestOptions): APIPromise<void> {
    const { namespace, slug } = params;
    return this._client.delete(path`/skills/${namespace}/${slug}/reviews/${reviewID}/vote`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Upvote or downvote a review. Updates existing vote if one exists.
   */
  vote(reviewID: string, params: ReviewVoteParams, options?: RequestOptions): APIPromise<ReviewVoteResponse> {
    const { namespace, slug, ...body } = params;
    return this._client.post(path`/skills/${namespace}/${slug}/reviews/${reviewID}/vote`, {
      body,
      ...options,
    });
  }
}

export type ReviewItemsReviewsPage = ReviewsPage<ReviewItem>;

export interface CreateReviewRequest {
  /**
   * Review text (required)
   */
  review: string;

  /**
   * Optional agent model name (e.g., 'claude-3.5-sonnet')
   */
  agentModel?: string;

  /**
   * Optional vote direction to submit with review
   */
  vote?: 'up' | 'down';
}

export interface CreateReviewResponse {
  /**
   * Review ID
   */
  id: string;

  /**
   * ISO 8601 timestamp
   */
  createdAt: string;

  review: string;

  /**
   * Vote direction if submitted with review
   */
  vote: 'up' | 'down' | null;
}

export interface ReviewError {
  error: string;
}

export interface ReviewItem {
  id: string;

  agentClient: string | null;

  agentModel: string | null;

  /**
   * ISO 8601 timestamp
   */
  createdAt: string;

  downvotes: number;

  review: string;

  upvotes: number;
}

export interface ReviewVoteRequest {
  /**
   * Vote direction
   */
  vote: 'up' | 'down';
}

export interface ReviewVoteResponse {
  createdAt: string;

  /**
   * Vote direction
   */
  vote: 'up' | 'down';
}

export interface ReviewsListResponse {
  pagination: ReviewsListResponse.Pagination;

  reviews: Array<ReviewItem>;
}

export namespace ReviewsListResponse {
  export interface Pagination {
    currentPage: number;

    pageSize: number;

    totalCount: number;

    totalPages: number;
  }
}

export interface ReviewCreateParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param: Review text (required)
   */
  review: string;

  /**
   * Body param: Optional agent model name (e.g., 'claude-3.5-sonnet')
   */
  agentModel?: string;

  /**
   * Body param: Optional vote direction to submit with review
   */
  vote?: 'up' | 'down';
}

export interface ReviewListParams extends ReviewsPageParams {
  /**
   * Path param
   */
  namespace: string;
}

export interface ReviewDeleteParams {
  namespace: string;
}

export interface ReviewUnvoteParams {
  namespace: string;

  slug: string;
}

export interface ReviewVoteParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Path param
   */
  slug: string;

  /**
   * Body param: Vote direction
   */
  vote: 'up' | 'down';
}

export declare namespace Reviews {
  export {
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
