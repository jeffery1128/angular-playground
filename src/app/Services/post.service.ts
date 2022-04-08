import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) {
     
   }

  getPost(){
    return this.http.get(this.url);
  }

  createPost(body:any){
    return this.http.post(this.url,JSON.stringify(body))
  }

  updateTitle(result:any){
    return this.http.patch(this.url+'/'+result.id ,JSON.stringify({isliked:!result.isliked}))
  }

  deleteTitle(id:any){
    return this.http.delete(this.url+id).pipe(
      catchError()
    )
  }


}
