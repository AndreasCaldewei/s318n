import { S3 } from '@aws-sdk/client-s3';
import { Project } from './models/Project';
import { createUUID } from './utils/createUUID';
import { Context } from './models/Context';

export class ProjectClient {
  private s3: S3;

  constructor(private context: Context) {
    this.s3 = context.s3;
  }

  get bucketName() {
    return this.context.bucketName;
  }

  async createProject(): Promise<Project> {
    const uuid = createUUID();

    const Key = `PROJECT/${uuid}`;
    await this.s3.putObject({
      Bucket: this.bucketName,
      Key,
      Body: JSON.stringify({
        name: 'test',
      }),
    });

    const project = new Project({
      key: uuid,
    });

    return project;
  }

  async listProjects() {
    const response = await this.s3.listObjects({
      Bucket: this.bucketName,
      Prefix: 'PROJECT',
    });

    const projects = response.Contents?.map(item => {
      return new Project({
        key: item.Key,
      });
    });

    return projects;
  }
}
