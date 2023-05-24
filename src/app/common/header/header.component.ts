import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SigninComponent } from 'src/app/authentication/signin/signin.component';
import { SignupComponent } from 'src/app/authentication/signup/signup.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],  
})
export class HeaderComponent implements OnInit {
  @Output() newItemEvent= new EventEmitter()

  public menus:any=[];
  public menusIn:any=[];
  public isLogIn: boolean= false

  constructor(private dialog:MatDialog , private _cookie:CookieService,private router: Router) {
    this.menus=[
      {name:'Home',route:'/home'},
    ]
    this.menusIn=[
      {name:'About',route:'/about'},
      {name:'Users',route:'/users'},
      {name:'Dashboard' , route:'/profile/dashbaord'}
    ]
   }

  ngOnInit(): void {
    // console.log(this.menus);

  }
  ngDoCheck(){
    if (localStorage.getItem('isLoggedIn')=='true') {
      this.isLogIn=true;
      // console.log('LoggedIn');
  }
  }
  goto(val:any){
    // this.newItemEvent.emit(val)
    this.router.navigate([val])
  }
  gotologin(){
    const dialogref= this.dialog.open(SigninComponent,{
      width:'400px',
      data:{},
    })
    console.log('from header');
    
    dialogref.afterClosed().subscribe(res=>{console.log('response afterclosed',res);
    })
  }
  opensignup(){
    this.dialog.open(SignupComponent,{panelClass:'custom_modal'})
  }
  logMeOut(){
    this._cookie.delete('isLoggedIn');
    this._cookie.deleteAll();
    this.router.navigate([''])
    localStorage.clear()
    location.reload()
    
  }
}
