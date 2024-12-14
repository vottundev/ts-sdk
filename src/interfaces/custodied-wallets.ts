import { Wallet } from '../interfaces';
import { DynamicArrayType } from './index';
/**
 * Get new hash
 */
export interface GetHashParams {
  username: string;
  strategies: number[];
  callbackUrl: string;
  fallbackUrl: string;
  cancelUrl: string;
}
export interface GetHashResponse {
  hash: string;
  expirationTime: string;
}

/**
 * Get User wallet
 */
export interface GetUserWalletParams {
  userEmail: string;
}
export interface GetUserWalletResponse {
  accountAddress: string;
  strategy: number;
}

/**
 * Get App wallets
 */
export interface GetAppWalletParams {
  o?: number;
  n?: number;
}
export interface GetAppWalletResponse {
  data: Wallet[];
}

/**
 * Create signature
 */
export interface CreateSignatureEmailParams {
  email: string;
}

/**
 * Send Transaction with Custodied Wallet
 */
export interface SendTransactionCWParams {
  strategy: string;
  contractAddress: string;
  myReference: string;
  contractSpecsId?: number;
  sender: string;
  blockchainNetwork: number;
  value: number;
  gasLimit?: number;
  gasPrice?: number;
  nonce?: number;
  method: string;
  params: DynamicArrayType;
  pin: number;
}
export interface SendTransactionCWResponse {
  txHash: string;
  nonce: number;
}

/**
 * Transfer native from custodied wallet
 */
export interface TransferNativeFromCWParams {
  strategy: string;
  myReference: string;
  sender: string;
  recipient: string;
  blockchainNetwork: number;
  value: number;
  gasLimit?: number;
  gasPrice?: number;
  nonce?: number;
  pin: number;
}
export interface TransferNativeFromCWResponse {
  txHash: string;
  nonce: number;
}
