import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobslistComponent } from './jobslist/jobslist.component';
import { JobComponent } from './job/job.component';

const routes: Routes = [
  {path: '', component: JobslistComponent},
  {path: ':id', component: JobComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }

// now you dont need to import all separate
export const routedComponents = [
  JobslistComponent,
  JobComponent
];
