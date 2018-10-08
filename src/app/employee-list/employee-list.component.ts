import { Component, OnInit } from '@angular/core';
import employee from '../employee'

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employee = employee

  constructor() { }

  ngOnInit() {
  }

  public removeEmployee (index: number): void {
    this.employee.splice(index, 1)
  }

}
