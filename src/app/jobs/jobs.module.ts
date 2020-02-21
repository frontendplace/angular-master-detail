import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsComponent } from './jobs.component';
import { JobComponent } from './job/job.component';

@NgModule({
  declarations: [JobsComponent, JobComponent],
  imports: [
    CommonModule
  ]
})
export class JobsModule { }
