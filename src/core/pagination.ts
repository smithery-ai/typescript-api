// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { SmitheryError } from './error';
import { FinalRequestOptions } from '../internal/request-options';
import { defaultParseResponse } from '../internal/parse';
import { type Smithery } from '../client';
import { APIPromise } from './api-promise';
import { type APIResponseProps } from '../internal/parse';
import { maybeObj } from '../internal/utils/values';

export type PageRequestOptions = Pick<FinalRequestOptions, 'query' | 'headers' | 'body' | 'path' | 'method'>;

export abstract class AbstractPage<Item> implements AsyncIterable<Item> {
  #client: Smithery;
  protected options: FinalRequestOptions;

  protected response: Response;
  protected body: unknown;

  constructor(client: Smithery, response: Response, body: unknown, options: FinalRequestOptions) {
    this.#client = client;
    this.options = options;
    this.response = response;
    this.body = body;
  }

  abstract nextPageRequestOptions(): PageRequestOptions | null;

  abstract getPaginatedItems(): Item[];

  hasNextPage(): boolean {
    const items = this.getPaginatedItems();
    if (!items.length) return false;
    return this.nextPageRequestOptions() != null;
  }

  async getNextPage(): Promise<this> {
    const nextOptions = this.nextPageRequestOptions();
    if (!nextOptions) {
      throw new SmitheryError(
        'No next page expected; please check `.hasNextPage()` before calling `.getNextPage()`.',
      );
    }

    return await this.#client.requestAPIList(this.constructor as any, nextOptions);
  }

  async *iterPages(): AsyncGenerator<this> {
    let page: this = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }

  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
}

/**
 * This subclass of Promise will resolve to an instantiated Page once the request completes.
 *
 * It also implements AsyncIterable to allow auto-paginating iteration on an unawaited list call, eg:
 *
 *    for await (const item of client.items.list()) {
 *      console.log(item)
 *    }
 */
export class PagePromise<
    PageClass extends AbstractPage<Item>,
    Item = ReturnType<PageClass['getPaginatedItems']>[number],
  >
  extends APIPromise<PageClass>
  implements AsyncIterable<Item>
{
  constructor(
    client: Smithery,
    request: Promise<APIResponseProps>,
    Page: new (...args: ConstructorParameters<typeof AbstractPage>) => PageClass,
  ) {
    super(
      client,
      request,
      async (client, props) =>
        new Page(client, props.response, await defaultParseResponse(client, props), props.options),
    );
  }

  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator](): AsyncGenerator<Item> {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
}

export interface SmitheryPageResponse<Item> {
  servers: Array<Item>;

  'pagination.currentPage': number;

  'pagination.totalPages': number;

  'pagination.totalCount': number;
}

export interface SmitheryPageParams {
  page?: number;

  pageSize?: number;
}

export class SmitheryPage<Item> extends AbstractPage<Item> implements SmitheryPageResponse<Item> {
  servers: Array<Item>;

  'pagination.currentPage': number;

  'pagination.totalPages': number;

  'pagination.totalCount': number;

  constructor(
    client: Smithery,
    response: Response,
    body: SmitheryPageResponse<Item>,
    options: FinalRequestOptions,
  ) {
    super(client, response, body, options);

    this.servers = body.servers || [];
    this.pagination.currentPage = body.pagination.currentPage || 0;
    this.pagination.totalPages = body.pagination.totalPages || 0;
    this.pagination.totalCount = body.pagination.totalCount || 0;
  }

  getPaginatedItems(): Item[] {
    return this.servers ?? [];
  }

  nextPageRequestOptions(): PageRequestOptions | null {
    const query = this.options.query as SmitheryPageParams;
    const currentPage = query?.page ?? 1;

    return {
      ...this.options,
      query: {
        ...maybeObj(this.options.query),
        page: currentPage + 1,
      },
    };
  }
}
