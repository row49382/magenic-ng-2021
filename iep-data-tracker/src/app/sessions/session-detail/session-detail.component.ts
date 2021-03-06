import { Component, OnInit } from '@angular/core';
import { SessionsManagerService } from '../service/sessions-manager.service';
import { ActivatedRoute } from '@angular/router';
import { Session } from '../model/session';

@Component({
  selector: 'app-session-detail',
  templateUrl: './session-detail.component.html',
  styleUrls: ['./session-detail.component.css']
})
export class SessionDetailComponent implements OnInit {
  session: Session
  private sessions: Session[];

  constructor(
    private sessionsManager: SessionsManagerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sessionsManager.sessions$.subscribe(x => this.sessions = x);
    this.sessionsManager.getAll();

    this.route.params.subscribe(x => {
      let id = x['id'];
      if (id) {
        this.session = this.sessions[id];
      }
    })
  }
}
