// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class Namespaces extends APIResource {}

export interface Namespace {
  /**
   * ISO 8601 timestamp
   */
  createdAt: string;

  /**
   * Namespace name (also the unique ID)
   */
  name: string;

  /**
   * ISO 8601 timestamp
   */
  updatedAt?: string;
}

export declare namespace Namespaces {
  export { type Namespace as Namespace };
}
