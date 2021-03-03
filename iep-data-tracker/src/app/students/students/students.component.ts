import { Component, OnInit, OnDestroy } from '@angular/core';
import { Student } from '../model/student';
import { StudentManagerService } from '../service/student-manager.service';
import { Subscription, Observable, of } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {
  studentId: number;
  students: Student[];
  students$: Observable<Student[]>;
  private subsriptions: Array<Subscription> = [];

  constructor(
    private studentManager: StudentManagerService) { }

  ngOnInit(): void {
    this.subsriptions.push(this.studentManager.students$.subscribe(data => this.onStudentsLoaded(data)))
    this.subsriptions.push(this.students$.subscribe(x => this.students = x));

    this.studentManager.getAll();
  }

  ngOnDestroy(): void {
    for (let sub of this.subsriptions) {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }

  getStudentIndexById(id: number) {
    return this.students.findIndex(s => s.id === id);
  }

  onStudentsLoaded(data: Student[]) {
    this.students$ = of(data);
  }

  deleteStudent(id: number) {
    this.studentManager.delete(id);
  }
}
