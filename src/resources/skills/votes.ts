// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Votes extends APIResource {
  /**
   * Upvote or downvote a skill. Updates existing vote if one exists.
   */
  create(slug: string, params: VoteCreateParams, options?: RequestOptions): APIPromise<SkillVoteResponse> {
    const { namespace, ...body } = params;
    return this._client.post(path`/skills/${namespace}/${slug}/vote`, { body, ...options });
  }

  /**
   * Remove vote from a skill
   */
  delete(slug: string, params: VoteDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { namespace } = params;
    return this._client.delete(path`/skills/${namespace}/${slug}/vote`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get upvote/downvote counts and current user's vote (if authenticated)
   */
  get(slug: string, params: VoteGetParams, options?: RequestOptions): APIPromise<SkillVoteCounts> {
    const { namespace } = params;
    return this._client.get(path`/skills/${namespace}/${slug}/vote`, options);
  }
}

export interface SkillVoteCounts {
  downvotes: number;

  upvotes: number;

  /**
   * Current user's vote, null if not voted
   */
  userVote: 'up' | 'down' | null;
}

export interface SkillVoteError {
  error: string;
}

export interface SkillVoteRequest {
  /**
   * Vote direction
   */
  vote: 'up' | 'down';
}

export interface SkillVoteResponse {
  createdAt: string;

  /**
   * Vote direction
   */
  vote: 'up' | 'down';
}

export interface VoteCreateParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param: Vote direction
   */
  vote: 'up' | 'down';
}

export interface VoteDeleteParams {
  namespace: string;
}

export interface VoteGetParams {
  namespace: string;
}

export declare namespace Votes {
  export {
    type SkillVoteCounts as SkillVoteCounts,
    type SkillVoteError as SkillVoteError,
    type SkillVoteRequest as SkillVoteRequest,
    type SkillVoteResponse as SkillVoteResponse,
    type VoteCreateParams as VoteCreateParams,
    type VoteDeleteParams as VoteDeleteParams,
    type VoteGetParams as VoteGetParams,
  };
}
