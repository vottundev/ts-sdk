/* eslint-disable @typescript-eslint/no-unsafe-return */

import { API_VERSION } from '../config/settings';
import { getAxiosInstance } from '../config/axios';
import {
  DeployERC1155Params,
  DeployERC1155Response,
  GetBalanceOfERC1155Params,
  GetBalanceOfERC1155Response,
  GetTokenUriERC1155Params,
  GetTokenUriERC1155Response,
  MintERC1155Params,
  MintERC1155Response,
  TransferBatchERC1155Params,
  TransferBatchERC1155Response,
  TransferERC1155Params,
  TransferERC1155Response,
} from '../interfaces';

const ERC1155_API_PATH = `/erc/${API_VERSION}/erc1155`;

/**
 * Deploy an ERC1155 token.
 * @param {DeployERC1155Params} params - Object with properties:
 * - name: string - The name of the token.
 * - symbol: string - The symbol of the token.
 * - ipfsUri: string - The IPFS URI of the token.
 * - royaltyRecipient: string - The address of the recipient of any royalties paid out by the token.
 * - royaltyValue: number - The percentage of the token price that will be sent to the contract owner.
 * - network: number - The ID of the network where to deploy the contract.
 * - gasLimit?: number - The gas limit for the deployment transaction (optional).
 * - alias: string - The alias name of the contract.
 * @returns {Promise<DeployERC1155Response>} - Object containing:
 * - contractAddress: string - The address of the deployed contract.
 * - txHash: string - The hash of the deployment transaction.
 */
export const deployERC1155 = async (
  params: DeployERC1155Params
): Promise<DeployERC1155Response> => {
  const url = `${ERC1155_API_PATH}/deploy`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Mint an ERC1155 token.
 * @param {MintERC1155Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC1155 contract.
 * - network: number - The ID of the network where to mint the token.
 * - to: string - The address of the recipient of the minted token.
 * - id: number - The ID of the token to mint.
 * - amount: number - The amount of tokens to mint.
 * @returns {Promise<MintERC1155Response>} - Object containing:
 * - txHash: string - The hash of the minting transaction.
 * - nonce: number - The transaction nonce.
 */
export const mintERC1155 = async (
  params: MintERC1155Params
): Promise<MintERC1155Response> => {
  const url = `${ERC1155_API_PATH}/mint`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Mint a batch of ERC1155 tokens.
 * @param {MintERC1155Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC1155 contract.
 * - network: number - The ID of the network where to mint the tokens.
 * - to: string - The address of the recipient of the minted tokens.
 * - ids: number[] - The IDs of the tokens to mint.
 * - amounts: number[] - The amounts of tokens to mint.
 * @returns {Promise<MintERC1155Response>} - Object containing:
 * - txHash: string - The hash of the minting transaction.
 * - nonce: number - The transaction nonce.
 */
export const mintBatchERC1155 = async (
  params: MintERC1155Params
): Promise<MintERC1155Response> => {
  const url = `${ERC1155_API_PATH}/mintbatch`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Transfer an ERC1155 token.
 * @param {TransferERC1155Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC1155 contract.
 * - network: number - The ID of the network where to transfer the token.
 * - to: string - The address of the recipient.
 * - amount: number - The amount of tokens to transfer.
 * - id: number - The ID of the token to transfer.
 * @returns {Promise<TransferERC1155Response>} - Object containing:
 * - txHash: string - The hash of the transfer transaction.
 * - nonce: number - The transaction nonce.
 */
export const transferERC1155 = async (
  params: TransferERC1155Params
): Promise<TransferERC1155Response> => {
  const url = `${ERC1155_API_PATH}/transfer`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Transfer a batch of ERC1155 tokens.
 * @param {TransferBatchERC1155Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC1155 contract.
 * - network: number - The ID of the network where to transfer the tokens.
 * - to: string - The address of the recipient.
 * - amounts: number[] - The amounts of each token to transfer.
 * - ids: number[] - The IDs of the tokens to transfer.
 * @returns {Promise<TransferBatchERC1155Response>} - Object containing:
 * - txHash: string - The hash of the transfer transaction.
 * - nonce: number - The transaction nonce.
 */
export const transferBatchERC1155 = async (
  params: TransferBatchERC1155Params
): Promise<TransferBatchERC1155Response> => {
  const url = `${ERC1155_API_PATH}/transferBatch`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the balance of an ERC1155 token for a specific address.
 * @param {GetBalanceOfERC1155Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC1155 contract.
 * - network: number - The ID of the network where to query the balance.
 * - address: string - The address to query the balance for.
 * - id: number - The ID of the token to query the balance for.
 * @returns {Promise<GetBalanceOfERC1155Response>} - Object containing:
 * - balance: number - The balance of the ERC1155 token for the specified address.
 */
export const getBalanceOfERC1155 = async (
  params: GetBalanceOfERC1155Params
): Promise<GetBalanceOfERC1155Response> => {
  const url = `${ERC1155_API_PATH}/balanceOf`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the URI of an ERC1155 token.
 * @param {GetTokenUriERC1155Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC1155 contract.
 * - network: number - The ID of the network where to get the token URI.
 * - id: number - The ID of the token to get the URI for.
 * @returns {Promise<GetTokenUriERC1155Response>} - Object containing:
 * - uri: string - The URI of the ERC1155 token.
 */
export const getTokenUriERC1155 = async (
  params: GetTokenUriERC1155Params
): Promise<GetTokenUriERC1155Response> => {
  const url = `${ERC1155_API_PATH}/tokenUri`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};
