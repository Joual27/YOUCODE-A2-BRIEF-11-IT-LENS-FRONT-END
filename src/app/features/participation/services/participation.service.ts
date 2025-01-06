import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environments} from '../../../../environments/environment';
import {AnswerToQuestion, ParticipationApiResponse} from '../models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {
  apiUrl = environments.apiUrl;
  http = inject(HttpClient);

  constructor() { }

  answerToQuestion(data : AnswerToQuestion): Observable<ParticipationApiResponse> {
    return this.http.post<ParticipationApiResponse>(`${this.apiUrl}/surveys/` , data);
  }
}
