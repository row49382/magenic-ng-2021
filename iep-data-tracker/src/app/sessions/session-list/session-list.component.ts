import { Component, OnInit } from '@angular/core';
import { SideNavContentService } from 'src/app/side-nav-content.service';
import { SessionsManagerService } from '../service/sessions-manager.service';
import { Session } from '../model/session';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  sessions: Session[];
  sessions$: Observable<Session[]>;
  private subscriptions: Subscription[] = [];

  constructor(
    private sideNavDisplay: SideNavContentService,
    private sessionsManager: SessionsManagerService) { }

  ngOnInit(): void {
    this.subscriptions.push(this.sessionsManager.sessions$.subscribe(x => this.sessions$ = of(x)));
    this.subscriptions.push(this.sessions$.subscribe(x => this.sessions = x));

    debugger;
    this.sessionsManager.getAll();
  }

  getSessionIndex(sessionId: number): number {
    return this.sessionsManager.getSessionIndexById(sessionId);
  }

  deleteSession(sessionId: number): void {
    return this.sessionsManager.deleteSession(sessionId);
  }
}
