import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { DetailStudentComponent } from './detail-student/detail-student.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"addstudent", component:AddStudentComponent},
  {path:"students", component:StudentsComponent},
  {path:"student/add", component:AddStudentComponent},
  {path:"student/:id", component:DetailStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
