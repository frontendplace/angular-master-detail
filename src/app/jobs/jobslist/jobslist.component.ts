import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Job } from '../job.model';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'svb-jobslist',
  templateUrl: './jobslist.component.html',
  styleUrls: ['./jobslist.component.scss']
})
export class JobslistComponent implements OnInit {
  jobs$: Observable<Job[]>;
  loadingJobs: Array<number>;

  constructor(private jobService: JobsService) { }

  ngOnInit(): void {
    this.loadingJobs = new Array(10).fill(0).map((n, index) => index);
    this.jobs$ = this.jobService.getJobsFromHttp();
  }

}
