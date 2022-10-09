export class Project {
  key?: string;

  constructor(project: Partial<Project>) {
    Object.assign(this, project);
  }
}
