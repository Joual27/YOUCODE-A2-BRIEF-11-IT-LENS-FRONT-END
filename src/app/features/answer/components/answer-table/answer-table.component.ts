import { Component, Input, signal, WritableSignal } from '@angular/core';
import { Answer } from '../../../../shared/models';
import { AnswerTableRowComponent } from '../answer-table-row/answer-table-row.component';
import { AnswerTableHeadComponent } from "../answer-table-head/answer-table-head.component";

@Component({
  selector: 'app-answer-table',
  imports: [AnswerTableRowComponent, AnswerTableHeadComponent],
  templateUrl: './answer-table.component.html',
  styleUrl: './answer-table.component.css'
})
export class AnswerTableComponent {
  @Input() answers : WritableSignal<Answer[]> = signal([]);
}
