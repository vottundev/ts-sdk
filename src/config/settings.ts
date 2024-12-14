export interface VottunCredentials {
  appId: string;
  apiKey: string;
}

class VottunSDK {
  private credentials: VottunCredentials | null = null;

  initialize(id: string, key: string): void {
    if (!id || !key) {
      throw new Error(
        'Both app_id and api_key are required to initialize the Vottun SDK.'
      );
    }
    this.credentials = { appId: id, apiKey: key };
    console.log('Vottun SDK initialized with credentials:', this.credentials);
  }

  getCredentials(): VottunCredentials {
    if (!this.credentials) {
      throw new Error(
        'Vottun SDK not initialized. Please call initialize() first.'
      );
    }
    return this.credentials;
  }
}

export const VottunSDKInstance = new VottunSDK();

export const initializeVottunSDK = (id: string, key: string): void =>
  VottunSDKInstance.initialize(id, key);

export const getCredentials = (): VottunCredentials =>
  VottunSDKInstance.getCredentials();

export const API_BASE_URL = 'https://api.vottun.tech';
export const API_BASE_IPFS_URL = 'https://ipfsapi-v2.vottun.tech';
export const API_VERSION = 'v1';
