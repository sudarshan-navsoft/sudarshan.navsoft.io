import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  public signin 
  constructor(private formBuilder: FormBuilder , public _globalService: GlobalService , private _cookie: CookieService,private router: Router , public dialogref: MatDialogRef<SigninComponent>) { 
    this.signin=this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password:['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.signin.value);
    let data = this.signin.value

    var loginEmail = data.email;
    var loginPassword = data.password;
    var loginScope = "User";
    var loginGrant_type = "password";
    this._globalService.postServiceRequest('User/UserLogin/',data).subscribe((val:any)=>{
      console.log('response==>,', val)

      if (val.Status==true) {
        this._cookie.set('isLoggedIn','true');
        localStorage.setItem('isLoggedIn','true')
        // this._cookie.set()
        // this.router.navigate(['/'])
        location.reload()
        let authTokenParm = new URLSearchParams();
        authTokenParm.set('grant_type', loginGrant_type);
        authTokenParm.set('UserName', loginEmail);
        authTokenParm.set('Password', loginPassword);
        authTokenParm.set('Scope', loginScope);
        let body = decodeURIComponent(authTokenParm.toString());
        // let body = {
        //   'grant_type':loginGrant_type,
        //   'UserName':loginEmail,
        //   'Password' : loginPassword,
        //   'Scope' : loginScope
        // };
        console.log(body)
        this.dialogref.close(val)
        this._globalService.postServiceForToken('Logval',body).subscribe((res:any)=>{
          console.log('res--',res);
          
        })
              
      }
    })
  }
  getErrorMessage(){

  }
}
