import { Injectable } from '@angular/core';
import { Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, catchError, delay, of } from 'rxjs';
import { AccountService } from '../account.service';

@Injectable({
  providedIn: 'root'
})
export class AccountResolver implements Resolve<Observable<string>> {
  constructor(private acctService:AccountService){

  }
  resolve(): Observable<any>  {
    return this.acctService.getTopPosts().pipe(catchError(()=>{
      return of('data not available at this time');
  }
  ));
  }
}
