/* eslint-disable @typescript-eslint/no-unsafe-return */

import { API_VERSION } from '../config/settings';
import { getAxiosInstance } from '../config/axios';
import {
  DeployERC721Params,
  DeployERC721Response,
  GetBalanceOfERC721Params,
  GetBalanceOfERC721Response,
  GetOwnerOfERC721Params,
  GetOwnerOfERC721Response,
  GetTokenUriERC721Params,
  GetTokenUriERC721Response,
  MintERC721Params,
  MintERC721Response,
  TransferERC721Params,
  TransferERC721Response,
} from '../interfaces';

const ERC721_API_PATH = `/erc/${API_VERSION}/erc721`;

/**
 * Deploy an ERC721 token.
 * @param {DeployERC721Params} params - Object with properties:
 * - name: string - The name of the token.
 * - symbol: string - The symbol of the token.
 * - network: number - The ID of the network where to deploy the contract.
 * - gasLimit?: number - The gas limit for the deployment transaction (optional).
 * - alias?: string - The alias name of the contract.
 * @returns {Promise<DeployERC721Response>} - Object containing:
 * - contractAddress: string - The address of the deployed contract.
 * - txHash: string - The hash of the deployment transaction.
 */
export const deployERC721 = async (
  params: DeployERC721Params
): Promise<DeployERC721Response> => {
  const url = `${ERC721_API_PATH}/deploy`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Mint an ERC721 token.
 * @param {MintERC721Params} params - Object with properties:
 * - recipientAddress: string - The address of the recipient.
 * - tokenId: number - The ID of the token to mint.
 * - ipfsUri: string - The IPFS URI of the token.
 * - ipfsHash: string - The IPFS hash of the token.
 * - network: number - The ID of the network where to mint the token.
 * - contractAddress: string - The address of the ERC721 contract.
 * - royaltyPercentage?: number - The percentage of the token price that will be sent to the contract owner.
 * - gasLimit?: number - The gas limit for the minting transaction (optional).
 * @returns {Promise<MintERC721Response>} - Object containing:
 * - txHash: string - The hash of the minting transaction.
 * - nonce: number - The transaction nonce.
 */
export const mintERC721 = async (
  params: MintERC721Params
): Promise<MintERC721Response> => {
  const url = `${ERC721_API_PATH}/mint`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Transfer an ERC721 token.
 * @param {TransferERC721Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC721 contract.
 * - network: number - The ID of the network where to transfer the token.
 * - id: number - The ID of the token to transfer.
 * - from: string - The address of the sender.
 * - to: string - The address of the recipient.
 * @returns {Promise<TransferERC721Response>} - Object containing:
 * - txHash: string - The hash of the transfer transaction.
 * - nonce: number - The transaction nonce.
 */
export const transferERC721 = async (
  params: TransferERC721Params
): Promise<TransferERC721Response> => {
  const url = `${ERC721_API_PATH}/transfer`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the balance of an ERC721 token for a specific address.
 * @param {GetBalanceOfERC721Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC721 contract.
 * - network: number - The network ID for the transaction.
 * - address: string - The address to query the balance for.
 * @returns {Promise<GetBalanceOfERC721Response>} - Object containing:
 * - balance: number - The balance of ERC721 tokens for the specified address.
 */
export const getBalanceOfERC721 = async (
  params: GetBalanceOfERC721Params
): Promise<GetBalanceOfERC721Response> => {
  const url = `${ERC721_API_PATH}/balanceOf`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the URI of an ERC721 token.
 * @param {GetTokenUriERC721Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC721 contract.
 * - network: number - The ID of the network where to get the token URI.
 * - id: number - The ID of the token to get the URI for.
 * @returns {Promise<GetTokenUriERC721Response>} - Object containing:
 * - uri: string - The URI of the ERC721 token.
 */
export const getTokenUriERC721 = async (
  params: GetTokenUriERC721Params
): Promise<GetTokenUriERC721Response> => {
  const url = `${ERC721_API_PATH}/tokenUri`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the owner of an ERC721 token.
 * @param {GetOwnerOfERC721Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC721 contract.
 * - network: number - The ID of the network where to query the owner.
 * - id: number - The ID of the token to get the owner for.
 * @returns {Promise<GetOwnerOfERC721Response>} - Object containing:
 * - owner: string - The address of the owner of the ERC721 token.
 */
export const getOwnerOfERC721 = async (
  params: GetOwnerOfERC721Params
): Promise<GetOwnerOfERC721Response> => {
  const url = `${ERC721_API_PATH}/ownerOf`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};
