import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class PortfolioService {
  projects: any = [];

  constructor(private http: Http) {
    this.getProjects().subscribe((data) => {
      this.projects = data.projects;
    });
  }

  getProjects() {
    return this.http.get('./assets/data/projects.json').map((res) => res.json());
  }

  getProject(id) {
    return this.projects[id];
  }
}
