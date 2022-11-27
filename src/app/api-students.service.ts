import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentsService {

  apiUrl = "https://6380ce4e786e112fe1ba93e7.mockapi.io/students";
  constructor(private __http:HttpClient) { }

  getAllStudent(){
    return this.__http.get(this.apiUrl);
  }

  getStudentById(id:any){
    return this.__http.get(this.apiUrl + '/' + id);
  }

  deleteStudentById(id:any){
    return this.__http.delete(this.apiUrl + '/' + id);
  }
}