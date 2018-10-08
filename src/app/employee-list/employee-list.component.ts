import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service'
import employee from '../employee'

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService ) { }

  ngOnInit() {
  }

  public removeEmployee (index: number): void {
    this.employeeService.employee.splice(index, 1)
  }

}
