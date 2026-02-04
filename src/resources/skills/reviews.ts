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
