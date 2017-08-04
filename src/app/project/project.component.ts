import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  project: any;

  constructor(private route: ActivatedRoute,
              private sharedService: SharedService) {

  }

  ngOnInit() {
    this.project = this.sharedService.getActiveProject();
    console.log(this.project);
  }

}
