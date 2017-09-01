import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertModule } from 'ngx-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { FieldComponent } from './field/index';
// import { RegisterComponent } from './register/index';

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, SharedModule, AlertModule],
    declarations: [FieldComponent],
    exports: [FieldComponent, CommonModule]
})
export class UserSharedModule { }