import { Component } from '@angular/core';
import { fadeInAnimation, slideInOutAnimation, slideLeftAnimation } from './_animations/index';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Router }  from '@angular/router';
import { Location } from '@angular/common';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation],
  // host: {'[@fadeInAnimation]':''}
})
export class AppComponent {
  title = 'app';

  projects: any = [];
  panels: any = [];
  modalState: string = "inactive";
  activePanel: string;
  sectionEnum = Section;

  constructor(private http: Http,
              private sharedService: SharedService,
              private router: Router,
              private location: Location) {
    this.getProjects().subscribe((data) => {
        setTimeout(() => {
          this.projects = data.projects;
          for (let project of this.projects) {
            // project.row = +project.row;
            // project.rowSpan = +project.rowSpan;
            // project.column = +project.column;
            // project.columnSpan = +project.columnSpan;
          }
          console.log(this.projects);
        });
      });
  }

  getProjects() {
    return this.http.get('./assets/data/projects.json').map((res) => res.json());
  }

  setActivePanel(panel: string, project: any, page: string) {
    this.sharedService.setActiveProject(project);
    let navList = [page];
    if (project) {
      navList.push(panel);
    }
    this.router.navigate(navList, { skipLocationChange: true });
    this.modalState = "active";
    this.activePanel = panel;
  }

  close() {
    this.sharedService.setActiveProject(null);
    this.modalState = "inactive";
    this.router.navigate(['']);
    this.activePanel = '';
  }

}

enum Section {
  HOME,
  PORTFOLIO,
  ABOUT,
  CONTACT
}
