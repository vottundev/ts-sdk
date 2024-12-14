export type SmartContractParamType = string | number | bigint;
export type DynamicArrayType = (
  | string
  | number
  | boolean
  | Record<string, unknown>
)[];

export * from './contract';
export * from './core';
export * from './custodied-wallets';
export * from './erc1155';
export * from './erc20';
export * from './erc721';
export * from './ipfs';
export * from './network';
export * from './transaction';
export * from './wallet';
