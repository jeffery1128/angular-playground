import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form_tag = ['Course Form','Sign-up Form','Change Password Form','Form Array','Http Test','Github followers'];
  current_form = 0;

  changepage(newPage:string){
    this.current_form = this.form_tag.indexOf(newPage);
  }
}
