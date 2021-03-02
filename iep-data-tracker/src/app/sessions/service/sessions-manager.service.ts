import { Injectable } from '@angular/core';
import { Session } from './model/session';
import { SESSIONS } from './model/mock-sessions';

@Injectable({
  providedIn: 'root'
})
export class SessionsManagerService {

  constructor() { }

  getAll(): Array<Session> {
    return SESSIONS;
  }

  getSessionIndexById(id: number) {
    return 0;
  }

  deleteSession(id: number): void {

  }
}
