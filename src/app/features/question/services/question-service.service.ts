import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { QuestionApiResponse, QuestionCreationModel } from '../models/models';
import { environments } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = environments.apiUrl;
  http = inject(HttpClient);
  constructor() { }

  createQuestion(question : QuestionCreationModel) : Observable<QuestionApiResponse>{
    return this.http.post<QuestionApiResponse>(`${this.apiUrl}/subchapters/${question.subchapterId}/questions` , question);
  }
}
