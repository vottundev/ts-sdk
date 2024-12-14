/* eslint-disable @typescript-eslint/no-unsafe-return */

import { API_VERSION } from '../config/settings';
import { getAxiosInstance } from '../config/axios';
import {
  DeploySmartContractParams,
  DeploySmartContractResponse,
  GetBalanceParams,
  GetBalanceResponse,
  GetBlockchainsResponse,
  GetContractsResponse,
  GetEstimateForDeploymentParams,
  GetEstimateForDeploymentResponse,
  GetEstimateToSendTransactionParams,
  GetEstimateToSendTransactionResponse,
  GetEstimateToTransferNativeParams,
  GetEstimateToTransferNativeResponse,
  GetGasPriceParams,
  GetGasPriceResponse,
  GetTransactionInfoParams,
  GetTransactionInfoResponse,
  GetTransactionStatusByReferenceParams,
  GetTransactionStatusByReferenceResponse,
  GetTransactionStatusParams,
  GetTransactionStatusResponse,
  IsContractParams,
  IsContractResponse,
  QuerySmartContractParams,
  QuerySmartContractResponse,
  SendTransactionParams,
  SendTransactionResponse,
} from '../interfaces';

const CORE_API_PATH = `/core/${API_VERSION}/evm`;

/**
 * Deploy Smart Contract endpoint
 * @param {DeploySmartContractParams} params - Object with properties:
 * - contractSpecsId: number
 * - myReference?: string
 * - sender: string
 * - blockchainNetwork: number
 * - gasLimit?: number
 * - useGasEstimation?: boolean
 * - gasPrice?: number
 * - priorityFee?: number
 * - nonce?: number
 * - alias?: string
 * - params: SmartContractParamType[]
 * @returns {Promise<DeploySmartContractResponse>} - Object with properties:
 * - txHash: string
 * - nonce: number
 */
