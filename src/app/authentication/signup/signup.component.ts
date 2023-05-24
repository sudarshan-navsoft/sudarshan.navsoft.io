import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Customvalidator } from 'src/app/services/validators/customvalidator';
import * as phonedata from '../../../assets/JSON/phone.json';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signup
  public CountryCodes = [
    { name: '+91', value: '+91' },
    { name: '+1', value: '+1' },
    { name: '+9', value: '+9' }
  ]
  constructor(private fb: FormBuilder, public dialog: MatDialog, public dialogref: MatDialogRef<SignupComponent>, public cService: CommonService) {
    this.signup = this.fb.group({
      fname: ['', [Validators.required]],
      lname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      c_code: ['+91'],
      ph_no: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(14)]],
      zip: ['', [Validators.maxLength(6)]],
      state: [''],
      city: [''],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(15),
        Customvalidator.patternValidator(/\d/, { hasNumber: true }),
        Customvalidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        Customvalidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
        Customvalidator.patternValidator(/[!@#$%^&*]/, { hasSpecialCharacter: true }),
      ]],
      cpassword: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  get formControls() {
    return this.signup.controls
  }
  onSubmit() {
    let passwd = this.signup.get('password').value
    let confirmPassword = this.signup.get('cpassword').value
    if (confirmPassword != passwd) {
      this.signup.get('cpassword').setErrors({ hasNoPasswordMatch: true })
    }
    console.log(this.formControls)
    console.log(this.signup.value)
  }
  formatphone(val: any) {
    console.log(val)
    // return
    if (val != '' || val != undefined || val != null) {
      let num = val.toString()
      let res = this.cService.formatnumber(num, 'p')
      this.signup.get('ph_no').patchValue(res)
    }
  }
  reset() {
    this.signup.reset()
    // this.dialogref.close()
  }
  Onnoclick() {
    this.dialogref.close()
  }

}
