import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-participation-thank-you',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './participation-thank-you.component.html',
  styleUrl: './participation-thank-you.component.css'
})

export class ParticipationThankYouComponent {
   @Input() surveyTitle : string | undefined = "";
}
