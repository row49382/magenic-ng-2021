import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionDetailComponent } from './session-detail/session-detail.component';
import { SessionsRoutingModule } from './sessions-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { CreateSessionComponent } from './create-session/create-session.component';
import { FormsModule } from '@angular/forms';
import { SessionFormComponent } from './session-form/session-form.component';



@NgModule({
  declarations: [SessionListComponent, SessionDetailComponent, CreateSessionComponent, SessionFormComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    MatDatepickerModule,
    MatListModule,
    MatCardModule,
    RouterModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
  ]
})
export class SessionModule { }
