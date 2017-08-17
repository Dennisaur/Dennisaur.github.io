import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  // { path: 'portfolio', component: PortfolioComponent },
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
