import { Pipe, PipeTransform } from '@angular/core';
// import { error } from 'console';

@Pipe({
  name: 'upperCase'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return value;
    if (typeof value != 'string') {
      return value
    }
    return value.toUpperCase()
  }

}
