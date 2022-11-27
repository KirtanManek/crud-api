import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentsService } from '../api-students.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  data:Student[] = [];
  constructor(private __api: ApiStudentsService, private __actRoute: ActivatedRoute, private __router: Router){

  }

  ngOnInit(){
    this.__api.getAllStudent().subscribe((res:any) => {
      this.data = res;
    });
  }

  delete(id:any){
    this.__api.deleteStudentById(id).subscribe((res:any)=>{
      this.__router.navigate(['/students'])
      .then(()=>{
        window.location.reload();
      });
    });
  }
}