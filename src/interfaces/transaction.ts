import { DynamicArrayType } from './index';

interface TransactionInputData {
  function: string;
  functionId: string;
  inputs: DynamicArrayType;
}

interface Topic {
  name: string;
  value: string;
}
interface LogData {
  name: string;
  value: string;
}

interface Log {
  address: string;
  name: string;
  topics: Topic[];
  data: LogData[];
}

export interface ErrorInfo {
  code: string;
  message: string;
}

export interface InfoTransactionStatus {
  id: string;
  txHash: string;
  blockchainNetwork: number;
  status: 'inserted' | 'processing' | 'confirmed' | 'error' | 'evmError';
  error: boolean;
  creationTimestamp: bigint;
  confirmationTimestamp: bigint;
}

export interface Receipt {
  hash: string;
  blockHash: string;
  gasPrice: number;
  gasUsed: number;
  cumulativeGasUsed: number;
  tokenId: number; // Deprecated
  from: string; // Deprecated
  to: string; // Deprecated
  blockTime: string;
  status: number;
  logs: Log[];
  errorMessage: string;
}

export interface Transaction {
  hash: string;
  value: number;
  gas: number;
  gasPrice: number;
  gasTipCap: number;
  nonce: number;
  from: string;
  to: string;
  pending: boolean;
  inputData: TransactionInputData;
}
