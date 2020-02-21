import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { JobsService } from '../jobs.service';
import { Job } from '../job.model';

@Component({
  selector: 'svb-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit, OnDestroy  {
  id: number;
  job: Job;
  jobSub$: Subscription;

  constructor(
    private jobsService: JobsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.jobSub$ = this.jobsService.jobFromHttp(+this.id)
      .subscribe(job => {
        this.job = job;
      });
  }

  ngOnDestroy(): void {
    this.jobSub$.unsubscribe();
  }
}
