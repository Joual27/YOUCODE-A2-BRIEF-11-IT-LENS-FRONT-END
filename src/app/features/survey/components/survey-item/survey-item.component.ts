import { Component, Input } from '@angular/core';
import { Survey } from '../../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-survey-item',
  imports: [RouterLink],
  templateUrl: './survey-item.component.html',
  styleUrl: './survey-item.component.css'
})
export class SurveyItemComponent {
  @Input() survey !: Survey;
}
