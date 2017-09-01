import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { AlertModule } from 'ngx-bootstrap';
import { UserSharedModule } from './shared/user-shared.module';
import { UserRoutingModule } from './user-routing.module';

import { LoginComponent, RegisterComponent } from './shared';

@NgModule({
  imports: [CommonModule, SharedModule, AlertModule, UserSharedModule, UserRoutingModule],
  declarations: [ LoginComponent, RegisterComponent ],
  exports: [CommonModule, UserSharedModule]
})
export class UserModule { }
