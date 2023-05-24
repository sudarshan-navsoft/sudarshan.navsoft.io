import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private comn:CommonService) { }

  ngOnInit(): void {
  }
  openSnack(){
    this.comn.openSnackbar("Hello Sudarshan",'success')
  }
  clicked(){
    this.comn.openSnackbar("hey bro",'success')
  }

}
