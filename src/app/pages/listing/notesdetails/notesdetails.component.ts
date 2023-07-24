import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-notesdetails',
  templateUrl: './notesdetails.component.html',
  styleUrls: ['./notesdetails.component.scss']
})
export class NotesdetailsComponent implements OnInit {
  notesdetails:any
  constructor(public dialogRef: MatDialogRef<NotesdetailsComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { 
    console.log('modaldata==>', this.data);
    this.notesdetails = this.data.data
    console.log('this.notesdetails==>', this.notesdetails);
    
  }

  ngOnInit(): void {
  }

}
