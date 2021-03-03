import { Component, OnInit } from '@angular/core';
import { StudentManagerService } from '../service/student-manager.service';
import { SideNavContentService } from 'src/app/side-nav-content.service';
import { Subscription, Observable, of } from 'rxjs';
import { Student } from '../model/student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  private wholeNames: string[];
  private wholeNames$: Observable<string[]>
  private subcriptions: Subscription[] = [];
  student: Student = new Student();

  constructor(
    private studentManager: StudentManagerService,
    private sideNavDisplay: SideNavContentService) { }

  ngOnInit(): void {
    this.subcriptions.push(this.studentManager.students$.subscribe(x => this.onDataLoad(x)));
    this.subcriptions.push(this.wholeNames$.subscribe(x => this.wholeNames = x));
    this.sideNavDisplay.getSideNav('Students', this.wholeNames, 'student');
  }

  onDataLoad(data: Student[]) {
    this.wholeNames$ = of(data.map(x => x.firstName + ' ' + x.lastName));
  }
}
