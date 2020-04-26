import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterEmployeeComponent } from './register-employee/register-employee.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [RegisterEmployeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path:"",component:RegisterEmployeeComponent}])
  ]
})
export class CoreheadModule { }
