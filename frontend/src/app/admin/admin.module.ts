import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { CenterComponent } from './center';
import { EditComponent } from './edit';

import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { QuestionnaireModule } from '../shared/questionnaire/questionnaire.module';
import { CenterSharedModule } from './center/shared/center-shared.module';
import { EditSharedModule } from './edit/shared/edit-shared.module';

import { TabsModule } from 'ngx-bootstrap';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, SharedModule, TabsModule.forRoot(), QuestionnaireModule, CenterSharedModule, EditSharedModule],
  declarations: [
    AdminComponent,
    CenterComponent,
    EditComponent
  ]
})
export class AdminModule { }
