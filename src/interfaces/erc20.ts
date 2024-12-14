/**
 * Deploy ERC20
 */

export interface DeployERC20Params {
  name: string;
  symbol: string;
  alias: string;
  initialSupply: number;
  network: number;
  gasLimit?: number;
}
export interface DeployERC20Response {
  contractAddress: string;
  txHash: string;
}

/**
 * Transfer ERC20 tokens
 */

export interface TransferERC20Params {
  contractAddress: string;
  recipient: string;
  network: number;
  amount: number;
  gasLimit?: number;
}
export interface TransferERC20Response {
  txHash: string;
  nonce: number;
}

/**
 * Transfer from ERC20 tokens
 */
export interface TransferFromERC20Params {
  contractAddress: string;
  sender: string;
  recipient: string;
  network: number;
  amount: number;
  gasLimit?: number;
}
export interface TransferFromERC20Response {
  txHash: string;
  nonce: number;
}

/**
 * Increase Allowance ERC20 tokens
 */
export interface IncreaseAllowanceERC20Params {
  contractAddress: string;
  spender: string;
  network: number;
  addedValue: number;
  gasLimit?: number;
}
export interface IncreaseAllowanceERC20Response {
  txHash: string;
  nonce: number;
}

/**
 * Decrease Allowance ERC20 tokens
 */
export interface DecreaseAllowanceERC20Params {
  contractAddress: string;
  spender: string;
  network: number;
  substractedValue: number;
  gasLimit?: number;
}
export interface DecreaseAllowanceERC20Response {
  txHash: string;
  nonce: number;
}

/**
 * Allowance ERC20 tokens
 */
export interface AllowanceERC20Params {
  contractAddress: string;
  network: number;
  spender: string;
  owner: string;
}
export interface AllowanceERC20Response {
  allowance: number;
}

/**
 * Get ERC20 name
 */
export interface GetERC20NameParams {
  contractAddress: string;
  network: number;
}
export interface GetERC20NameResponse {
  name: string;
}

/**
 * Get ERC20 symbol
 */
export interface GetERC20SymbolParams {
  contractAddress: string;
  network: number;
}
export interface GetERC20SymbolResponse {
  symbol: string;
}

/**
 * Get ERC20 total supply
 */
export interface GetERC20TotalSupplyParams {
  contractAddress: string;
  network: number;
}
export interface GetERC20TotalSupplyResponse {
  totalSupply: number;
}

/**
 * Get ERC20 decimals
 */
export interface GetERC20DecimalsParams {
  contractAddress: string;
  network: number;
}
export interface GetERC20DecimalsResponse {
  decimals: number;
}

/**
 * Get ERC20 balance of
 */
export interface GetERC20BalanceOfParams {
  contractAddress: string;
  network: number;
  address: string;
}
export interface GetERC20BalanceOfResponse {
  balance: number;
}
