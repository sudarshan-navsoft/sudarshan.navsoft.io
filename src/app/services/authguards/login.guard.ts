import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  public isLoggedIn:any=false  
  
  constructor(private _router:Router , private _cookie: CookieService){
    if (localStorage.getItem('isLoggedIn')) {
      this.isLoggedIn=true      
    }
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log('loginguard');
      
      if (this.isLoggedIn==true) {
        // window.alert('you are logged In')
        return true
      } else {
      // window.alert('You are not Logged In')
      this._router.navigate(['/'])
     
    
      
      return false;
    }
  }
  
}
