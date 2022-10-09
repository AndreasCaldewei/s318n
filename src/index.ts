import { Client } from './Client';
import { S3 } from '@aws-sdk/client-s3';

const client = new Client({
  s3: new S3({ region: 'us-east-1' }),
  bucketName: 'test-bucket-192381923819832',
});

client.listProjects();
