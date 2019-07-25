import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  feedBackForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.feedBackForm=this.fb.group({
      Name:[null, Validators.required],
      Email:[null, [Validators.required, Validators.email]],
      mobileNo:[null, [Validators.required, Validators.minLength(10), 
        Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
      Feedback:[null]
       })
  }
  onSubmit(){
    console.log(this.feedBackForm.value);
  }
 
}
