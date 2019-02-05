import { Component, OnInit } from '@angular/core';
import { Employee }from './employee.model';
import { Router } from '@angular/router';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  qualification: string[];
   experience: string[];
  languages: { LanguageName: string; IsEnabled: boolean; }[];
  str:string="";
  EmployeeListComponent: any;
  employeeList: Employee[];
  //emp:EmployeeListComponent=new EmployeeListComponent();
  constructor(private router:Router,private employeeservice:EmployeeService){}
  
  ngOnInit(){
    this.qualification = ["10th","12th","B.Tech","B.Sc"];
    this.experience = ["Fresher","One Year","Two year","Five Year"];
    this.languages = [{LanguageName:"Java",IsEnabled:true},
    {LanguageName:"c/c++",IsEnabled:false},{LanguageName:"php",IsEnabled:false},
    {LanguageName:"python",IsEnabled:false},{LanguageName:"C#",IsEnabled:true}];
    this.employeeList=this.employeeservice.getEmployee();
  
  }
  model=new Employee(null,"");

  get_checked_values(option: { IsEnabled: boolean; LanguageName: string; },event:any)
  {
    if(event.target.checked)
    {
        this.str+=option.LanguageName+",";
    }
  }

  display_in_console(model:string){
    if(this.employeeservice.getEmployee().length>0){
    this.model.id=this.employeeservice.getEmployee()[this.employeeList.length-1].id+1;
    //alert(this.model.id);
    this.add_Row();
    }
    else{
      this.model.id=1;
      this.add_Row();
    }
    // console.log(model);
    // console.log("firstname:"+this.model.firstname);
    // console.log("languages:"+this.str);
    // this.add_Row();
    // this.router.navigate(['/employee-list']);
  }
   add_Row()
   {
     
    //this.employeeservice.getEmployee().push({id:this.model.id,firstname:this.model.firstname});
    this.employeeservice.add_employee(this.model.id,this.model.firstname);
    //alert("In add_row method");
    this.router.navigate(['/employee-list']);
   }
}
