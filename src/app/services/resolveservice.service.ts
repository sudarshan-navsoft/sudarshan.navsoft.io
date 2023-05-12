import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { MetaServiceService } from './meta-service.service';

@Injectable({
  providedIn: 'root'
})
export class ResolveserviceService implements Resolve<any> {

  constructor(private _metaservice:MetaServiceService) { }
  resolve(route: ActivatedRouteSnapshot) {
      let metadata:any={
        'title':'Sudarshan'
      }
      this._metaservice.setMetaData(metadata)
  }
}
