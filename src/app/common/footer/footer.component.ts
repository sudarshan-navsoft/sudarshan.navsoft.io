import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public date = 2022
  constructor() {
    let d = new Date
    // console.log('today', d.getFullYear());
    this.date = d.getFullYear()}

  ngOnInit(): void {
  }

}
