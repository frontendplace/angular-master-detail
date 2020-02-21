import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule, routedComponents } from './jobs-routing.module';
import { JobsService } from './jobs.service';

@NgModule({
  declarations: [
    routedComponents
  ],
  imports: [
    CommonModule,
    JobsRoutingModule
  ],
  providers: [
    JobsService
  ]
})
export class JobsModule { }
