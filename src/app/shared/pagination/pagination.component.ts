import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    CommonModule ,
    MatIconModule,
    MatSelectModule
  ],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit , OnChanges{
  @Input() currentPage: number =1;
  @Input() total: number = 0;
  @Input() limit: number = 20;
  @Output() changePage = new EventEmitter();

  pages: number[] = [];
  pagesCount:number

  selectedpage:number=25
  itemsPerPage:number[]=[25,50,75,100]
  constructor(){
    // this.pagesCount=Math.ceil(this.total/this.limit)
  }
  ngOnInit(): void {
    this.pagesCount = Math.ceil(this.total / this.limit);
    this.pages = this.range(1, this.pagesCount);
    console.log('pagecount',this.pagesCount);
    
    if (this.currentPage<=1) {
      this.currentPage=1
    }else if(this.currentPage>=this.pagesCount){
      this.currentPage=this.pagesCount
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    // const pagesCount = Math.ceil(this.total / this.limit);
    if (this.currentPage<=1) {
      this.currentPage=1
    }else if(this.currentPage>=this.pagesCount){
      this.currentPage=this.pagesCount
    }
    console.log(this.allpages);
    
  }


  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }
  changePageFn(page:any){
    this.changePage.emit(page)
  }
  get allpages(): number[]{
    // let start = Math.max(1, this.currentPage -2)
    // let end = Math.min(this.total, start+4)
    let start = this.currentPage
    let end = this.currentPage+4

    if(end>this.pagesCount){
      start=this.pagesCount-4
      end=this.pagesCount
    }
    const pagesarr=Array.from({length:end - start+1},(_,i)=> i+start)
    if (pagesarr[pagesarr.length-1]<this.pagesCount) {
      pagesarr.push(this.pagesCount)
    }
    return Array.from({length:end - start+1},(_,i)=> i+start)
  }

  changeLimit(item:number){
    this.changePage.emit(this.limit=item)
  }
}
