import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routableComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsModule } from './jobs/jobs.module';
import { HttpClientModule } from '@angular/common/http';
// import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    routableComponents // add all the routable components as an array
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JobsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
