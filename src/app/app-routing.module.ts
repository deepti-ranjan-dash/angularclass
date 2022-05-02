import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about-us', component:AboutComponent, 
    children:[
      {path:'company', component:CompanyComponent},
      {path:'employee', component:EmployeeComponent}
    ]
  },
  {path:'sign-in/:userId/:cid', component:SignInComponent},
  {path:'sign-up', component:SignUpComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
