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
  private employee = employee

  constructor() { }

  ngOnInit() {
  }

  private resetInput (): void {
    this.nome = ''
    this.salario = 0
  }

  public addEmployee (): void {
    this.employee.push({ nome: this.nome, salario: this.salario })
    this.resetInput()
  }
}
