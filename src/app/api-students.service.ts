import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiStudentsService {

  apiUrl = 'https://6380ce4e786e112fe1ba93e7.mockapi.io/students';
  constructor(private __http:HttpClient) { }

  getAllStudent(){
    return this.__http.get('https://6380ce4e786e112fe1ba93e7.mockapi.io/students');
  }
}