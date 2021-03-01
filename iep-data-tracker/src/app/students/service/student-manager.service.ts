import { Injectable } from '@angular/core';
import { StudentRepositoryService } from './student-repository.service';
import { K12Grades } from '../model/k12grades';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentManagerService {

  constructor(private studentRepository: StudentRepositoryService) { }

  add(
    firstName: string,
    lastName: string,
    grade: K12Grades,
    studentNotes: string = '',
    iepGoals: string = ''): void {

    let canCreate = this.canCreateStudent(firstName, lastName);

    if (canCreate) {
      let student = new Student();
      student.firstName = firstName;
      student.lastName = lastName;
      student.grade = grade;
      student.studentNotes = studentNotes;
      student.iepGoals = iepGoals;

      this.studentRepository.add(student);
    }
  }

  delete(
    id: number): void {
      let student = this.studentRepository.get(id);

      if (student) {
        this.studentRepository.delete(id);
      }
      else {
        console.error(`No student found with id ${id}`);
      }
  }

  update(
    student: Student): void {
    let currStudent = this.studentRepository.get(student.id);

    if (currStudent) {
      this.studentRepository.update(student);
    }
    else {
      console.error(`No student found with id ${student.id}`);
    }
  }

  get(id: number): Student {
    let student = this.studentRepository.get(id);

    if (student) {
      return student;
    }
    else {
      console.error(`No student found with id ${id}`);
    }
  }

  getAll(): Array<Student> {
    return this.studentRepository.getAll();
  }

  canCreateStudent(firstName: string, lastName: string): boolean {
    let canCreate = true;
    if (this.studentRepository.getAll().find(x => x.firstName === firstName && x.lastName === lastName)) {
      console.error('can not create a new student with that name, because they already exist');
      canCreate = false;
    }
    else if (firstName === '' || lastName === '') {
      console.error('can not create a new student with no first name or last name');
      canCreate = false;
    }

    return canCreate;
  }
}
