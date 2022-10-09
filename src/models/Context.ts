import { S3 } from '@aws-sdk/client-s3';

export interface Context {
  s3: S3;
  bucketName: string;
}
