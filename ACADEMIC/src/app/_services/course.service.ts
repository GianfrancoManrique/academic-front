import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  baseUrl = 'https://localhost:44380/api/'

  constructor(private http:HttpClient) { }
  
  postCourse(model:any){
    return this.http.post(this.baseUrl+'course',model);
  }

}
