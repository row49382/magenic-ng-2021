import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentManagerService } from '../service/student-manager.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  student: Student;

  constructor(
    private studentManager: StudentManagerService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(x => {
      let id = x['id'];
      if (id) {
        this.student = this.studentManager.getAll()[id];
      }
    })
  }

}
