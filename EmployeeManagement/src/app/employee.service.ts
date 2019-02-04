import { Injectable } from '@angular/core';
import { Employee } from './employee-form/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployee():Employee[]{
    return[
      {
        id:1,
        firstname:"ABCD"
      },
      {
        id:2,
        firstname:"Tufel Chauhan"
      },
      {
        id:3,
        firstname:"Ali Asgar"
      },
      {
        id:4,
        firstname:"Rahul"
      }
    ]
  }

  constructor() { }
  }
