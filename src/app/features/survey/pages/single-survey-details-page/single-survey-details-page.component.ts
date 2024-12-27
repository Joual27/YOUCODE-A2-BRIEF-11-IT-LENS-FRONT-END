import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Edition } from '../../models';
import { Observable } from 'rxjs';
import { DataService } from '../../../../core/services/data.service';

@Component({
  selector: 'app-single-survey-details-page',
  imports: [],
  templateUrl: './single-survey-details-page.component.html',
  styleUrl: './single-survey-details-page.component.css'
})
export class SingleSurveyDetailsPageComponent {
   private editionId : number ;
   editionData !: WritableSignal<Edition | undefined>;
   private dataService = inject(DataService);
   isValidEditionId = signal<boolean>(true);

   constructor (private route : ActivatedRoute){
    this.editionId = Number(this.route.snapshot.paramMap.get('editionId')) ?? '';
   }
   
   ngOnInit() : void{
     this.getEditionData();
   }

   getEditionData() : void{
    if(this.editionId){
      this.dataService.getEditionData(this.editionId).subscribe({
        next : (data) => this.editionData.set(data),
        error : (err) => {
          console.log(err) ;
          this.editionData.set(undefined);
        }
      })
    }
    else{
      this.isValidEditionId.set(false);
    }
   }  


}
