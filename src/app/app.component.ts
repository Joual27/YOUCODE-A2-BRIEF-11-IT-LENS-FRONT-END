import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SurveyListComponent } from './features/survey/components/survey-list/survey-list.component';
import { AllSurveysPageComponent } from "./features/survey/pages/all-surveys-page/all-surveys-page.component";


@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'ITLens-front-end';
  
}
