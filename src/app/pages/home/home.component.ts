import { Component, OnInit, ViewChild } from '@angular/core';
import {GlobalConstantsService} from '../../services/global-constants.service'
import { Observable } from 'rxjs';
import { UppercasePipe } from 'src/app/services/pipe/uppercase.pipe';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { AlertService } from 'src/app/common/alert/alert.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {
  public display :any = 'sudarshan';
  options = {
    autoClose: false,
    keepAfterRouteChange: false
  };
  customOptions: OwlOptions = {
    autoWidth: false,
    autoplay: true,
    autoplayTimeout:3000,
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['test', 'glass'],
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 3
      },
      1600: {
        items: 1
      },
      2400: {
        items: 4
      }
    },
    nav: true
  }
 
  constructor(private _global:GlobalConstantsService,  public custompaginator: MatPaginatorIntl,public alertService: AlertService) {
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
