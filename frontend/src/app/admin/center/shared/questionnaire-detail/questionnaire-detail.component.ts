import { Component, Input } from '@angular/core';

import { QuestionnaireModel } from '../../../../shared/models/questionnaire.model';

@Component({
  selector: 'questionnaire-detail',
  templateUrl: 'questionnaire-detail.component.html'
})
export class QuestionnaireDetailComponent {

  @Input() questionnaire: QuestionnaireModel;

}
