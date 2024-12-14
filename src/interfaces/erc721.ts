/**
 * Deploy ERC721
 */

export interface DeployERC721Params {
  name: string;
  symbol: string;
  network: number;
  gasLimit?: number;
  alias?: string;
}
export interface DeployERC721Response {
  contractAddress: string;
  txHash: string;
}

/**
 * Mint ERC721
 */

export interface MintERC721Params {
  recipientAddress: string;
  tokenId: number;
  ipfsUri: string;
  ipfsHash: string;
  network: number;
  contractAddress: string;
  royaltyPercentage?: number;
  gasLimit?: number;
}
export interface MintERC721Response {
  txHash: string;
  nonce: number;
}

/**
 * Transfer ERC721
 */

export interface TransferERC721Params {
  contractAddress: string;
  network: number;
  id: number;
  from: string;
  to: string;
}
export interface TransferERC721Response {
  txHash: string;
  nonce: number;
}

/**
 * Get balance of ERC721
 */

export interface GetBalanceOfERC721Params {
  contractAddress: string;
  network: number;
  address: string;
}
export interface GetBalanceOfERC721Response {
  balance: number;
}

/**
 * Get token uri of ERC721
 */

export interface GetTokenUriERC721Params {
  contractAddress: string;
  network: number;
  id: number;
}
export interface GetTokenUriERC721Response {
  uri: string;
}

/**
 * Get owner of ERC721
 */

export interface GetOwnerOfERC721Params {
  contractAddress: string;
  network: number;
  id: number;
}
export interface GetOwnerOfERC721Response {
  owner: string;
}
