import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute }  from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

import { fadeInAnimation, helixAnimation } from '../_animations/index';

import { PortfolioService } from './portfolio.service';
import { PortfolioRoutingModule } from './portfolio-routing.module';

import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [fadeInAnimation, helixAnimation]
})
export class PortfolioComponent implements OnInit {
  projects: any = [];
  modalState: string = "inactive";
  subscription: Subscription;

  constructor(private router: Router,
              private portfolioService: PortfolioService,
              private sharedService: SharedService) {

    portfolioService.getProjects().subscribe((data) => {
      this.projects = data.projects;
    });
  }

  ngOnInit() {
    this.subscription = this.sharedService.notifyObservable$.subscribe(() => {
      this.close();
    });
  }

  onSelect(project: any) {
    this.router.navigate(['portfolio', {outlets: { popup: ['project', project.id] }}], { skipLocationChange: true });
    this.modalState = "active";
  }

  close() {
    this.modalState = "inactive";
  }

}
