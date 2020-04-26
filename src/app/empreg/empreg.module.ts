import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpRegisterComponent } from './emp-register/emp-register.component';
import {RouterModule} from '@angular/router';
import { LoginempComponent } from './loginemp/loginemp.component';


@NgModule({
  declarations: [EmpRegisterComponent, LoginempComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:EmpRegisterComponent},
      {path:'login',component:LoginempComponent}
  
  ]) 
  ]
})
export class EmpregModule { }
