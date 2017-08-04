import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  private activeProject: any;

  setActiveProject(project: any) {
    this.activeProject = project;
  }

  getActiveProject() {
    return this.activeProject;
  }
}
