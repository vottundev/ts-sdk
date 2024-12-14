export interface Network {
  id: number;
  name: string;
  symbol: string;
  isMainnet: boolean;
  explorer: string;
  testnetFaucet?: string;
  typeId: number;
  typeName: string;
}
