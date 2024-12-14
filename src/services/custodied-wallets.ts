/* eslint-disable @typescript-eslint/no-unsafe-return */
import { API_VERSION } from '../config/settings';
import { getAxiosInstance } from '../config/axios';
import {
  CreateSignatureEmailParams,
  GetAppWalletParams,
  GetAppWalletResponse,
  GetHashParams,
  GetHashResponse,
  GetUserWalletParams,
  GetUserWalletResponse,
  SendTransactionCWParams,
  SendTransactionCWResponse,
  TransferNativeFromCWParams,
  TransferNativeFromCWResponse,
} from '../interfaces';

const CWLL_API_PATH = `/cwll/${API_VERSION}`;

/**
 * Get a new hash for a custodied wallet.
 * @param {GetHashParams} params - Object with properties:
 * - username: string - The email of the user
 * - strategies: number[] - List of wallet strategies for the user (1 for pin (discouraged), 2 for 2FA and 3 for mail otp)
 * - callbackUrl: string - The callback URL for the user
 * - fallbackUrl: string - The fallback URL for the user
 * - cancelUrl: string - The cancel URL for the user
 * @returns {Promise<GetHashResponse>} - Object containing:
 * - hash: string - The new hash.
 * - expirationTime: string - The expiration time for the hash.
 */
export const getHash = async (
  params: GetHashParams
): Promise<GetHashResponse> => {
  const url = `${CWLL_API_PATH}/hash/new`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the address of a custodied wallet.
 * @param {GetUserWalletParams} params - Object with properties:
 * - userEmail: string - The email of the user
 * @returns {Promise<GetUserWalletResponse>} - Object containing:
 * - accountAddress: string - The address of the custodied wallet.
 * - strategy: number - The strategy used by the wallet (1 for pin (discouraged), 2 for 2FA and 3 for mail otp)
 */
export const getUserWallet = async (
  params: GetUserWalletParams
): Promise<GetUserWalletResponse> => {
  const url = `${CWLL_API_PATH}/evm/wallet/custodied/address`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Retrieve a list of custodied app wallets.
 * @param {GetAppWalletParams} params - Object with optional properties:
 * - o?: number - The offset for pagination.
 * - n?: number - The limit for the number of wallets to retrieve.
 * @returns {Promise<GetAppWalletResponse>} - Object containing:
 * - data: Wallet[] - An array of custodied wallets.
 */
export const getAppWallets = async (
  params: GetAppWalletParams
): Promise<GetAppWalletResponse> => {
  const { o: offset, n: limit } = params;
  const queryParams = new URLSearchParams();
  if (offset) queryParams.append('o', offset.toString());
  if (limit) queryParams.append('n', limit.toString());
  const url = `${CWLL_API_PATH}/evm/wallet/custodied/list${
    queryParams.toString() ? '?' + queryParams.toString() : ''
  }`;
  const response = await getAxiosInstance().get(url);
  return response.data;
};

/**
 * Create a signature email for a user.
 * @param {CreateSignatureEmailParams} params - Object with properties:
 * - email: string - The email of the user
 */
export const createSignatureEmail = async (
  params: CreateSignatureEmailParams
) => {
  const { email } = params;
  const url = `${CWLL_API_PATH}/2fa/signature/otp/new?email=${email}`;
  const response = await getAxiosInstance().post(url);
  return response.data;
};

/**
 * Send a transaction from a custodied wallet.
 * @param {SendTransactionCustodiedWalletParams} params - Object with properties:
 * - strategy: string - The strategy to use for the transaction (e.g. "erc20", "erc721", "evm").
 * - contractAddress: string - The address of the contract to which the transaction will be sent.
 * - myReference: string - The reference of the user who initiated the transaction.
 * - contractSpecsId?: number - The contract specs ID of the contract to which the transaction will be sent.
 * - sender: string - The address of the sender.
 * - blockchainNetwork: number - The network ID for the transaction.
 * - value: number - The value of the transaction in the native currency of the network.
 * - gasLimit?: number - The gas limit for the transaction (optional).
 * - gasPrice?: number - The gas price for the transaction (optional).
 * - nonce?: number - The nonce for the transaction (optional).
 * - method: string - The method of the contract to which the transaction will be sent.
 * - params: DynamicArrayType - Additional parameters for the transaction.
 * - pin: number - OTP received by the user
 * @returns {Promise<SendTransactionCustodiedWalletResponse>} - Object containing:
 * - txHash: string - The transaction hash of the transaction.
 * - nonce: number - The transaction nonce.
 */
export const sendTransactionFromCW = async (
  params: SendTransactionCWParams
): Promise<SendTransactionCWResponse> => {
  const url = `${CWLL_API_PATH}/evm/wallet/custodied/transact/mutable?strategy=${params.strategy}`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Transfer native from custodied wallet.
 * @param {TransferNativeFromCWParams} params - Object with properties:
 * - strategy: string - The strategy to use for the transaction (e.g. "erc20", "erc721", "evm").
 * - contractAddress?: string - The address of the contract to which the transaction will be sent.
 * - myReference?: string - The reference of the user who initiated the transaction.
 * - contractSpecsId?: number - The contract specs ID of the contract to which the transaction will be sent.
 * - sender: string - The address of the sender.
 * - blockchainNetwork: number - The network ID for the transaction.
 * - value: number - The value of the transaction in the native currency of the network.
 * - gasLimit?: number - The gas limit for the transaction (optional).
 * - gasPrice?: number - The gas price for the transaction (optional).
 * - nonce?: number - The nonce for the transaction (optional).
 * - pin: number - OTP received by the user
 * @returns {Promise<TransferNativeFromCWResponse>} - Object containing:
 * - txHash: string - The transaction hash of the transaction.
 * - nonce: number - The transaction nonce.
 */
export const transferNativeFromCW = async (
  params: TransferNativeFromCWParams
): Promise<TransferNativeFromCWResponse> => {
  const url = `${CWLL_API_PATH}/evm/wallet/custodied/transfer?strategy=${params.strategy}`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};
