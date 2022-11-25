import { Component } from '@angular/core';
import { ApiStudentsService } from '../api-students.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  data:Student[] = [];
  constructor(private __api:ApiStudentsService){

  }

  ngOnInit(){
    this.__api.getAllStudent().subscribe((res:any) => {
      this.data = res;
    });
  }
}