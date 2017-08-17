import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  project: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private portfolioService: PortfolioService) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.project = this.portfolioService.getProject(params.get('id'));
    });
  }

}
