import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { fadeInAnimation, slideInOutAnimation, slideLeftAnimation } from '../_animations/index';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [slideLeftAnimation],
  host: {'[@slideLeftAnimation]':'' }
})
export class PortfolioComponent implements OnInit {
  projects: any = [];
  storedProjects: any = [];
  state: string = "inactive";

  constructor(private http: Http) {
    this.state = "inactive";
    this.getProjects().subscribe((data) => {
        setTimeout(() => this.projects = data.projects);
        this.storedProjects = data.projects;
        //setTimeout(() => this.state = "active");
        // for (let project of this.projects) {
        //   project.state = "inactive";
        // }
        // this.setProjectsActive('active', 200, false);

        //setTimeout(() => this.setProjectsActive('inactive', 200, true), 5000);
      });
  }

  toggleState() {
    this.projects.length ? this.projects = [] : this.projects = this.storedProjects;
  }

  ngOnInit() {

  }


  ngOnDestroy() {
  }

  getProjects() {
    return this.http.get('./assets/data/projects.json').map((res) => res.json());
  }
}
