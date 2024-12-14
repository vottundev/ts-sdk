/**
 * Upload file
 */
export interface UploadFileParams {
  filename: string;
  file: File;
}
export interface UploadFileResponse {
  url: string;
}

/**
 * Upload metadata
 */
interface MetadataAttributes {
  trait_type: string;
  value: number | string;
  max_value?: number;
  display_type?: string;
}
export interface UploadMetadataParams {
  name: string;
  image: string;
  description: string;
  edition?: string;
  external_url?: string;
  animation_url?: string;
  attributes?: MetadataAttributes[];
  data?: Record<string, unknown>;
}
export interface UploadMetadataResponse {
  ipfsHash: string;
  pinSize: number;
  timestamp: string;
}
