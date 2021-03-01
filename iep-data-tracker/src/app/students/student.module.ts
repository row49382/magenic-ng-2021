import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';




@NgModule({
  declarations: [
    StudentsComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    RouterModule,
    MatSidenavModule
  ],
  exports: [
    StudentsComponent,
    StudentDetailComponent
  ]
})
export class StudentModule { }
