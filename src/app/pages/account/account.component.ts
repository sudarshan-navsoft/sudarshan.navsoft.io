import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AccountService } from 'src/app/account.service';
import { Account } from 'src/app/services/model/account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  data:any
  constructor(private route: ActivatedRoute, 
    private router: Router, 
    private acctService: AccountService){ }
  ngOnInit(): void {
    console.log(this.route, 'route');
    
    this.route.data.subscribe((data: Data) => {
      // this.data = data['account'];
      console.log(data,'data');
      
    });
  }


}
