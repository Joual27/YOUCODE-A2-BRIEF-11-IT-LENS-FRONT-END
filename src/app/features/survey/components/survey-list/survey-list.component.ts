import { Component, inject, Inject, signal } from '@angular/core';
import { Survey } from '../../models';
import { SurveyItemComponent } from '../survey-item/survey-item.component';
import { DataService } from '../../../../shared/services/data.service';
import { provideHttpClient } from '@angular/common/http';


@Component({
  selector: 'survey-list',
  imports: [SurveyItemComponent] ,
  templateUrl: './survey-list.component.html',
  styleUrls: ['./survey-list.component.css'],
  
})
export class SurveyListComponent {
  surveys = signal<Survey[]>([]);
  private dataService = inject(DataService);

  ngOnInit(): void {
     this.loadSurveys();
  }

  loadSurveys() : void {
    this.dataService.getSurveys()
      .subscribe((data : Survey[]) => {
        console.log(data.data.surveys);
        this.surveys.set(data)
      });
  }
}
