// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as SubscriptionsAPI from '../subscriptions';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Create a connection-scoped subscription that receives events from one
   * connection.
   *
   * @example
   * ```ts
   * const createSubscriptionResponse =
   *   await client.connections.subscriptions.create(
   *     'connectionId',
   *     {
   *       namespace: 'namespace',
   *       url: 'https://my-app.example.com/events',
   *     },
   *   );
   * ```
   */
  create(
    connectionID: string,
    params: SubscriptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionsAPI.CreateSubscriptionResponse> {
    const { namespace, ...body } = params;
    return this._client.post(path`/${namespace}/${connectionID}/.subscriptions`, {
      body,
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
  }

  /**
   * List trigger subscriptions scoped to a single connection.
   *
   * @example
   * ```ts
   * const subscriptionList =
   *   await client.connections.subscriptions.list(
   *     'connectionId',
   *     { namespace: 'namespace' },
   *   );
   * ```
   */
  list(
    connectionID: string,
    params: SubscriptionListParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionsAPI.SubscriptionList> {
    const { namespace } = params;
    return this._client.get(path`/${namespace}/${connectionID}/.subscriptions`, {
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
  }

  /**
   * Delete a connection-scoped trigger subscription.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.connections.subscriptions.delete(
   *     'subscriptionId',
   *     {
   *       namespace: 'namespace',
   *       connectionId: 'connectionId',
   *     },
   *   );
   * ```
   */
  delete(
    subscriptionID: string,
    params: SubscriptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionDeleteResponse> {
    const { namespace, connectionId } = params;
    return this._client.delete(path`/${namespace}/${connectionId}/.subscriptions/${subscriptionID}`, {
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
  }
}

export interface SubscriptionDeleteResponse {
  success: true;
}

export interface SubscriptionCreateParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Body param: HTTPS webhook destination
   */
  url: string;
}

export interface SubscriptionListParams {
  namespace: string;
}

export interface SubscriptionDeleteParams {
  namespace: string;

  connectionId: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionListParams as SubscriptionListParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
