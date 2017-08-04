import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ProjectComponent } from './project/project.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  { path: 'project/:id', component: ProjectComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
