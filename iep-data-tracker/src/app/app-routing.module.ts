import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students/students.component';
import { StudentDetailComponent } from './students/student-detail/student-detail.component';

const routes: Routes = [
  { path: 'student', component: StudentsComponent },
  { path: 'student/:id', component: StudentDetailComponent },
  { path: 'session', loadChildren: () => import('./sessions/session.module').then(m => m.SessionModule) },
  { path: '', redirectTo: '/student', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
