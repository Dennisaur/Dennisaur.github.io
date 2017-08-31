import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

// Portfolio component handled in portfolio module
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'portfolio', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
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
