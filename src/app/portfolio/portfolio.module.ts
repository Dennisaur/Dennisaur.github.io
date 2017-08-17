import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { PortfolioComponent }    from './portfolio.component';
import { ProjectComponent }  from './project/project.component';

import { PortfolioService } from './portfolio.service';

import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PortfolioRoutingModule
  ],
  declarations: [
    PortfolioComponent,
    ProjectComponent
  ],
  providers: [ PortfolioService ]
})

export class PortfolioModule {}
