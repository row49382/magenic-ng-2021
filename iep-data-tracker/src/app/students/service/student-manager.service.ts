import { Injectable } from '@angular/core';
import { Student } from '../model/student';
import { Subscription, Observable, of, BehaviorSubject } from 'rxjs';
import { STUDENTS } from '../model/mock-students';

@Injectable({
  providedIn: 'root'
})
export class StudentManagerService {
  private studentsChanged = new BehaviorSubject<Student[]>([]);
  students$ = this.studentsChanged.asObservable();

  constructor() {
    this.studentsChanged.next(STUDENTS);
  }

  add(student: Student): void {
    let currentStudents = this.getSnapshot();
    let canCreate = this.canCreateOrUpdateStudent(currentStudents, student.firstName, student.lastName);

    if (canCreate) {
      let newStudent = new Student();
      newStudent.id = this.getNextId();
      newStudent.firstName = student.firstName;
      newStudent.lastName = student.lastName;
      newStudent.grade = student.grade;
      newStudent.studentNotes = student.studentNotes;
      newStudent.iepGoals = student.iepGoals;

      this.studentsChanged.next([...this.studentsChanged.value, student]);
    };
  }

  delete(id: number): void {
    let currentStudents = this.getSnapshot();
    let student = currentStudents.find(x => x.id === id);

    if (student) {
      let oldStudentIndex = currentStudents.findIndex(x => x.id === id);
      currentStudents.splice(oldStudentIndex, 1);
      this.studentsChanged.next(currentStudents);
    }
    else {
      this.studentsChanged.error(console.error(`No student found with id ${id}`));
    }
  }

  update(student: Student): void {
    let currentStudents = this.getSnapshot();

    // allow update for same name,  if the id of the matched name matches the current student.
    let canUpdate =
      student.id === currentStudents.find(x => x.firstName === student.firstName && x.lastName === student.lastName).id ?
        true :
        this.canCreateOrUpdateStudent(currentStudents, student.firstName, student.lastName);

    let currStudent = currentStudents.find(x => x.id === student.id);

    if (currStudent) {
      if (canUpdate) {
        this.updateAndNotify(currentStudents, student);
      }
    }
    else {
      this.studentsChanged.error((console.error(`No student found with id ${student.id}`)));
    }
  }

  getAll() {
    this.studentsChanged.next(this.studentsChanged.value);
  }

  canCreateOrUpdateStudent(currentStudents: Student[], firstName: string, lastName: string): boolean {
    let canCreate = true;
    if (currentStudents.find(x => x.firstName === firstName && x.lastName === lastName)) {
      this.studentsChanged.error(console.error('can not create a new student with that name, because they already exist'));
      canCreate = false;
    }
    else if (firstName === '' || lastName === '') {
      this.studentsChanged.error(console.error('can not create a new student with no first name or last name'));
      canCreate = false;
    }

    return canCreate;
  }

  getStudentIndex(wholename: string): number {
    let names = wholename.split(' ');
    let firstName = names[0];
    let lastName = names[1];

    return this.getSnapshot().findIndex(s => s.firstName === firstName && s.lastName === lastName);
  }

  getFullNames(students: Student[]): string[] {
    return students.map(x => x.firstName + ' ' + x.lastName);
  }

  private getNextId(): number {
    return this.getSnapshot().map(x => x.id).reduce((x, y) => x > y ? x : y) + 1;
  }

  private updateAndNotify(currentStudents: Student[], student: Student) {
    let oldStudentIndex = currentStudents.findIndex(x => x.id === student.id);
    currentStudents.splice(oldStudentIndex, 1);
    currentStudents.push(student);
    this.studentsChanged.next(currentStudents);
  }

  private getSnapshot(): Student[] {
    return this.studentsChanged.value;
  }
}
