import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-survey-details-page',
  imports: [],
  templateUrl: './single-survey-details-page.component.html',
  styleUrl: './single-survey-details-page.component.css'
})
export class SingleSurveyDetailsPageComponent {
   surveyId : string ;
   editionYear : string ;

   constructor (private route : ActivatedRoute){
    this.surveyId = this.route.snapshot.paramMap.get('id') ?? '';
    this.editionYear = this.route.snapshot.paramMap.get('editionYear') ?? '';
   }
}
