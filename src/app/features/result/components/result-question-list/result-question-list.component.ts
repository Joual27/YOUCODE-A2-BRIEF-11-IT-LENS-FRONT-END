import {Component, Input} from '@angular/core';
import {Question} from '../../../../shared/models';
import {ResultQuestionComponent} from '../result-question/result-question.component';

@Component({
  selector: 'app-result-question-list',
  imports: [
    ResultQuestionComponent
  ],
  templateUrl: './result-question-list.component.html',
  styleUrl: './result-question-list.component.css'
})
export class ResultQuestionListComponent {
  @Input({ required: true }) questions!: Question[];
}
