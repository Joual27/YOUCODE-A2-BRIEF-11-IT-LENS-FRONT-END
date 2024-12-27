import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../../features/survey/models';
import { environments } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environments.apiUrl;
  private http = inject(HttpClient);

  getSurveys() : Observable<Survey[]>{
    return this.http.get<Survey[]>(`${this.apiUrl}/surveys`);
  }
}
