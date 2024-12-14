import axios, { AxiosInstance } from 'axios';
import { getCredentials, API_BASE_URL, API_BASE_IPFS_URL } from './settings';

let axiosInstance: AxiosInstance | null = null;
let axiosIPFSInstance: AxiosInstance | null = null;

/**
 * Create or retrieve an Axios instance configured with the SDK credentials.
 * @returns {AxiosInstance} - The configured Axios instance.
 */
export const getAxiosInstance = (): AxiosInstance => {
  if (!axiosInstance) {
    const { appId, apiKey } = getCredentials(); // Will throw if not initialized
    axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'x-application-vkn': appId,
      },
    });
  }
  return axiosInstance;
};

/**
 * Create or retrieve an Axios IPFS instance configured with the SDK credentials.
 * @returns {AxiosInstance} - The configured Axios IPFS instance.
 */
export const getAxiosIPFSInstance = (): AxiosInstance => {
  if (!axiosIPFSInstance) {
    const { appId, apiKey } = getCredentials(); // Will throw if not initialized
    axiosIPFSInstance = axios.create({
      baseURL: API_BASE_IPFS_URL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
        'x-application-vkn': appId,
      },
    });
  }
  return axiosIPFSInstance;
};
