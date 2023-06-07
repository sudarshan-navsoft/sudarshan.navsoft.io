import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public empForm: any
  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      employees: this.fb.array([])
    })
  }

  ngOnInit(): void {
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
}
