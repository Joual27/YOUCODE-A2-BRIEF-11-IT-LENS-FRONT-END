import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Survey } from '../../../../shared/models';

@Component({
  selector: 'app-survey-item',
  imports: [RouterLink],
  templateUrl: './survey-item.component.html',
  styleUrl: './survey-item.component.css'
})
export class SurveyItemComponent {
  @Input() survey !: Survey;
}
