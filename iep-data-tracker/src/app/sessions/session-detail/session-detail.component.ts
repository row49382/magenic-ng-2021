import { Component, OnInit } from '@angular/core';
import { StudentManagerService } from 'src/app/students/service/student-manager.service';
import { SideNavDisplayable } from 'src/app/sidenav-displayable';
import { SideNavContentService } from 'src/app/side-nav-content.service';
import { SessionsManagerService } from '../service/sessions-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Session } from '../service/model/session';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit, SideNavDisplayable {
  session: Session

  constructor(
    private studentManager: StudentManagerService,
    private sideNavDisplay: SideNavContentService,
    private sessionsManager: SessionsManagerService,
    private route: ActivatedRoute) { }

  getTitle(): string {
    return this.sideNavDisplay.title;
  }

  getChildren(): string[] {
    return this.sideNavDisplay.children;
  }

  ngOnInit(): void {
    this.sideNavDisplay.title = 'Sessions';
    this.sideNavDisplay.children = this.sessionsManager.getAll().map(x => x.sessionName);

    this.route.params.subscribe(x => {
      let id = x['id'];
      if (id) {
        this.session = this.sessionsManager.getAll()[id];
      }
    })
  }

  getStudentNames(): string[] {
    return this.studentManager.getAll().map(x => x.firstName + ' ' + x.lastName);
  }
}
