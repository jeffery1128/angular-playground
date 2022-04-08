import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../Services/post.service';

@Component({
  selector: 'app-httptest',
  templateUrl: './httptest.component.html',
  styleUrls: ['./httptest.component.css']
})
export class HttptestComponent implements OnInit{
  results:any;
  constructor(private service:PostService ) { 
  }
  ngOnInit(): void {
    this.service.getPost().subscribe(
      response=>{
      this.results = response;
      },
      error=>{
        alert('An unexpected error occurred');
        console.log(error);
      });
  }

  createTitle(newTitle :HTMLInputElement){
    let body:any = {'title' : newTitle.value};
    newTitle.value=''; 
    this.service.createPost(body)
    .subscribe(
      response=>{
      body.id = response;
      this.results.splice(0,0,body);
      console.log(response);
    },
      (error:Response)=>{
        if(error.status===400){
          alert('Bad Request');
        }
        else{
          alert('An unexpected error occurred');
          console.log(error);
        }
      }
    )
  }

  updateTitle(result:any){
    this.service.updateTitle(result)
    .subscribe(response=>{
      console.log(response);
    })
  }

  deleteTitle(result:any){
    this.service.deleteTitle(result.id)
    .subscribe(
      response=>{
      let index = this.results.indexOf(result);
      this.results.splice(index,1);
      },
      (error:Response)=>{
        if (error.status === 404){
          alert('This post has already deleted');
        }
        else{
          alert('An unexpected error occurred');
          console.log(error);
        }
      })
  }

}
