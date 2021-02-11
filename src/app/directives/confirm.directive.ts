import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[dirConfirm]'
})
export class ConfirmDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.style.color = "#5ed087"
  }

}
