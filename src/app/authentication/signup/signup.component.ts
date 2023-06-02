import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Customvalidator } from 'src/app/services/validators/customvalidator';
import { CommonService } from 'src/app/services/common.service';
import { Subscription } from 'rxjs';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signup
  public CountryCodes: any = [
    { CountryCode: "+1", CountryName: "United States" },
  ]
  public stateList: any = []
  public cityList: any = []
  private subscription: Subscription[] = []
  constructor(private fb: FormBuilder, public dialog: MatDialog, public dialogref: MatDialogRef<SignupComponent>, public cService: CommonService, public GlobalService: GlobalService) {
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
        // Validators.maxLength(15),
        Customvalidator.patternValidator(/\d/, { hasNumber: true }),
        Customvalidator.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        Customvalidator.patternValidator(/[a-z]/, { hasSmallCase: true }),
        Customvalidator.patternValidator(/[!@#$%^&*]/, { hasSpecialCharacter: true }),
      ]],
      cpassword: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
    this.GetCountryCode()
  }
  get formControls() {
    return this.signup.controls
  }
  GetCountryCode() {
    this.subscription.push(this.GlobalService.getServiceRequest('User/GetAllCountry').subscribe((res: any) => {
      if (res['Status'] == true) {
        this.CountryCodes = res.Data
      }
    }))
  }
  getStateByZipCode(event: any) {
    let zipcode = event.target.value
    this.subscription.push(this.GlobalService.getServiceRequest('VehiclePost/GetSateByZip?zipcode=' + zipcode).subscribe(
      (res: any) => {
        if (res['Status'] == true) {
          this.cityList = res.Data
          if (res.Data.length == 1) {
            this.signup['city'] = res.Data[0].Id
          }
        }
      }
    ))
  }
  getCityByZipCode(event: any) {
    let zipcode = event.target.value
    this.subscription.push(this.GlobalService.getServiceRequest('VehiclePost/GetCityByZip?zipcode=' + zipcode).subscribe(
      (res: any) => {
        if (res['Status'] == true) {
          this.stateList = res.Data
          if (res.Data.length == 1) {
            this.signup['state'] = res.Data[0].Id
          }
        }
      }
    ))
  }
  onSubmit() {
    console.log(this.formControls)
    console.log(this.signup.value)
  }
  formatphone(val: any) {
    if (val != '' || val != undefined || val != null) {
      let num = val.toString()
      let res = this.cService.formatnumber(num, 'p')
      this.signup.get('ph_no').patchValue(res)
    }
  }
  matchPasswd(val: any) {
    let matchPasswd = val.target.value
    let passwd = this.signup.get('password').value
    if (matchPasswd != passwd) {
      this.signup.get('cpassword').setErrors({ hasNoPasswordMatch: true })
    }
  }
  modifyPasswd(val: any) {
    let inputval = val.target.value
    if (inputval == '') {
      return
    } else if (inputval != '' || inputval != 'undefined' || inputval != null) {
      inputval = this.cService.transformData(inputval)
      this.signup.get('password').patchValue(inputval)
    }
  }
  reset() {
    this.signup.reset()
  }
  Onnoclick() {
    this.dialogref.close()
  }

}
