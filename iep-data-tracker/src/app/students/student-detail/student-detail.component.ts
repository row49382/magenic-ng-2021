import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentManagerService } from '../service/student-manager.service';
import { Student } from '../model/student';
import { K12Grades } from '../model/k12grades';
import { Subscription, Observable, of } from 'rxjs';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {
  student: Student;
  K12Grades = K12Grades;

  private students: Student[];
  private students$: Observable<Student[]>;

  private subscriptions: Subscription[] = [];

  constructor(
    private studentManager: StudentManagerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscriptions.push(this.studentManager.students$.subscribe(x => this.students$ = of(x)));
    this.subscriptions.push(this.students$.subscribe(x => this.students = x));

    this.subscriptions.push(this.route.params.subscribe(x => {
      debugger;
      let id = x['id'];
      if (id) {
        this.student = this.students[id];
      }
    }));

    this.studentManager.getAll();
  }

  ngOnDestroy(): void {
    for (let sub of this.subscriptions) {
      if (sub) {
        sub.unsubscribe();
      }
    }
  }

  save() {
    this.studentManager.update(this.student);
  }
}
