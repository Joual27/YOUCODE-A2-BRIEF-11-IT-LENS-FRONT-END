import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environments} from '../../../../environments/environment';
import {AnswerToMultipleQuestions, AnswerToQuestion, EditionApiResponse, ParticipationApiResponse} from '../models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {
  apiUrl = environments.apiUrl;
  http = inject(HttpClient);
  constructor() { }

  answerToQuestion(data : AnswerToQuestion , surveyId : number): Observable<ParticipationApiResponse> {
    return this.http.post<ParticipationApiResponse>(`${this.apiUrl}/surveys/${surveyId}/participate` , data);
  }

  answerToMultipleQuestions(data: AnswerToMultipleQuestions, surveyId: number): Observable<ParticipationApiResponse> {
    return this.http.post<ParticipationApiResponse>(
      `${this.apiUrl}/surveys/${surveyId}/participate`,
      data
    );
  }

  getEditionData(editionId : number): Observable<EditionApiResponse> {
    return this.http.get<EditionApiResponse>(`${this.apiUrl}/editions/${editionId}`);
  }

}
