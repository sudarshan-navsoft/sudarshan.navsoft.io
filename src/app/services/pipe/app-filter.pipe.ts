import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFilter'
})
export class AppFilterPipe implements PipeTransform {

  transform(value: any, searchtext:string): any {
    if (!value) {return []}
    if (!searchtext) {
      return value
    }
    searchtext = searchtext.toLowerCase()
    return value.filter((val:any)=>{return val.toLowerCase().includes(searchtext)});
  }

}
