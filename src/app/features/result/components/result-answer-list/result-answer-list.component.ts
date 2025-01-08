import {Component, Input} from '@angular/core';
import {Answer} from '../../../../shared/models';

@Component({
  selector: 'app-result-answer-list',
  imports: [],
  templateUrl: './result-answer-list.component.html',
  styleUrl: './result-answer-list.component.css'
})
export class ResultAnswerListComponent {
  @Input({ required: true }) answers!: Answer[];
}
