import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { QuestionnaireModel } from '../../shared/models/questionnaire.model';
import { SITE_HOST_URL } from '../../shared/index';

@Injectable()
export class QuestionnaireService {
  constructor(private http: HttpClient) {}

  private handleError(error) {
    console.error(error);
    return Observable.throw(error || 'server error');
  }

  //根据id获取问卷信息
  getQuestionnaireById(id: string) {
    return this.http
      .get(SITE_HOST_URL + 'questionnaire/' + id)
      .map((res: any) => <QuestionnaireModel>res.data)
      .catch(this.handleError);
  }

  getQuestionnaires() {
    return this.http
      .get(SITE_HOST_URL + 'questionnaires')
      .map((res: any) => <QuestionnaireModel[]>res.data)
      .catch(this.handleError);
  }

  //添加新问卷
  addQuestionnaire(questionnaire: QuestionnaireModel) {
    return this.http
      .post(SITE_HOST_URL + 'questionnaire/add', questionnaire)
      .map((res: any) => <QuestionnaireModel>res.data)
      .catch(this.handleError);
  }

  //删除已有问卷
  deleteQuestionnaire(id: string) {
    return this.http
      .get(SITE_HOST_URL + 'questionnaire/delete/' + id)
      .map((res: any) => <Object>res.data)
      .catch(this.handleError);
  }

  //更新已有问卷
  updateQuestionnaire(questionnaire: QuestionnaireModel) {
    return this.http
      .post(SITE_HOST_URL + 'questionnaire/update', questionnaire)
      .map((res: any) => <QuestionnaireModel>res.data)
      .catch(this.handleError);
  }

  //发布问卷
  publishQuestionnaire(id: string) {
    return this.http
      .get(SITE_HOST_URL + 'questionnaire/publish/' + id)
      .map((res: any) => <QuestionnaireModel>res.data)
      .catch(this.handleError);
  }

  //回收问卷
  reclaimQuestionnaire(questionnaire: QuestionnaireModel) {}
}
