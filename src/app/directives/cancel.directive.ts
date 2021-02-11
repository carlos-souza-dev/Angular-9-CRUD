import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dirCancel]'
})
export class CancelDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = "#f35d63"
   }

}
