import { Component, inject, OnInit, signal } from '@angular/core';
import { DataService } from '../../../../core/services/data.service';
import { Edition, Survey } from '../../../../shared/models';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home-hero',
  imports: [RouterLink],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.css'
})
export class HomeHeroComponent implements OnInit{
  dataService = inject(DataService);
  surveys = signal<Survey[]>([]);
  activeSurveyEditions = signal<Edition[]>([]);
  areActiveButtons : boolean = false;
  editionChoiceIsShown : boolean = false;
  chosenEditionId = signal<number>(0);

  ngOnInit() : void {
    this.fetchSurveys();
  }

  fetchSurveys(){
    this.dataService.getSurveys().subscribe({
      next : (res) => {
        this.surveys.set(res.data.surveys);
      },
      error : (err) => {
        console.log("err" + err);
      }
   })
  }

  handleSurveyChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const surveyId = Number(target.value);
    if (surveyId) {
      const selectedSurvey = this.surveys().find((survey) => survey.id === surveyId);
      if (selectedSurvey) {
        this.activeSurveyEditions.set(selectedSurvey.editions || []);
        this.editionChoiceIsShown = true;
      }
    }else{
      this.editionChoiceIsShown = false;
    }
  }

  handleEditionChange(event: Event){
    const target = event.target as HTMLSelectElement;
    if(target.value !== ""){
      this.chosenEditionId.set(Number(target.value));
      this.areActiveButtons = true;

    }else{
      this.areActiveButtons = false;
    }
  }
}
