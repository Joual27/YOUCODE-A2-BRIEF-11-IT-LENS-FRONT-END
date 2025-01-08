import {Component, effect, inject, OnInit, signal} from '@angular/core';
import {Edition} from '../../../../shared/models';
import {ActivatedRoute} from '@angular/router';
import {ParticipationService} from '../../../participation/services/participation.service';
import {ResultPageHeroComponent} from '../result-page-hero/result-page-hero.component';
import {ResultDataComponent} from '../result-data/result-data.component';
import {ResultChronologyComponent} from '../result-chronology/result-chronology.component';

@Component({
  selector: 'app-result-page-layout',
  imports: [ResultPageHeroComponent , ResultDataComponent , ResultChronologyComponent],
  templateUrl: './result-page-layout.component.html',
  styleUrl: './result-page-layout.component.css'
})
export class ResultPageLayoutComponent{
  editionId = signal<number>(0);
  editionData = signal<Edition | undefined>(undefined);
  participationService = inject(ParticipationService);
  constructor(route : ActivatedRoute) {
    this.editionId.set(Number(route.snapshot.paramMap.get("id")));
    effect(() => {
      this.loadData();
    });
  }



  loadData() : void {
    this.participationService.getEditionData(this.editionId()).subscribe({
      next : (res) => {
        if (res){
          this.editionData.set(res.data.edition);
        }
      },
      error : (err) => {
        console.log("err" + err);
      }
    })
  }
}
