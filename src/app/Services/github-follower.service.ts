import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GithubFollowerService {
  url = 'https://api.github.com/users/mosh-hamedani/followers';
  constructor(private http:HttpClient) { }

  getfollowers(){
    return this.http.get(this.url)
  }
}
