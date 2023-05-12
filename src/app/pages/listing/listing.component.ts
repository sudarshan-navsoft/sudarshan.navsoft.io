import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit ,AfterViewInit{
  public users:any=[]
  public isLoaded:boolean=false
  displayedColumns: string[] = ['id', 'name', 'email', 'website'];
  dataSource = new MatTableDataSource(this.users);
  @ViewChild(MatPaginator) paginator: MatPaginator |any;

  constructor( private _global:GlobalService) { 

  }

  ngOnInit(): void {
    this.isLoaded=true
     this._global.getServiceRequest("https://jsonplaceholder.typicode.com/users").subscribe(res=>{
      console.log(res);
      this.users=res
      this.isLoaded=false
    })
    console.log(this.users)
  }
  ngAfterViewInit() {
   
    this.dataSource.paginator = this.paginator as MatPaginator;
  }

}
