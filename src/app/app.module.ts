import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { MdButtonModule } from '@angular2-material/button';
import { MdGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MdIconModule, MdIconRegistry } from '@angular2-material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { ProjectComponent } from './project/project.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';

import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    PortfolioComponent,
    AboutComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdButtonModule,
    MdGridListModule,
    FlexLayoutModule,
    MdIconModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [MdIconRegistry, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
