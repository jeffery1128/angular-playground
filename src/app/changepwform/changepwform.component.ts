import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-changepwform',
  templateUrl: './changepwform.component.html',
  styleUrls: ['./changepwform.component.css']
})
export class ChangepwformComponent {
  form;
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      oldpw: fb.control,
      newpw: fb.control,
      confirmpw : fb.control
    })
  }

  

}
