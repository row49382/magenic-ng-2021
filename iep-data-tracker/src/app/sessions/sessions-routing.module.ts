import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';

const routes: Routes = [
  { path: 'session', component: SessionListComponent },
  { path: 'session/:id', component: SessionDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule { }
