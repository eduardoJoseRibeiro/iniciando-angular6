import { Injectable } from '@angular/core';

export interface Employee {
  nome: string
  salario: number
  bonus: number
}

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  employee: Employee[] = []

  constructor() { }
}
