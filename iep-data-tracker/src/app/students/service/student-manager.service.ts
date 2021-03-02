import { Injectable } from '@angular/core';
import { StudentRepositoryService } from './student-repository.service';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentManagerService {

  constructor(private studentRepository: StudentRepositoryService) { }

  add(student: Student): void {

    let canCreate = this.canCreateOrUpdateStudent(student.firstName, student.lastName);

    if (canCreate) {
      let newStudent = new Student();
      newStudent.firstName = student.firstName;
      newStudent.lastName = student.lastName;
      newStudent.grade = student.grade;
      newStudent.studentNotes = student.studentNotes;
      newStudent.iepGoals = student.iepGoals;

      this.studentRepository.add(newStudent);
    }
  }

  delete(id: number): void {
      let student = this.studentRepository.get(id);

      if (student) {
        this.studentRepository.delete(id);
      }
      else {
        console.error(`No student found with id ${id}`);
      }
  }

  update(student: Student): void {

    // allow update for same name,  if the id of the matched name matches the current student.
    let canUpdate =
      student.id === this.getAll().find(x => x.firstName === student.firstName && x.lastName === student.lastName).id ?
        true :
        this.canCreateOrUpdateStudent(student.firstName, student.lastName);

    let currStudent = this.studentRepository.get(student.id);

    if (currStudent) {
      if (canUpdate) {
        this.studentRepository.update(student);
      }
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

  canCreateOrUpdateStudent(firstName: string, lastName: string): boolean {
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

  getStudentIndex(wholename: string): number {
    let names = wholename.split(' ');
    let firstName = names[0];
    let lastName = names[1];

    return this.getAll().findIndex(s => s.firstName === firstName && s.lastName === lastName);
  }
}
