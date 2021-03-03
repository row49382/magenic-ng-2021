import { Component, OnInit } from '@angular/core';
import { StudentManagerService } from '../service/student-manager.service';
import { Subscription, Observable, of } from 'rxjs';
import { Student } from '../model/student';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {
  student: Student = new Student();

  constructor(
    private studentManager: StudentManagerService) { }

  ngOnInit(): void {
    this.studentManager.getAll();
  }
}
