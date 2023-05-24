import { Directive, ElementRef, HostListener } from '@angular/core';
import { CommonService } from '../common.service';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor() { }

}
@Directive({
  selector: '[customphoneformat]'
})
export class customphoneformatDirective {
  private el: any
  private curKey: any = 0;

  constructor(private elementRef: ElementRef, private Cservice: CommonService) {
    this.el = this.elementRef.nativeElement as HTMLInputElement
  }
  ngOnInIt() {
    this.curKey = 0;
    if (this.el.value) {
      if (this.el.value != '') {
        this.el.value = this.Cservice.formatnumber(this.el.value, 'p');
      }
    }
  }
  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    let e = <KeyboardEvent>event;
    this.curKey = e.keyCode;
  }
  @HostListener("keyup", ["$event.target.value"]) onkeyup(value: any) {
    if (value != '' && this.curKey != 8 && this.curKey != 37) {
      this.el.value = String(this.Cservice.formatnumber(this.el.value, 'p')); // transform
    }
  }

}
