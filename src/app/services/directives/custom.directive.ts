import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { CommonService } from '../common.service';
import { Customvalidator } from '../validators/customvalidator';

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
@Directive({
  selector: '[matchPassword]'
})

export class matchPasswordDirective{
  public el:any
  constructor(private elementRef: ElementRef, private CValidate: Customvalidator) {
    this.el = this.elementRef.nativeElement as HTMLInputElement
  }
  ngOnInIt(){
    if (this.el.value && this.el.value != '') {
      this.el.value
    }
  }
}

@Directive({
  selector:'[apphighlight]'
})

export class apphighlightDirective{
  @Input() appHighlight: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.appHighlight || 'yellow')
  }
  @HostListener('mouseout') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color:string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    // this.renderer.
    
  }
}