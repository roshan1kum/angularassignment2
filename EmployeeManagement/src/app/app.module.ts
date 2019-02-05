import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule } from '@angular/forms';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component'


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeFormComponent,
    EmployeeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'employee-list', component:EmployeeListComponent},
      {path:'employee-form',component:EmployeeFormComponent},
      {path:'employee-edit/:id',component:EmployeeEditComponent}

      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
