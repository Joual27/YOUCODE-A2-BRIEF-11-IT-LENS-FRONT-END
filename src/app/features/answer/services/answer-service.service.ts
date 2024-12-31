import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AnswerApiResponse, AnswerCreationModel } from '../models/models';
import { environments } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnswerServiceService {
  http = inject(HttpClient)
  apiUrl = environments.apiUrl;
  
  constructor() { }

  createAnswer(answer : AnswerCreationModel) : Observable<AnswerApiResponse>{
    return this.http.post<AnswerApiResponse>(`${this.apiUrl}/answers` , answer);
  }
}
