import { Injectable } from '@angular/core';
import { Session } from '../model/session';
import { SESSIONS } from '../model/mock-sessions';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionsManagerService {
  private sessions = new BehaviorSubject<Session[]>([]);
  sessions$ = this.sessions.asObservable();

  constructor() {
    this.sessions.next(SESSIONS);
  }

  getSessionIndexById(id: number) {
    return 0;
  }

  getSessionIndex(name: string) {
    return this.getSnapshot().findIndex(x => x.sessionName === name);
  }

  deleteSession(id: number): void {

  }

  getAll(): void {
    this.sessions.next(this.sessions.value);
  }

  private getSnapshot(): Session[] {
    return this.sessions.value;
  }
}
