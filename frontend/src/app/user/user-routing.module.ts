import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'register',  component: RegisterComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule { }
