import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {
  

  private initialColor: string ='#f5f5f5';
  private defaultColor: string ='#009688';
  private defaultHeight: number = 320;
  constructor(private el:ElementRef) { 
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
  }


  @Input('appBorderCard') borderColor: string ;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);

  }

  @HostListener('mouseleave') onMouseLeave() {
   this.setBorder(this.initialColor);
  }
  setHeight(height:number) {
    this.el.nativeElement.style.height = height+'px';
  }
  setBorder(color: string) {
    let border = '4px solid ' + color; // Added 'px solid'
    this.el.nativeElement.style.border = border;
  }
}
