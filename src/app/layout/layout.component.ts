import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
// import { filter } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((e:any)=>{
      if (e instanceof NavigationEnd) {
        // console.log(e);
        
      }
    })
    
  }
  menubar(event:any){
    this.router.navigate([event])
  }

}
