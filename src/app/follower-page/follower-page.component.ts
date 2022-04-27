import { Component, OnInit } from '@angular/core';
import {GithubFollowerService} from '../Services/github-follower.service'
@Component({
  selector: 'app-follower-page',
  templateUrl: './follower-page.component.html',
  styleUrls: ['./follower-page.component.css']
})
export class FollowerPageComponent implements OnInit {
  result :any;
  constructor(private service:GithubFollowerService) { }

  ngOnInit(): void {
    this.service.getfollowers().subscribe(
      response=>{
        this.result = response;
      }
    )
  }

}
