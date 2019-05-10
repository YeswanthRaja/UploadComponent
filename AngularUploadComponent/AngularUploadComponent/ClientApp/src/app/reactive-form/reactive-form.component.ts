import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { phoneNumberValidator } from '../validators/mobilenumber-validator';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent  {

  form: FormGroup;
 
  DetailsForm: FormGroup;

  bsValue = new Date();
  bsRangeValue: Date[];
  minDate: Date;
  maxDate: Date;
  datePicker: Date[] = [null, null];

  _bsDatepickerConfig: BsDatepickerConfig;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "firstName": ["", Validators.required],
      "password": ["", Validators.required]
    });

    this.DetailsForm = this.createFormGroup();
  }

  onSubmit() {
    console.log("model-based form submitted");
    console.log(this.form);
  }

  

  createFormGroup() {
    return new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      mobile: new FormControl('', [Validators.required, Validators.pattern("[0-9]{0-10}"), Validators.maxLength(10) ])
    });
  }

  onFormSubmit() {
  }

  revert() {
    this.DetailsForm.reset();
  }

  get mobile() {
    return this.DetailsForm.get('mobile');
  }

  get email() {
    return this.DetailsForm.get('email');
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'mobile': [
      { type: 'required', message: 'Mobile is required' },
      { type: 'pattern', message: 'Enter a valid Mobile Number' },
      { type: 'maxLength', message: 'Mobile number should not be exceeded more than 10 digits.' }
    ]
    
  }
}
