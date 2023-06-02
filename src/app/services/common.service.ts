import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackbar: MatSnackBar) { }

  openSnackbar(messege: string, action: string) {
    this.snackbar.open(messege, action, { duration: 4000 })
  }

  clearspaces(value: string) {
    if (value != null || typeof value != undefined) {
      var response = value.replace(/[$,()-\s]/gm, '')
    }
    return response
  }

  formatnumber(number: string, formatType: string) {
    let fullnumber = '';
    number = this.clearspaces(number)
    if (number != '' || number != undefined || number != null) {
      let fst_part = number.slice(0, 3);
      let snd_part = number.slice(3, 6);
      let trd_part = number.slice(6, 10);
      if (formatType == 'p') {
        fullnumber = '(' + fst_part + ')' + ' ' + snd_part + '-' + trd_part
      } else if (formatType == 'i') {
        let fst_part = number.slice(0, 5);
        let snd_part = number.slice(5, 10);
        fullnumber = fst_part + ' ' + snd_part
      }
    }
    return fullnumber
  }
  transformData(data:string){
    let output = ''
    data = this.clearspaces(data)
    data = data.replace(/[ThisIsDangerousVery]/gm,'')
    output = 'ThisIsDangerous'+data+'VeryDangerous'
    return output
  }
  
}
