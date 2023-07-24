import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource, _MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { DeleteComponent } from 'src/app/common/delete/delete.component';
import { CommonService } from 'src/app/services/common.service';
import { GlobalService } from 'src/app/services/global.service';
import { PubsubService } from 'src/app/services/pubsub.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit, AfterViewInit {
  public users: any = []
  public isLoaded: boolean = false
  displayedColumns: string[] = ['id', 'name', 'email', 'website', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  totalCount = 0
  pageSize = 5
  currentPage = 0
  pageEvent: any
  public start = 0;
  public end = 0;

  clickedRow: any

  constructor(private _global: GlobalService, private pubsub: PubsubService, private Cservice: CommonService, public router: Router, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.isLoaded = true
    this.getNoteList()
    console.log(this.users)
    this.dataSource
    this.pubsub.on('sudarshan').subscribe(() => {
      this.Cservice.openSnackbar('Observable loaded', 'failure')
    })
  }
  ngAfterViewInit() {

    // this.dataSource.paginator = this.paginator as MatPaginator;
  }
  getNoteList() {
    this._global.getServiceFrom3rdParty("https://jsonplaceholder.typicode.com/users").pipe(retry(3)).subscribe(res => {
      // console.log(res);
      this.users = res
      this.totalCount = Object.keys(res).length
      this.isLoaded = false
    })
  }
  applyfilter(val: any) {
    // console.log(val);
    const filterValue = (val as string);
    this.users.filter = filterValue.trim().toLowerCase()
  }
  onRowClicked(row: object) {
    // console.log('row clicked', row);
    this.clickedRow = row
  }
  handlePage(e: any) {
    console.log('ev--', e);
    this.currentPage = e.pageIndex;
    this.pageSize = e.pageSize;
    this.iterator();
  }
  private iterator() {
    this.end = (this.currentPage + 1) * this.pageSize;
    this.start = this.currentPage * this.pageSize;
    // this.searchConciliation();
  }

  editNotes(id: any) {
    // console.log('edit clicked');/

    this.router.navigateByUrl('users/editnotes/' + id)
  }
  deleteNotes(id: any) {
    let dialogRef = this.dialog.open(DeleteComponent, {
      panelClass: 'DeleteModal',
      width:'400px',
      // height:'500px',
      data: { userId: id }
    })
    dialogRef.afterClosed().subscribe((result) => {
      // console.log('dialog closed', result);
      if (result == 'yess') {
        this._global.postServiceRequest('deletenote', id).subscribe({
          next: (res) => {
            this.getNoteList()
          },
          error: (err) => {
            this.getNoteList()
          }
        })
      }
    })

  }
}
