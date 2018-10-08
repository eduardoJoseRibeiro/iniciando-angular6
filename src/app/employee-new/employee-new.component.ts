import { Component, OnInit } from '@angular/core';
import employee from '../employee';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  private employee: Employee = {
    nome: '',
    salario: 0,
    bonus: 0
  }

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  private resetInput (): void {
    this.employee.nome = ''
    this.employee.salario = 0
    this.employee.bonus = 0
  }

  public addEmployee (): void {
    if (this.employee.salario > 3000) {
      this.employee.bonus = 0
    }

    this.employeeService.employee.push(
      {
        nome: this.employee.nome,
        salario: this.employee.salario,
        bonus: this.employee.bonus
      }
    )
    this.resetInput()
  }
}
