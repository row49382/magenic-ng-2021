import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentManagerService } from '../service/student-manager.service';
import { Student } from '../model/student';
import { K12Grades } from '../model/k12grades';
import { SideNavDisplayable } from 'src/app/sidenav-displayable';
import { SideNavContentService } from 'src/app/side-nav-content.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, SideNavDisplayable {
  student: Student;
  K12Grades = K12Grades;

  constructor(
    private studentManager: StudentManagerService,
    private route: ActivatedRoute,
    private sideNavDisplay: SideNavContentService) { }

  getTitle(): string {
    return this.sideNavDisplay.title;
  }

  getChildren(): string[] {
    return this.sideNavDisplay.children;
  }

  ngOnInit(): void {
    this.sideNavDisplay.title = 'Students',
    this.sideNavDisplay.children = this.studentManager.getAll().map(x => x.firstName + ' ' + x.lastName);

    this.route.params.subscribe(x => {
      let id = x['id'];
      if (id) {
        this.student = this.studentManager.getAll()[id];
      }
    })
  }

  getGradeKeys(): Array<string> {
    return Object.keys(this.K12Grades)
      .sort()
      .filter(x => !isNaN(Number(x)) || (x === 'Preschool' || x === 'Kindergarten'));
  }

  getStudentIndex(wholename: string) {
    return this.studentManager.getStudentIndex(wholename);
  }

  save() {
    this.studentManager.update(this.student);
  }
}
