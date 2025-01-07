import {Component, inject, signal} from '@angular/core';
import {Edition} from '../../../../shared/models';
import {DataService} from '../../../../core/services/data.service';
import {ActivatedRoute} from '@angular/router';
import {ResultPageHeroComponent} from '../result-page-hero/result-page-hero.component';

@Component({
  selector: 'app-result-page-layout',
  imports: [ResultPageHeroComponent],
  templateUrl: './result-page-layout.component.html',
  styleUrl: './result-page-layout.component.css'
})
export class ResultPageLayoutComponent {
  editionId = signal<number>(0);
  editionData = signal<Edition | undefined>(undefined);
  dataService = inject(DataService);
  constructor(route : ActivatedRoute) {
    this.editionId.set(Number(route.snapshot.paramMap.get("id")));
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() : void {
    this.dataService.getEditionData(this.editionId()).subscribe({
      next : (res) => {
        if (res){
          this.editionData.set(res);
        }
      },
      error : (err) => {
        console.log("err" + err);
      }
    })
  }
}
