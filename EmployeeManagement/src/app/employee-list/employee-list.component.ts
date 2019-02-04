import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee-form/employee.model';

@Component({
  //selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
   employeeList=[]
  //   {
  //     id:1,
  //     employeeName:"ABCD"
  //   },
  //   {
  //     id:2,
  //     employeeName:"Tufel Chauhan"
  //   },
  //   {
  //     id:3,
  //     employeeName:"Ali Asgar"
  //   },
  //   {
  //     id:4,
  //     employeeName:"Rahul"
  //   }
  // ];

  constructor(private employeeservice:EmployeeService) { }

  ngOnInit() {
    this.employeeList=this.employeeservice.getEmployee();
  }

  delete(index: number){
     //var v=prompt("do you really want to delete");
     if(confirm("Press a button!"))
     {
        this.employeeList.splice(index,1);

     }
     else{
       
     }

  }

}
