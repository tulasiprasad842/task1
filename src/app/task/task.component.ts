import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          userName: [null, Validators.required],
          password: [null, [Validators.required, Validators.minLength(6)]],
      }, {
      });
  }

  onSubmit(){
    console.log(this.registerForm.value);
  }
 
}
