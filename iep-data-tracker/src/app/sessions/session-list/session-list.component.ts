import { Component, OnInit } from '@angular/core';
import { SideNavDisplayable } from 'src/app/sidenav-displayable';
import { SideNavContentService } from 'src/app/side-nav-content.service';
import { SessionsManagerService } from '../service/sessions-manager.service';
import { Session } from '../service/model/session';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit, SideNavDisplayable {

  constructor(
    private sideNavDisplay: SideNavContentService,
    private sessionsManager: SessionsManagerService) { }

  getTitle(): string {
    return this.sideNavDisplay.title;
  }

  getChildren(): string[] {
    return this.sideNavDisplay.children;
  }

  ngOnInit(): void {
    this.sideNavDisplay.title = 'Sessions'
    this.sideNavDisplay.children = this.sessionsManager.getAll().map(x => x.sessionName);
  }

  getSessions(): Session[] {
    return this.sessionsManager.getAll();
  }

  getSessionIndex(sessionId: number): number {
    return this.sessionsManager.getSessionIndexById(sessionId);
  }

  deleteSession(sessionId: number): void {
    return this.sessionsManager.deleteSession(sessionId);
  }
}
