import { Injectable } from '@angular/core';
import { Employee } from './employee-form/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   employeeList: Employee[]; 

  constructor() { 
    this.employeeList = new Array<Employee>();
 }
  getEmployee()
  {
    return this.employeeList;
  }

  add_employee(i:number,f:string)
  {
      this.employeeList.push({id:i,firstname:f});
  }
  }
