import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Survey } from '../../features/survey/models';
import { environments } from '../../../environments/environment';
import { ApiResponse } from '../../shared/models/shared.models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environments.apiUrl;
  private http = inject(HttpClient);

  getSurveys() : Observable<ApiResponse>{
    return this.http.get<ApiResponse>(`${this.apiUrl}/surveys`);
  }
}
