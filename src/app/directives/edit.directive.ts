import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dirEdit]'
})
export class EditDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = "#c7c43c"
  }
}
