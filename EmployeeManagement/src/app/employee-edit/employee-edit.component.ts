import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../employee-form/employee.model';

@Component({
 // selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  emp:Employee[];
  id: number;
  constructor(private _employeeservice:EmployeeService,private router:Router,private _route:ActivatedRoute) {
    
    // this.emp=this._employeeservice.getEmployee();
    // this.id=+(this._route.snapshot.paramMap.get(this.emp['id']));
    // alert(this.id);
  }
  
  ngOnInit(){

    // alert(this.emp.find((value: { firstname: string; })=>{
    //   return value.firstname === 'firstname';
    // }).firstname);

    //alert(id); 
    //this.emp=this._employeeservice.getEmployee()[id];
    //alert(this.emp);
  }
  // model=new Employee(this.id,"");
  edit_form(){
    this.router.navigate(['employee-list']);
  }
}
