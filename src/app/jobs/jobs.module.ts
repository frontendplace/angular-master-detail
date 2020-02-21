import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule, routedComponents } from './jobs-routing.module';
import { JobsdataService } from './jobsdata.service';

@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ],
  providers: [
    JobsdataService
  ]
})
export class JobsModule { }
