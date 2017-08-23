import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { PortfolioComponent } from './portfolio.component';
import { AboutComponent } from '../about/about.component';

const portfolioRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent,

    children: [
      { path: 'project/:id', component: ProjectComponent, outlet: 'popup' }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(portfolioRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class PortfolioRoutingModule { }
