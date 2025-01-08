import {Component, Input} from '@angular/core';
import {Question} from '../../../../shared/models';
import {ResultAnswerListComponent} from '../result-answer-list/result-answer-list.component';

@Component({
  selector: 'app-result-question',
  imports: [
    ResultAnswerListComponent
  ],
  templateUrl: './result-question.component.html',
  styleUrl: './result-question.component.css'
})

export class ResultQuestionComponent {
  @Input({ required: true }) question!: Question;
}
