import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './employee-form.component';

@NgModule({
  declarations: [EmployeeFormComponent],
  imports: [
     CommonModule
  ]
})
export class EmployeeFormModule { }
