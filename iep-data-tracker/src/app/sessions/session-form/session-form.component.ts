import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormSavable } from 'src/app/form-savable';
import { Session } from '../model/session';
import { Student } from 'src/app/students/model/student';
import { Subscription, Observable, of } from 'rxjs';
import { StudentManagerService } from 'src/app/students/service/student-manager.service';
import { SessionsManagerService } from '../service/sessions-manager.service';

@Component({
  selector: 'app-session-form',
  templateUrl: './session-form.component.html',
  styleUrls: ['./session-form.component.css']
})
export class SessionFormComponent implements OnInit, OnDestroy, FormSavable {
  students: Student[];
  students$: Observable<Student[]>

  session: Session;

  private sessions: Session[];
  private sessions$: Observable<Session[]>;

  private subscriptions: Subscription[];

  studentAvailable: boolean = true;

  constructor(
    private studentManager: StudentManagerService,
    private sessionManager: SessionsManagerService) {

  }

  ngOnInit(): void {
    this.subscriptions.push(this.studentManager.students$.subscribe(x => this.students$ = of(x)));
    this.subscriptions.push(this.sessionManager.sessions$.subscribe(x => this.sessions$ = of(x)));
    this.subscriptions.push(this.sessions$.subscribe(x => this.sessions = x));
  }

  ngOnDestroy(): void {
    for (let sub of this.subscriptions) {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }

  save(): void {
    throw new Error("Method not implemented.");
  }

  getAvailableStudents() {

  }

  getNames(): string[] {
    return this.studentManager.getFullNames(this.students);
  }

  setStudent(name: string) {
    let studentFound = this.students.find(x => x.firstName + ' ' + x.lastName === name);
    this.session.studentId = studentFound.id;
  }
}
