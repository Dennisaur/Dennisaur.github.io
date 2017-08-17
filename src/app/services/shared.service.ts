import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  private projects: any;
  private activeProject: any;

  constructor() {

  }

  setProjects(projects: any) {
    this.projects = projects;
  }

  getProjects() {
    return this.projects;
  }

  setActiveProject(project: any) {
    this.activeProject = project;
  }

  getActiveProject() {
    return this.activeProject;
  }
}
