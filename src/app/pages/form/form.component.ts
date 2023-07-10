import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/services/common.service';
import { FileUploadService } from 'src/app/services/file-upload.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public empForm: any

   
  //fileUpload 
  selectedFiles: FileList;
  progressInfos:any[] = [];
  message = '';

  fileInfos: Observable<any>;
  //

  constructor(private fb: FormBuilder , private uploadService: FileUploadService , public CmnService:CommonService) {
    this.empForm = this.fb.group({
      employees: this.fb.array([])
    })
    
  }

  ngOnInit(): void {
    //fileUploads
    this.fileInfos = this.uploadService.getFiles();
    //
  }
  get Employees() {
    return this.empForm.controls['employees'] as FormArray
  }
  addEmployee() {
    this.Employees.push(this.newEmployee())
  }

  get formControls() {
    return this.empForm.controls
  }
  newEmployee(): FormGroup {
    return this.fb.group({
      fname: [''],
      lname: ['']
    })
  }
  removeEmp(empIndex: number) {
    this.Employees.removeAt(empIndex)
  }
  onSubmit() {
    console.log(this.empForm.value)
  }
  OpenSnack(){
    this.CmnService.OpenSnackbarCom()   
  }

  //fileUpload
   
  selectFiles(event: any) {
    this.progressInfos = [];

    const files = event.target.files;
    let isImage = true;

    for (let i = 0; i < files.length; i++) {
      console.log('files', files[i]);
      console.log(new Date(files[i].lastModified).getFullYear());
      console.log('filesize',files[i].size*0.001);
      if (files.item(i).type.match('image.*')) {
        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }

    if (isImage) {
      this.selectedFiles = event.target.files;
    } else {
      this.selectedFiles = undefined;
      event.srcElement.percentage = null;
    }
  }

  uploadFiles() {
    this.message = '';

    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
  }

  upload(idx: any, file: any) {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    this.uploadService.Upload(file).subscribe({
      next: event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      error: err => {
        console.log(`${{err}}`);
        
        this.progressInfos[idx].percentage = 0;
        this.message = 'Could not upload the file:' + file.name;
      }});
  }
}
