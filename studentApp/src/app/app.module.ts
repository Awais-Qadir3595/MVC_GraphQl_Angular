import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ViewStudentComponent } from './myComponents/view-student/view-student.component';
import { AddStudentComponent } from './myComponents/add-student/add-student.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ViewStudentComponent,
    AddStudentComponent
  ],
  imports: [
     
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
