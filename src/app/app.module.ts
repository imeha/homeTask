import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HoursMinutesSecondsPipe } from './view/pipe/hours-minutes-seconds.pipe';
import { TasksListComponent } from './view/tasks-list/tasks-list.component';
import { NewTaskComponent } from './view/new-task/new-task.component';
import { HomeComponent } from './view/home/home.component';
import { ErrorComponent } from './view/error/error.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatDialogModule} from '@angular/material/dialog'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HoursMinutesSecondsPipe,
    TasksListComponent,
    NewTaskComponent,
    HomeComponent,
    ErrorComponent
  ],
  entryComponents: [
    NewTaskComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTableModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
