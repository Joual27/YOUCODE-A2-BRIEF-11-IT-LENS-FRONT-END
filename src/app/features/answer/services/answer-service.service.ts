import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerApiResponse, AnswerCreationModel, AnswerDeleteApiResponse } from '../models/models';
import { environments } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {
  http = inject(HttpClient)
  apiUrl = environments.apiUrl;

  constructor() { }

  createAnswer(answer : AnswerCreationModel) : Observable<AnswerApiResponse>{
    return this.http.post<AnswerApiResponse>(`${this.apiUrl}/answers` , answer);
  }
  
  deleteAnswer(answerId : number): Observable<AnswerDeleteApiResponse>{
    return this.http.delete<AnswerDeleteApiResponse>(`${this.apiUrl}/answers/${answerId}`);
}
}
