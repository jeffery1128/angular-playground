import { Component, OnInit } from '@angular/core';
import { FormBuilder,ValidationErrors, Validators } from '@angular/forms';
import { passwordValidator } from './password.validator';


@Component({
  selector: 'app-changepwform',
  templateUrl: './changepwform.component.html',
  styleUrls: ['./changepwform.component.css']
})
export class ChangepwformComponent {
  form;
  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      oldpw: fb.control('',Validators.required,passwordValidator.matchingOldPassword),
      newpw: fb.control('',Validators.required),
      confirmpw : fb.control('',[Validators.required])
    },
    {'validators': passwordValidator.matchingNewPassword})
  }

  get oldpw(){
    return this.form.get('oldpw');
  }

  get newpw(){
    return this.form.get('newpw');
  }

  get confirmpw(){
    return this.form.get('confirmpw');
  }
  
  changepw(){
    console.log(this.form);
  }
}


