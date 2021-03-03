import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { StudentManagerService } from 'src/app/students/service/student-manager.service';
import { SessionsManagerService } from 'src/app/sessions/service/sessions-manager.service';
import { Router } from '@angular/router';
import { Observable, Subscription, of } from 'rxjs';
import { SideNav } from './sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {
  sideNav: SideNav;
  private subscriptions: Subscription[] = [];
  sideNav$: Observable<SideNav>

  constructor(
    private route: Router,
    private studentManager: StudentManagerService,
    private sessionManager: SessionsManagerService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.sessionManager.sessions$.subscribe(x => this.sideNav$ = of({
      title: 'Sessions',
      children: x.map(x => x.sessionName).sort(),
      page: 'session'
    })));

    this.subscriptions.push(this.studentManager.students$.subscribe(x => this.sideNav$ = of({
      title: 'Students',
      children: x.map(x => x.firstName + ' ' + x.lastName).sort(),
      page: 'student'
    })));
  }

  ngOnDestroy(): void {
    for (let sub of this.subscriptions) {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }

  getIndex(subject: string): number {
    if (this.route.url.search('student')) {
      return this.studentManager.getStudentIndex(subject);
    }
    else if (this.route.url.search('session')) {
      return this.sessionManager.getSessionIndex(subject);
    }
  }

  onSideNavLoaded(data: SideNav) {
    this.sideNav$ = of(data);
  }
}
