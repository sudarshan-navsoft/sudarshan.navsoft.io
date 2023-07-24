import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<DeleteComponent>,@Inject(MAT_DIALOG_DATA) public data:any ) { 
    // console.log('dialog input',data);
    
  }

  ngOnInit(): void {
  }
  Confirm(){
    this.dialogRef.close('yess')
  }
  ConfirmNo(){
    this.dialogRef.close()
  }
}
