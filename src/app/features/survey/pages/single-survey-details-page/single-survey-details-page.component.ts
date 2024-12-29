import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Edition } from '../../../../shared/models';
import { DataService } from '../../../../core/services/data.service';
import { EditionDataLayoutComponent } from '../../../edition/components/edition-data-layout/edition-data-layout.component';

@Component({
  selector: 'app-single-survey-details-page',
  templateUrl: './single-survey-details-page.component.html',
  styleUrl: './single-survey-details-page.component.css',
  imports : [EditionDataLayoutComponent]
})
export class SingleSurveyDetailsPageComponent {
   editionId : number ;
   editionData : WritableSignal<Edition | undefined> = signal(undefined);
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
        next : (data) => {
          this.editionData.set(data)
          if(!data){
            this.isValidEditionId.set(false);
          }
        },
        error : (err) => {
          console.log(err) ;
          this.editionData.set(undefined);
        }
      })
    }
   }
}
