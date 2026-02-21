// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Icon extends APIResource {
  /**
   * Remove the server's icon.
   *
   * @example
   * ```ts
   * const icon = await client.servers.icon.delete(
   *   'qualifiedName',
   * );
   * ```
   */
  delete(qualifiedName: string, options?: RequestOptions): APIPromise<IconDeleteResponse> {
    return this._client.delete(path`/servers/${qualifiedName}/icon`, options);
  }

  /**
   * Retrieve the server's icon image. Returns the image directly with appropriate
   * content type.
   *
   * @example
   * ```ts
   * const icon = await client.servers.icon.get('qualifiedName');
   *
   * const content = await icon.blob();
   * console.log(content);
   * ```
   */
  get(qualifiedName: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/servers/${qualifiedName}/icon`, {
      ...options,
      headers: buildHeaders([{ Accept: 'image/*' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Upload or replace the server icon. Accepts a single image file via
   * multipart/form-data. Max 1MB. Supported formats: PNG, JPEG, GIF, SVG, WebP.
   *
   * @example
   * ```ts
   * const response = await client.servers.icon.upload(
   *   'qualifiedName',
   * );
   * ```
   */
  upload(qualifiedName: string, options?: RequestOptions): APIPromise<IconUploadResponse> {
    return this._client.put(path`/servers/${qualifiedName}/icon`, options);
  }
}

export interface IconDeleteResponse {
  success: boolean;
}

export interface IconUploadResponse {
  iconUrl: string;
}

export declare namespace Icon {
  export { type IconDeleteResponse as IconDeleteResponse, type IconUploadResponse as IconUploadResponse };
}
