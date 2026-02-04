// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, ReviewsPage, type ReviewsPageParams } from '../../core/pagination';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Reviews extends APIResource {
  /**
   * Submit a review for a skill after using it. Updates existing review if one
   * already exists.
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
   * Get paginated list of reviews for a skill with summary statistics
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
   * Delete your own review for a skill
   */
  delete(slug: string, params: ReviewDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { namespace } = params;
    return this._client.delete(path`/skills/${namespace}/${slug}/reviews`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type ReviewItemsReviewsPage = ReviewsPage<ReviewItem>;

export interface CreateReviewRequest {
  /**
   * Rating from 1 to 5 stars
   */
  rating: number;

  /**
   * Optional agent model name (e.g., 'claude-3.5-sonnet')
   */
  agentModel?: string;

  /**
   * Optional review comment
   */
  comment?: string;
}

export interface CreateReviewResponse {
  /**
   * Review ID
   */
  id: string;

  comment: string | null;

  /**
   * ISO 8601 timestamp
   */
  createdAt: string;

  rating: number;
}

export interface ReviewItem {
  id: string;

  agentClient: string | null;

  agentModel: string | null;

  comment: string | null;

  /**
   * ISO 8601 timestamp
   */
  createdAt: string;

  rating: number;
}

export interface ReviewsListResponse {
  pagination: ReviewsListResponse.Pagination;

  reviews: Array<ReviewItem>;

  summary: ReviewsListResponse.Summary;
}

export namespace ReviewsListResponse {
  export interface Pagination {
    /**
     * Current page number (1-indexed)
     */
    currentPage: number;

    /**
     * Number of results per page
     */
    pageSize: number;

    /**
     * Total number of matching reviews
     */
    totalCount: number;

    /**
     * Total number of pages available
     */
    totalPages: number;
  }

  export interface Summary {
    /**
     * Average rating across all reviews
     */
    averageRating: number;

    /**
     * Total number of reviews
     */
    totalReviews: number;
  }
}

export interface ReviewCreateParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param: Rating from 1 to 5 stars
   */
  rating: number;

  /**
   * Body param: Optional agent model name (e.g., 'claude-3.5-sonnet')
   */
  agentModel?: string;

  /**
   * Body param: Optional review comment
   */
  comment?: string;
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

export declare namespace Reviews {
  export {
    type CreateReviewRequest as CreateReviewRequest,
    type CreateReviewResponse as CreateReviewResponse,
    type ReviewItem as ReviewItem,
    type ReviewsListResponse as ReviewsListResponse,
    type ReviewItemsReviewsPage as ReviewItemsReviewsPage,
    type ReviewCreateParams as ReviewCreateParams,
    type ReviewListParams as ReviewListParams,
    type ReviewDeleteParams as ReviewDeleteParams,
  };
}
