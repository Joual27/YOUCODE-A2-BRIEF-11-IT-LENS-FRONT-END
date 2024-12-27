import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environments } from '../../../environments/environment';
import { ApiResponse } from '../../shared/models/shared.models';
import { Edition } from '../../features/survey/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environments.apiUrl;
  private http = inject(HttpClient);
  private surveyData : Observable<ApiResponse> | null = null;

  getSurveys() : Observable<ApiResponse>{
    if(!this.surveyData){
      this.surveyData = this.http.get<ApiResponse>(`${this.apiUrl}/surveys`);
    }
    return this.surveyData;
  }

  getEditionData(editionId : number) : Observable<Edition | undefined>{
    return this.getSurveys().pipe(
      map((res) => {
        const surveys = res.data.surveys;
        for(const survey of surveys){
          const edition = survey.editions.find(ed => ed.id == editionId);
          if(edition){
            return edition;
          }
        }
        return undefined;
      }
      )
    )
  }
}
