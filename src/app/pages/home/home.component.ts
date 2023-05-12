import { Component, OnInit, ViewChild } from '@angular/core';
import {GlobalConstantsService} from '../../services/global-constants.service'
import { Observable } from 'rxjs';
import { UppercasePipe } from 'src/app/services/pipe/uppercase.pipe';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  public display :any = 'sudarshan';
 
  constructor(private _global:GlobalConstantsService,  public custompaginator: MatPaginatorIntl) {
    this.custompaginator.itemsPerPageLabel = 'Showing'
    // console.log(_global.testtext);
    let test = new Observable((observer)=>{
      observer.next("1")
      observer.next(2)
    })
    test.subscribe((val:any)=>{
      // console.log(val);
      
    }),
    ()=>{
    console.log('completed'); 
    }

   }

  ngOnInit(): void {
    // localStorage.setItem('loginDetails','name:sudarshan,company:Navsoft')
    // console.log((localStorage.getItem('loginDetails')));
    
  }
}
