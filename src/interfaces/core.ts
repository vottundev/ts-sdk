import { DynamicArrayType, SmartContractParamType } from './index';
import {
  Network,
  Contract,
  ErrorInfo,
  InfoTransactionStatus,
  Receipt,
  Transaction,
} from '../interfaces';

/**
 * Deploy Smart Contract
 */
export interface DeploySmartContractParams {
  contractSpecsId: number;
  myReference?: string;
  sender: string;
  blockchainNetwork: number;
  gasLimit?: number;
  useGasEstimation?: boolean;
  gasPrice?: number;
  priorityFee?: number;
  nonce?: number;
  alias?: string;
  params: SmartContractParamType[];
}
export interface DeploySmartContractResponse {
  txHash: string;
  nonce: number;
}

/**
 * Send Transaction
 */
export interface SendTransactionParams {
  contractAddress: string;
  myReference?: string;
  contractSpecsId?: number;
  sender: string;
  blockchainNetwork: number;
  value?: number; // in wei
  gasLimit?: number;
  useGasEstimation?: boolean;
  gasPrice?: number;
  priorityFee?: number;
  nonce?: number;
  method: string;
  params: SmartContractParamType[];
}

export interface SendTransactionResponse {
  txHash: string;
  nonce: number;
}

/**
 * Query Smart contract
 */
export interface QuerySmartContractParams {
  contractAddress: string;
  contractSpecsId?: number;
  blockchainNetwork: number;
  method: string;
  params: SmartContractParamType[];
}

export interface QuerySmartContractResponse {
  data: Record<string, unknown>;
}

/**
 * Get blockchains
 */
export interface GetBlockchainsResponse {
  mainnetNetworks: Network[];
  testnetNetworks: Network[];
}

/**
 * Get blockchains
 */
export interface GetContractsResponse {
  data: Contract[];
}

/**
 * Is contract
 */
export interface IsContractParams {
  address: string;
  network: string;
}
export interface IsContractResponse {
  isContract: boolean;
}

/**
 * Get Transaction Info
 */
export interface GetTransactionInfoParams {
  txHash: string;
  network: number;
  contractSpecsId?: number;
}

export interface GetTransactionInfoResponse {
  network: number;
  transaction: Transaction;
  receipt: Receipt;
  error: boolean;
  errorInfo: ErrorInfo;
}

/**
 * Get Transaction Status
 */
export interface GetTransactionStatusParams {
  txHash: string;
  network: number;
}

export interface GetTransactionStatusResponse {
  id: number;
  txHash: string;
  blockchainNetwork: number;
  status: 'inserted' | 'processing' | 'confirmed' | 'error' | 'evmError';
  error: boolean;
  creationTimestamp: bigint;
  confirmationTimestamp: bigint;
}

/**
 * Get Transaction Status by reference
 */
export interface GetTransactionStatusByReferenceParams {
  reference: string;
}

export interface GetTransactionStatusByReferenceResponse {
  reference: string;
  info: InfoTransactionStatus;
}

/**
 * Get gas price
 */
export interface GetGasPriceParams {
  network: number;
}
export interface GetGasPriceResponse {
  gasPriceGwei: number;
}

/**
 * Get balance
 */
export interface GetBalanceParams {
  account: string;
  network: number;
}
export interface GetBalanceResponse {
  balance: bigint;
}

/**
 * Estimate gas for Smart Contract deployment
 */
export interface GetEstimateForDeploymentParams {
  contractSpecsId: number;
  sender: string;
  blockchainNetwork: number;
  params: DynamicArrayType;
}
export interface GetEstimateForDeploymentResponse {
  estimatedGas: number;
}

/**
 * Estimate gas for send a transaction
 */
export interface GetEstimateToSendTransactionParams {
  contractAddress: string;
  sender: string;
  blockchainNetwork: number;
  value: number;
  method: string;
  params: DynamicArrayType;
}
export interface GetEstimateToSendTransactionResponse {
  estimatedGas: number;
}

/**
 * Estimate gas for native crypto transfer
 */
export interface GetEstimateToTransferNativeParams {
  sender: string;
  recipient: string;
  blockchainNetwork: number;
  value: number;
}
export interface GetEstimateToTransferNativeResponse {
  estimatedGas: number;
}