export const deploySmartContract = async (
  params: DeploySmartContractParams
): Promise<DeploySmartContractResponse> => {
  const url = `${CORE_API_PATH}/contract/deploy`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Send a transaction to a smart contract.
 * @param {SendTransactionParams} params - Object with properties:
 * - contractAddress: string
 * - myReference?: string
 * - contractSpecsId?: number
 * - sender: string
 * - blockchainNetwork: number
 * - value?: number
 * - gasLimit?: number
 * - useGasEstimation?: boolean
 * - gasPrice?: number
 * - priorityFee?: number
 * - nonce?: number
 * - method: string
 * - params: SmartContractParamType[]
 * @returns {Promise<SendTransactionResponse>} - Object with properties:
 * - txHash: string
 * - nonce: number
 */
export const sendTransaction = async (
  params: SendTransactionParams
): Promise<SendTransactionResponse> => {
  const url = `${CORE_API_PATH}/transact/mutable`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Query Smart Contract endpoint
 * @param {QuerySmartContractParams} params - Object with properties:
 * - contractAddress: string
 * - contractSpecsId?: number
 * - blockchainNetwork: number
 * - method: string
 * - params: SmartContractParamType[]
 * @returns {Promise<QuerySmartContractResponse>} - Object with property:
 * - result: Record<string, unknown>
 */
export const querySmartContract = async (
  params: QuerySmartContractParams
): Promise<QuerySmartContractResponse> => {
  const url = `${CORE_API_PATH}/transact/view`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Get the list of supported blockchain networks.
 * @returns {Promise<GetBlockchainsResponse>} - Object with properties:
 * - mainnetNetworks: Network[]
 * - testnetNetworks: Network[]
 */
export const getBlockchains = async (): Promise<GetBlockchainsResponse> => {
  const url = `${CORE_API_PATH}/info/chains`;
  const response = await getAxiosInstance().get(url);
  return response.data;
};

/**
 * Get the list of supported smart contracts.
 * @returns {Promise<GetContractsResponse>} - Object with property:
 * - data: Contract[]
 */
export const getContracts = async (): Promise<GetContractsResponse> => {
  const url = `${CORE_API_PATH}/info/specs`;
  const response = await getAxiosInstance().get(url);
  return response.data;
};

/**
 * Check if an address is a smart contract.
 * @param {IsContractParams} params - Object with properties:
 * - address: string
 * - network: string
 * @returns {Promise<IsContractResponse>} - Object with property:
 * - isContract: boolean
 */
export const isContract = async (
  params: IsContractParams
): Promise<IsContractResponse> => {
  const { address, network } = params;
  const url = `${CORE_API_PATH}/info/address/${address}/isContract?network=${network}`;
  const response = await getAxiosInstance().get(url);
  return response.data;
};

/**
 * Get information about a transaction by hash.
 * @param {GetTransactionInfoParams} params - Object with properties:
 * - txHash: string
 * - network: number
 * - contractSpecsId?: number
 * @returns {Promise<GetTransactionInfoResponse>} - Object with properties:
 * - network: number
 * - transaction: Transaction
 * - receipt: Receipt
 * - error: boolean
 * - errorInfo: ErrorInfo
 */
export const getTransactionInfo = async (
  params: GetTransactionInfoParams
): Promise<GetTransactionInfoResponse> => {
  const { txHash, network, contractSpecsId } = params;
  let url = `${CORE_API_PATH}/info/transaction/${txHash}?network=${network}`;
  if (contractSpecsId) {
    url += `&contractSpecsId=${contractSpecsId}`;
  }
  const response = await getAxiosInstance().get(url);
  return response.data;
};

/**
 * Get the status of a transaction by hash.
 * @param {GetTransactionStatusParams} params - Object with properties:
 * - txHash: string
 * - network: number
 * @returns {Promise<GetTransactionStatusResponse>} - Object with properties:
 * - id: number
 * - txHash: string
 * - blockchainNetwork: number
 * - status: "inserted" | "processing" | "confirmed" | "error" | "evmErrors"
 * - error: boolean
 * - creationTimestamp: bigint
 * - confirmationTimestamp: bigint
 */
export const getTransactionStatus = async (
  params: GetTransactionStatusParams
): Promise<GetTransactionStatusResponse> => {
  const { txHash, network } = params;
  const url = `${CORE_API_PATH}/info/transaction/${txHash}/status?network=${network}`;
  const response = await getAxiosInstance().get(url);
  return response.data;
};

/**
 * Get the status of a transaction by reference.
 * @param {GetTransactionStatusByReferenceParams} params - Object with properties:
 * - reference: string
 * @returns {Promise<GetTransactionStatusByReferenceResponse>} - Object with properties:
 * - reference: string
 * - info: InfoTransactionStatus
 */
export const getTransactionStatusByReference = async (
  params: GetTransactionStatusByReferenceParams
): Promise<GetTransactionStatusByReferenceResponse> => {
  const { reference } = params;
  const url = `${CORE_API_PATH}/info/transaction/reference/${reference}`;
  const response = await getAxiosInstance().get(url);
  return response.data;
};

/**
 * Retrieve the current gas price for a specific network.
 * @param {GetGasPriceParams} params - Object containing:
 * - network: number - The network ID for which to retrieve the gas price.
 * @returns {Promise<GetGasPriceResponse>} - Object containing:
 * - gasPriceGwei: number - The current gas price in Gwei.
 */
export const getGasPrice = async (
  params: GetGasPriceParams
): Promise<GetGasPriceResponse> => {
  const { network } = params;
  const url = `${CORE_API_PATH}/network/gasprice?network=${network}`;
  const response = await getAxiosInstance().get(url);
  return response.data;
};

/**
 * Retrieve the current balance of a specific account on a specific network.
 * @param {GetBalanceParams} params - Object containing:
 * - account: string - The account for which to retrieve the balance.
 * - network: number - The network ID for which to retrieve the balance.
 * @returns {Promise<GetBalanceResponse>} - Object containing:
 * - balance: bigint - The current native balance of the account.
 */
export const getBalance = async (
  params: GetBalanceParams
): Promise<GetBalanceResponse> => {
  const { account, network } = params;
  const url = `${CORE_API_PATH}/chain/${account}/balance?network=${network}`;
  const response = await getAxiosInstance().get(url);
  return response.data;
};

/**
 * Estimate the gas required for deploying a smart contract.
 * @param {GetEstimateForDeploymentParams} params - Object containing:
 * - contractSpecsId: number - The ID of the contract specification.
 * - sender: string - The address of the sender.
 * - blockchainNetwork: number - The network ID where the contract will be deployed.
 * - params: DynamicArrayType - Additional parameters for the contract deployment.
 * @returns {Promise<GetEstimateForDeploymentResponse>} - Object containing:
 * - estimatedGas: number - The estimated gas required for the deployment.
 */
export const getEstimateForDeployment = async (
  params: GetEstimateForDeploymentParams
): Promise<GetEstimateForDeploymentResponse> => {
  const url = `${CORE_API_PATH}/contract/deploy/estimategas`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Estimate the gas required for sending a transaction to a smart contract.
 * @param {GetEstimateToSendTransactionParams} params - Object containing:
 * - contractAddress: string - The address of the contract to which the transaction will be sent.
 * - sender: string - The address of the sender.
 * - blockchainNetwork: number - The network ID where the transaction will be sent.
 * - value: number - The value of the transaction in the native currency of the network.
 * - method: string - The method of the contract to which the transaction will be sent.
 * - params: DynamicArrayType - Additional parameters for the transaction.
 * @returns {Promise<GetEstimateToSendTransactionResponse>} - Object containing:
 * - estimatedGas: number - The estimated gas required for the transaction.
 */
export const getEstimateToSendTransaction = async (
  params: GetEstimateToSendTransactionParams
): Promise<GetEstimateToSendTransactionResponse> => {
  const url = `${CORE_API_PATH}/transact/mutable/estimategas`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};

/**
 * Estimate the gas required for transferring a native asset (e.g. ETH).
 * @param {GetEstimateToTransferNativeParams} params - Object containing:
 * - sender: string - The address of the sender.
 * - recipient: string - The address of the recipient.
 * - blockchainNetwork: number - The network ID where the transaction will be sent.
 * - value: number - The value of the transaction in the native currency of the network.
 * @returns {Promise<GetEstimateToTransferNativeResponse>} - Object containing:
 * - estimatedGas: number - The estimated gas required for the transaction.
 */
export const getEstimateToTransferNative = async (
  params: GetEstimateToTransferNativeParams
): Promise<GetEstimateToTransferNativeResponse> => {
  const url = `${CORE_API_PATH}/chain/transfer/estimategas`;
  const response = await getAxiosInstance().post(url, params);
  return response.data;
};
