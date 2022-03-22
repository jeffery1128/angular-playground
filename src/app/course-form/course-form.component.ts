import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent  {
  allCategories = [
    {'id':1,'category':'Computer Science'},
    {'id':2,'category':'Art'},
    {'id':3,'category':'Finance'},
    {'id':4,'category':'Engineering'}
  ]

  submit(f:any){
    console.log(f.form.controls);
  }
}
