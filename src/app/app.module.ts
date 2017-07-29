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
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MdButtonModule,
    MdGridListModule,
    FlexLayoutModule,
    MdIconModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
