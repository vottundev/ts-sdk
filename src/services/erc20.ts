/* eslint-disable @typescript-eslint/no-unsafe-return */

import { API_VERSION } from '../config/settings';
import { getAxiosInstance } from '../config/axios';
import {
  AllowanceERC20Params,
  AllowanceERC20Response,
  DecreaseAllowanceERC20Params,
  DecreaseAllowanceERC20Response,
  DeployERC20Params,
  DeployERC20Response,
  GetERC20BalanceOfParams,
  GetERC20BalanceOfResponse,
  GetERC20DecimalsParams,
  GetERC20DecimalsResponse,
  GetERC20NameParams,
  GetERC20NameResponse,
  GetERC20SymbolParams,
  GetERC20SymbolResponse,
  GetERC20TotalSupplyParams,
  GetERC20TotalSupplyResponse,
  IncreaseAllowanceERC20Params,
  IncreaseAllowanceERC20Response,
  TransferERC20Params,
  TransferERC20Response,
  TransferFromERC20Params,
  TransferFromERC20Response,
} from '../interfaces';

const ERC20_API_PATH = `/erc/${API_VERSION}/erc20`;

/**
 * Deploy an ERC20 token.
 * @param {DeployERC20Params} params - Object with properties:
 * - name: string - The name of the token.
 * - symbol: string - The symbol of the token.
 * - alias: string - The alias name of the contract.
 * - initialSupply: number - The initial supply of the token.
 * - network: number - The ID of the network where to deploy the contract.
 * - gasLimit?: boolean - Whether to use gas estimation.
 * @returns {Promise<DeployERC20Response>} - Object containing:
 * - contractAddress: string - The address of the deployed contract.
 * - txHash: string - The hash of the deployment transaction.
 */
