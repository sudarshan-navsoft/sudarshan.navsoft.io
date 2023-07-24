import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-notes-add-edit',
  templateUrl: './notes-add-edit.component.html',
  styleUrls: ['./notes-add-edit.component.scss']
})
export class NotesAddEditComponent implements OnInit, AfterViewInit{
  isLoaded:boolean=false
  public NotesForm: any
  public notetype: string = 'ADD'
  public userEditId:string=''
  public editFlag:boolean = false
  constructor(private fb: FormBuilder, public _globalService: GlobalService, public router:Router, public route:ActivatedRoute) {
    this.NotesForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      createdBy: [''],
      // fileAttachment:['']
    })

  }

  ngOnInit(): void {
    //setting userId to LocalStorage 
    localStorage.setItem('userId', '7986465465476')
    // console.log('snapId', this.route.snapshot.params['id']);

    this.userEditId=this.route.snapshot.params['id']
    if (this.userEditId != undefined && this.route.snapshot.url[0].path != 'addnotes') {
      this.isLoaded=true
      this.notetype = "EDIT"
      this.editFlag = true
      this._globalService.postServiceRequest('getdetailsById',this.userEditId).subscribe({
        next: (res:any)=>{
          // console.log(res);
          this.NotesForm.patchValue(res.data)
          this.isLoaded = false
        },
        error:(err:any)=>{
          // console.error(err.message);
          this.isLoaded=false
        }
      })
    } 

  }
  ngAfterViewInit(): void {

  }

  get formControls() {
    return this.NotesForm.controls
  }

  onSubmit() {
    console.log('formvalue==>', this.NotesForm.value);
    console.log(this.NotesForm);
    // return
    let userId = localStorage.getItem('userId')
    if (userId) {
      this.NotesForm.get('createdBy').patchValue(userId)
    }
    if (this.NotesForm.status == 'VALID') {
      if (this.editFlag = true) {
        this.editnotes()
      } else{
        this.addnotes()
      }
    }
    return
    

  }
  addnotes(){
    let data = this.NotesForm.value
    console.log('req_data==>', data);
    this._globalService.postServiceRequest('addNote', data).subscribe((val: any) => {

    })

  }
  editnotes(){
    let data = this.NotesForm.value
    console.log('req_data==>', data);
    this._globalService.putServiceRequest('editNote', data).subscribe((val: any) => {

    })
  }
}
