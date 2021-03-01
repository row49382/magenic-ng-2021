import { K12Grades } from './k12grades';

export class Student {
  id: number;
  firstName: string;
  lastName: string;
  grade: K12Grades;
  studentNotes?: string;
  iepGoals?: string;
}
