import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { STUDENTS } from '../model/mock-students';

@Injectable({
  providedIn: 'root'
})
export class StudentRepositoryService {
  students: Array<Student>;

  constructor() {
    console.log('StudentRepositoryService students:', STUDENTS)
    this.students = STUDENTS;
    console.log('StudentRepositoryService after set students', this.students)
  }

  get(id: number): Student {
    return this.students.find(x => x.id === id);
  }

  getAll(): Array<Student> {
    return this.students;
  }

  update(student: Student) {
    let oldStudentIndex = this.students.findIndex(x => x.id === student.id);
    this.students.splice(oldStudentIndex, 1);
    this.students.push(student);
  }

  delete(id: number) {
    let studentToDeleteIndex = this.students.findIndex(x => x.id === id);
    this.students.splice(studentToDeleteIndex, 1);
  }

  add(student: Student) {
    this.students.push(student);
  }
}
