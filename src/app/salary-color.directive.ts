import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]'
})
export class SalaryColorDirective {

  @Input() salaryColor

  constructor(private elemet: ElementRef) {
    const VALOR = parseFloat(this.salaryColor)

    if (VALOR > 3000) {
      this.changeColor('green')
    } else {
      this.changeColor('red')
    }
  }

  changeColor (color) {
    this.elemet.nativeElement.style.color = color
  }

}
