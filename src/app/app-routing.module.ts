import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:'',loadChildren:()=>import('../app/empreg/empreg.module').then(m=>m.EmpregModule) },
  { path:'registeremp',loadChildren:()=>import('../app/corehead/corehead.module').then(m=>m.CoreheadModule)},
  { path:'aboutus',loadChildren:()=>import('../app/aboutusinformation/aboutusinformation.module').then(m=>m.AboutusinformationModule)},
  { path:'contactus',loadChildren:()=>import('../app/contactusinfo/contactusinfo.module').then(m=>m.ContactusinfoModule)}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}) 
export class AppRoutingModule { }
