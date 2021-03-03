import { Component, OnInit, Input } from '@angular/core';
import { StudentManagerService } from '../service/student-manager.service';
import { Student } from '../model/student';
import { Router } from '@angular/router';
import { K12Grades } from '../model/k12grades';
import { FormSavable } from 'src/app/form-savable';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit, FormSavable {
  @Input() student: Student;
  K12Grades = K12Grades;
  @Input() formSubmitOption: string;

  constructor(private studentManager: StudentManagerService,
              private route: Router) { }

  ngOnInit(): void {
  }

  save() {
    if (this.formSubmitOption === 'update') {
      this.studentManager.update(this.student);
    }
    else if (this.formSubmitOption === 'add') {
      this.studentManager.add(this.student);
    }

    let index = this.studentManager.getStudentIndex(this.student.firstName + ' ' + this.student.lastName);

    this.route.navigate( [`student/${index}`]);
  }

  getGradeKeys(): Array<string> {
    return Object.keys(this.K12Grades)
      .sort()
      .filter(x => !isNaN(Number(x)) || (x === 'Preschool' || x === 'Kindergarten'));
  }
}
