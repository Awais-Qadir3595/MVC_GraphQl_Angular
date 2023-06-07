import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewStudentComponent } from './myComponents/view-student/view-student.component';
import { AddStudentComponent } from './myComponents/add-student/add-student.component';
const routes: Routes = [
  {path:'',component:ViewStudentComponent},
  {path:'addStudents',component:AddStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
