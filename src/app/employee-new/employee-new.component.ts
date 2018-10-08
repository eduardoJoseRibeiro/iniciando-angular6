import { Component, OnInit } from '@angular/core';
import employee from '../employee';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  public nome: string = ''
  public salario: number = 0
  public bonus: number = 0
  private employee = employee

  constructor() { }

  ngOnInit() {
  }

  private resetInput (): void {
    this.nome = ''
    this.salario = 0
    this.bonus = 0
  }

  public addEmployee (): void {
    if (this.salario > 3000) {
      this.bonus = 0
    }

    this.employee.push(
      {
        nome: this.nome,
        salario: this.salario,
        bonus: this.bonus
      }
    )
    this.resetInput()
  }
}
