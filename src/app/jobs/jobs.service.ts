import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Job, jobs } from './job.model';
import { delay } from 'rxjs/operators';

@Injectable()
export class JobsService {
  private ROOT_URL = 'http://localhost:3000/jobs';

  constructor(private http: HttpClient) { }

  getJobs() {
    return of(jobs);
  }

  getJobsFromHttp() {
    return this.http.get<Job[]>(this.ROOT_URL).pipe(this.addDelay);
  }

  job(id: number) {
    console.log(id);
    return of(jobs.find(job => +job.id === +id));
  }

  jobFromHttp(id: number) {
    return this.http.get<Job>(`${this.ROOT_URL}/${id}`);
  }

  addDelay(obs: Observable<any>) {
    return obs.pipe(delay(1000));
  }
}
