import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentFormComponent } from './student-form/student-form.component';



@NgModule({
  declarations: [
    StudentsComponent,
    StudentDetailComponent,
    CreateStudentComponent,
    StudentFormComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ],
  exports: [
    StudentsComponent,
    StudentDetailComponent
  ]
})
export class StudentModule { }
