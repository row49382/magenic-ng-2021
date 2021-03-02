import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentManagerService } from '../service/student-manager.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  constructor(
    private studentManager: StudentManagerService) { }

  ngOnInit(): void {
  }

  getAllStudents(): Array<Student> {
    return this.studentManager.getAll();
  }

  getAllStudentNames(): Array<string> {
    console.log(this.studentManager.getAll());
    return this.getAllStudents().map(x => x.firstName + ' ' + x.lastName);
  }

  getStudentIndex(wholename: string): number {
    let names = wholename.split(' ');
    let firstName = names[0];
    let lastName = names[1];

    return this.studentManager.getAll().findIndex(s => s.firstName === firstName && s.lastName === lastName);
  }

  getStudentIndexById(id: number) {
    return this.studentManager.getAll().findIndex(s => s.id === id);
  }

  deleteStudent(id: number) {
    this.studentManager.delete(id);
  }
}
