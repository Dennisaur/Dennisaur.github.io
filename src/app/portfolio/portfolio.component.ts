import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router }  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { fadeInAnimation, helixAnimation } from '../_animations/index';

import { PortfolioService } from './portfolio.service';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [fadeInAnimation, helixAnimation]
})
export class PortfolioComponent implements OnInit {
  projects: any = [];
  modalState: string = "inactive";

  constructor(private http: Http,
              private router: Router,
              private portfolioService: PortfolioService) {

    portfolioService.getProjects().subscribe((data) => {
      this.projects = data.projects;
    });
  }

  ngOnInit() {

  }

  onSelect(project: any) {
    this.router.navigate(['/project', project.id], { skipLocationChange: true });
    this.modalState = "active";
  }

  close() {
    this.modalState = "inactive";
    this.router.navigate(['']);
  }

}
