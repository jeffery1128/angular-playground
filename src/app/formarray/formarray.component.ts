import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formarray',
  templateUrl: './formarray.component.html',
  styleUrls: ['./formarray.component.css']
})
export class FormarrayComponent {
    form = new FormGroup({
      topics: new FormArray([])
    })

    addTopics(newTopics : HTMLInputElement){
      this.topics?.push(new FormControl(newTopics.value))
      newTopics.value="";    
    }

    get topics(){
      return this.form.get('topics') as FormArray;
    }

    removeTopic(topic:AbstractControl){
      let index = this.topics.controls.indexOf(topic)
      this.topics.removeAt(index);
    }
}
