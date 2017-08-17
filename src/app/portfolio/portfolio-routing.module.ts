import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { PortfolioComponent } from './portfolio.component';

const portfolioRoutes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
    // children: [
    //   { path: '/', component: PortfolioComponent, index: true },
    //   { path: '/:id', component: ProjectComponent }
    // ]
  { path: 'project/:id', component: ProjectComponent }
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
