/* eslint-disable @typescript-eslint/no-unsafe-return */

import { getAxiosIPFSInstance } from '../config/axios';

import {
  UploadFileParams,
  UploadFileResponse,
  UploadMetadataParams,
  UploadMetadataResponse,
} from '../interfaces';

const PATH_IPFS = 'ipfs/v2/';

/**
 * Deploy Smart Contract
 * @param {UploadFileParams} params - Object with properties:
 * - filename: string
 * - file: File
 * @returns {Promise<UploadFileResponse>} - Object with property:
 * - url: string
 */
export const uploadFile = async (
  params: UploadFileParams
): Promise<UploadFileResponse> => {
  const url = `${PATH_IPFS}/file/upload`;
  const response = await getAxiosIPFSInstance().post(url, params);
  return response.data;
};

/**
 * Upload metadata to IPFS.
 * @param {UploadMetadataParams} params - Object with properties:
 * - name: string
 * - image: string
 * - description: string
 * - edition?: string
 * - external_url?: string
 * - animation_url?: string
 * - attributes?: MetadataAttributes[]
 * - data?: Record<string, unknown>
 * @returns {Promise<UploadMetadataResponse>} - Object with properties:
 * - ipfsHash: string
 * - pinSize: number
 * - timestamp: string
 */
export const uploadMetadata = async (
  params: UploadMetadataParams
): Promise<UploadMetadataResponse> => {
  const url = `${PATH_IPFS}/file/metadata`;
  const response = await getAxiosIPFSInstance().post(url, params);
  return response.data;
};
