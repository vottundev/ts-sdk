/**
 * Deploy ERC1155
 */
export interface DeployERC1155Params {
  name: string;
  symbol: string;
  ipfsUri: string;
  royaltyRecipient: string;
  royaltyValue: number;
  network: number;
  gasLimit?: number;
  alias: string;
}
export interface DeployERC1155Response {
  txHash: string;
  nonce: number;
}

/**
 * Mint ERC1155
 */
export interface MintERC1155Params {
  contractAddress: string;
  network: number;
  to: string;
  id: number;
  amount: number;
}
export interface MintERC1155Response {
  txHash: string;
  nonce: number;
}

/**
 * Mint Batch ERC1155
 */
export interface MintBatchERC1155Params {
  contractAddress: string;
  network: number;
  to: string;
  amounts: number[];
  ids: number[];
}
export interface MintBatchERC1155Response {
  txHash: string;
  nonce: number;
}

/**
 * Transfer ERC1155
 */
export interface TransferERC1155Params {
  contractAddress: string;
  network: number;
  to: string;
  amount: number;
  id: number;
}
export interface TransferERC1155Response {
  txHash: string;
  nonce: number;
}

/**
 * Transfer Batch ERC1155
 */
export interface TransferBatchERC1155Params {
  contractAddress: string;
  network: number;
  to: string;
  amounts: number[];
  ids: number[];
}
export interface TransferBatchERC1155Response {
  txHash: string;
  nonce: number;
}

/**
 * Balance of ERC1155
 */
export interface GetBalanceOfERC1155Params {
  contractAddress: string;
  network: number;
  address: string;
  id: number;
}
export interface GetBalanceOfERC1155Response {
  balance: number;
}

/**
 * Get token uri of ERC721
 */

export interface GetTokenUriERC1155Params {
  contractAddress: string;
  network: number;
  id: number;
}
export interface GetTokenUriERC1155Response {
  uri: string;
}
