import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionsRoutingModule } from './sessions-routing.module';



@NgModule({
  declarations: [SessionListComponent, SessionDetailComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule
  ]
})
export class SessionModule { }