export const deployERC20 = async (
  params: DeployERC20Params
): Promise<DeployERC20Response> => {
  const url = `${ERC20_API_PATH}/deploy`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Transfer ERC20 tokens.
 * @param {TransferERC20Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC20 contract.
 * - recipient: string - The address of the recipient.
 * - network: number - The network ID for the transaction.
 * - amount: number - The amount of tokens to transfer.
 * - gasLimit?: number - The gas limit for the transaction (optional).
 * @returns {Promise<TransferERC20Response>} - Object containing:
 * - txHash: string - The transaction hash of the transfer.
 * - nonce: number - The transaction nonce.
 */
export const transferERC20 = async (
  params: TransferERC20Params
): Promise<TransferERC20Response> => {
  const url = `${ERC20_API_PATH}/transfer`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Transfer ERC20 tokens from one address to another.
 * @param {TransferFromERC20Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC20 contract.
 * - sender: string - The address of the sender.
 * - recipient: string - The address of the recipient.
 * - network: number - The network ID for the transaction.
 * - amount: number - The amount of tokens to transfer.
 * - gasLimit?: number - The gas limit for the transaction (optional).
 * @returns {Promise<TransferFromERC20Response>} - Object containing:
 * - txHash: string - The transaction hash of the transfer.
 * - nonce: number - The transaction nonce.
 */
export const transferFromERC20 = async (
  params: TransferFromERC20Params
): Promise<TransferFromERC20Response> => {
  const url = `${ERC20_API_PATH}/transferFrom`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Increase the allowance of an ERC20 token.
 * @param {IncreaseAllowanceERC20Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC20 contract.
 * - spender: string - The address of the spender.
 * - network: number - The network ID for the transaction.
 * - addedValue: number - The amount of tokens to increase the allowance by.
 * - gasLimit?: number - The gas limit for the transaction (optional).
 * @returns {Promise<IncreaseAllowanceERC20Response>} - Object containing:
 * - txHash: string - The transaction hash of the allowance increase.
 * - nonce: number - The transaction nonce.
 */
export const increaseAllowanceERC20 = async (
  params: IncreaseAllowanceERC20Params
): Promise<IncreaseAllowanceERC20Response> => {
  const url = `${ERC20_API_PATH}/increaseAllowance`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Decrease the allowance of an ERC20 token.
 * @param {DecreaseAllowanceERC20Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC20 contract.
 * - spender: string - The address of the spender.
 * - network: number - The network ID for the transaction.
 * - substractedValue: number - The amount of tokens to decrease the allowance by.
 * - gasLimit?: number - The gas limit for the transaction (optional).
 * @returns {Promise<DecreaseAllowanceERC20Response>} - Object containing:
 * - txHash: string - The transaction hash of the allowance decrease.
 * - nonce: number - The transaction nonce.
 */
export const decreaseAllowanceERC20 = async (
  params: DecreaseAllowanceERC20Params
): Promise<DecreaseAllowanceERC20Response> => {
  const url = `${ERC20_API_PATH}/decreaseAllowance`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the allowance of an ERC20 token.
 * @param {AllowanceERC20Params} params - Object with properties:
 * - contractAddress: string - The address of the ERC20 contract.
 * - network: number - The network ID for the transaction.
 * - owner: string - The address of the owner.
 * - spender: string - The address of the spender.
 * @returns {Promise<AllowanceERC20Response>} - Object containing:
 * - allowance: number - The current allowance of the spender.
 */
export const allowanceERC20 = async (
  params: AllowanceERC20Params
): Promise<AllowanceERC20Response> => {
  const url = `${ERC20_API_PATH}/allowance`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the name of an ERC20 token.
 * @param {GetERC20NameParams} params - Object with properties:
 * - contractAddress: string - The address of the ERC20 contract.
 * - network: number - The network ID for the transaction.
 * @returns {Promise<GetERC20NameResponse>} - Object containing:
 * - name: string - The name of the ERC20 token.
 */
export const getERC20Name = async (
  params: GetERC20NameParams
): Promise<GetERC20NameResponse> => {
  const url = `${ERC20_API_PATH}/name`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the symbol of an ERC20 token.
 * @param {GetERC20SymbolParams} params - Object with properties:
 * - contractAddress: string - The address of the ERC20 contract.
 * - network: number - The network ID for the transaction.
 * @returns {Promise<GetERC20SymbolResponse>} - Object containing:
 * - symbol: string - The symbol of the ERC20 token.
 */
export const getERC20Symbol = async (
  params: GetERC20SymbolParams
): Promise<GetERC20SymbolResponse> => {
  const url = `${ERC20_API_PATH}/symbol`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the total supply of an ERC20 token.
 * @param {GetERC20TotalSupplyParams} params - Object with properties:
 * - contractAddress: string - The address of the ERC20 contract.
 * - network: number - The network ID for the transaction.
 * @returns {Promise<GetERC20TotalSupplyResponse>} - Object containing:
 * - totalSupply: number - The total supply of the ERC20 token.
 */
export const getERC20TotalSupply = async (
  params: GetERC20TotalSupplyParams
): Promise<GetERC20TotalSupplyResponse> => {
  const url = `${ERC20_API_PATH}/totalSupply`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the decimals of an ERC20 token.
 * @param {GetERC20DecimalsParams} params - Object with properties:
 * - contractAddress: string - The address of the ERC20 contract.
 * - network: number - The network ID for the transaction.
 * @returns {Promise<GetERC20DecimalsResponse>} - Object containing:
 * - decimals: number - The number of decimals of the ERC20 token.
 */
export const getERC20Decimals = async (
  params: GetERC20DecimalsParams
): Promise<GetERC20DecimalsResponse> => {
  const url = `${ERC20_API_PATH}/decimals`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the balance of an ERC20 token for a specific address.
 * @param {GetERC20BalanceOfParams} params - Object with properties:
 * - contractAddress: string - The address of the ERC20 contract.
 * - network: number - The network ID for the transaction.
 * - address: string - The address to query the balance for.
 * @returns {Promise<GetERC20BalanceOfResponse>} - Object containing:
 * - balance: number - The balance of the ERC20 token for the specified address.
 */
export const getERC20BalanceOf = async (
  params: GetERC20BalanceOfParams
): Promise<GetERC20BalanceOfResponse> => {
  const url = `${ERC20_API_PATH}/balanceOf`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};
