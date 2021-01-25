import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

  title = 'ACADEMIC';
  courses: any;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.getCourses();
  }
 
  getCourses(){
    this.http.get('http://localhost:44380/api/Course').subscribe(response =>{
      console.log(response);
      this.courses= response
    },error=>{
      console.log(error);
    })
  }

}
