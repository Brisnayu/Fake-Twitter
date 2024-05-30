import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  @HostBinding('style.backgroundColor') public backgroundColor: string = '#254047';

  @HostListener('mouseenter') public onMouseEnter() {
    this.backgroundColor = '#3ADB92';
  }

  @HostListener('mouseleave') public onMouseLeave() {
    this.backgroundColor = '#254047';
  }
}
