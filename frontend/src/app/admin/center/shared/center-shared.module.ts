import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireItemComponent } from './questionnaire-item/index';
import { QuestionnaireDetailComponent } from './questionnaire-detail/index';
import { QuestionnaireControlsComponent } from './questionnaire-controls/index';

@NgModule({
  imports: [CommonModule],
  declarations: [QuestionnaireItemComponent, QuestionnaireDetailComponent, QuestionnaireControlsComponent],
  exports: [QuestionnaireItemComponent, QuestionnaireDetailComponent, QuestionnaireControlsComponent, CommonModule]
})
export class CenterSharedModule { }
