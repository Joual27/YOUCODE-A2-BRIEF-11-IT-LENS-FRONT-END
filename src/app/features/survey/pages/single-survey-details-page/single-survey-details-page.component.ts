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
   editionId : string ;
   editionData : 

   constructor (private route : ActivatedRoute){
    this.surveyId = this.route.snapshot.paramMap.get('id') ?? '';
    this.editionId = this.route.snapshot.paramMap.get('editionId') ?? '';
   }
   
   ngOnInit() : void{
    
   }

   getEditionData() : void{

   }


}
