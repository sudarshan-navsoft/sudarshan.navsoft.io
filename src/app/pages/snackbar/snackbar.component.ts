import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  constructor(public snackBarRef: MatSnackBarRef<SnackbarComponent>, @Inject(MAT_SNACK_BAR_DATA) public data:any) {
    console.log('running');
    console.log(data);
    
   }

  ngOnInit(): void {
  }

}
