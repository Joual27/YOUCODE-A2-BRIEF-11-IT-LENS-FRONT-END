import { Component, Input } from '@angular/core';
import { Answer } from '../../../../shared/models';

@Component({
  selector: 'app-answer-table-row',
  imports: [],
  templateUrl: './answer-table-row.component.html',
  styleUrl: './answer-table-row.component.css'
})
export class AnswerTableRowComponent {
  @Input() answer !: Answer;
}
