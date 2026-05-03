// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Triggers extends APIResource {
  /**
   * List trigger types exposed by a connection.
   *
   * @example
   * ```ts
   * const triggerDefinitionList =
   *   await client.connections.triggers.list('connectionId', {
   *     namespace: 'namespace',
   *   });
   * ```
   */
  list(
    connectionID: string,
    params: TriggerListParams,
    options?: RequestOptions,
  ): APIPromise<TriggerDefinitionList> {
    const { namespace } = params;
    return this._client.get(path`/${namespace}/${connectionID}/.triggers`, {
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
  }

  /**
   * Get the schema for a single trigger type.
   *
   * @example
   * ```ts
   * const triggerDefinition =
   *   await client.connections.triggers.get('triggerName', {
   *     namespace: 'namespace',
   *     connectionId: 'connectionId',
   *   });
   * ```
   */
  get(
    triggerName: string,
    params: TriggerGetParams,
    options?: RequestOptions,
  ): APIPromise<TriggerDefinition> {
    const { namespace, connectionId } = params;
    return this._client.get(path`/${namespace}/${connectionId}/.triggers/${triggerName}`, {
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
  }

  /**
   * Subscribe to (or refresh) a trigger. Supplying the same (params, delivery.url)
   * refreshes the TTL and may rotate the secret.
   *
   * @example
   * ```ts
   * const triggerSubscription =
   *   await client.connections.triggers.subscribe(
   *     'triggerName',
   *     {
   *       namespace: 'namespace',
   *       connectionId: 'connectionId',
   *       delivery: {
   *         secret:
   *           'whsec_dGVzdF9zZWNyZXRfMjRfYnl0ZXNfbWluaW11bSE=',
   *         url: 'https://my-app.example.com/events',
   *       },
   *       params: { foo: 'bar' },
   *     },
   *   );
   * ```
   */
  subscribe(
    triggerName: string,
    params: TriggerSubscribeParams,
    options?: RequestOptions,
  ): APIPromise<TriggerSubscription> {
    const { namespace, connectionId, ...body } = params;
    return this._client.post(path`/${namespace}/${connectionId}/.triggers/${triggerName}`, {
      body,
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
  }

  /**
   * Unsubscribe by subscription key (params + delivery.url). Eager teardown —
   * subscriptions also expire naturally on TTL.
   *
   * @example
   * ```ts
   * const response =
   *   await client.connections.triggers.unsubscribe(
   *     'triggerName',
   *     {
   *       namespace: 'namespace',
   *       connectionId: 'connectionId',
   *       delivery: {
   *         url: 'https://my-app.example.com/events',
   *       },
   *       params: { foo: 'bar' },
   *     },
   *   );
   * ```
   */
  unsubscribe(
    triggerName: string,
    params: TriggerUnsubscribeParams,
    options?: RequestOptions,
  ): APIPromise<TriggerUnsubscribeResponse> {
    const { namespace, connectionId, ...body } = params;
    return this._client.delete(path`/${namespace}/${connectionId}/.triggers/${triggerName}`, {
      body,
      defaultBaseURL: 'https://smithery.run',
      ...options,
    });
  }
}

export interface CreateTriggerRequest {
  delivery: TriggerDelivery;

  /**
   * Trigger-specific parameters defined by the trigger inputSchema
   */
  params: { [key: string]: unknown };
}

export interface DeleteTriggerRequest {
  delivery: UnsubscribeDelivery;

  /**
   * The same params used at subscribe time. Forms part of the subscription key.
   */
  params: { [key: string]: unknown };
}

export interface TriggerDefinition {
  /**
   * Supported delivery modes
   */
  delivery: Array<string>;

  /**
   * Trigger name exposed by the MCP server
   */
  name: string;

  description?: string;

  /**
   * JSON Schema for the params required to create the trigger
   */
  inputSchema?: { [key: string]: unknown };

  /**
   * JSON Schema for the event payload delivered by the trigger
   */
  payloadSchema?: { [key: string]: unknown };
}

export type TriggerDefinitionList = Array<TriggerDefinition>;

export interface TriggerDelivery {
  /**
   * Standard Webhooks signing secret (whsec\_<base64 of 24-64 random bytes>). The
   * upstream MCP server signs each delivery with this.
   */
  secret: string;

  /**
   * HTTPS webhook destination where the upstream MCP server delivers events.
   */
  url: string;
}

export interface TriggerSubscription {
  /**
   * Stable subscription id derived from (namespace, connection, name, params,
   * delivery.url). Used by the receiver to route via X-MCP-Subscription-Id.
   */
  id: string;

  /**
   * ISO 8601 timestamp at which the subscription expires unless refreshed.
   */
  refreshBefore: string;
}

export interface UnsubscribeDelivery {
  /**
   * The delivery URL of the subscription to remove. Together with name+params it
   * forms the subscription key.
   */
  url: string;
}

export interface TriggerUnsubscribeResponse {
  success: true;
}

export interface TriggerListParams {
  namespace: string;
}

export interface TriggerGetParams {
  namespace: string;

  connectionId: string;
}

export interface TriggerSubscribeParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Path param
   */
  connectionId: string;

  /**
   * Body param
   */
  delivery: TriggerDelivery;

  /**
   * Body param: Trigger-specific parameters defined by the trigger inputSchema
   */
  params: { [key: string]: unknown };
}

export interface TriggerUnsubscribeParams {
  /**
   * Path param
   */
  namespace: string;

  /**
   * Path param
   */
  connectionId: string;

  /**
   * Body param
   */
  delivery: UnsubscribeDelivery;

  /**
   * Body param: The same params used at subscribe time. Forms part of the
   * subscription key.
   */
  params: { [key: string]: unknown };
}

export declare namespace Triggers {
  export {
    type CreateTriggerRequest as CreateTriggerRequest,
    type DeleteTriggerRequest as DeleteTriggerRequest,
    type TriggerDefinition as TriggerDefinition,
    type TriggerDefinitionList as TriggerDefinitionList,
    type TriggerDelivery as TriggerDelivery,
    type TriggerSubscription as TriggerSubscription,
    type UnsubscribeDelivery as UnsubscribeDelivery,
    type TriggerUnsubscribeResponse as TriggerUnsubscribeResponse,
    type TriggerListParams as TriggerListParams,
    type TriggerGetParams as TriggerGetParams,
    type TriggerSubscribeParams as TriggerSubscribeParams,
    type TriggerUnsubscribeParams as TriggerUnsubscribeParams,
  };
}
