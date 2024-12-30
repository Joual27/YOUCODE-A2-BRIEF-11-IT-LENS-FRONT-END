import { Component, Input, signal, WritableSignal } from '@angular/core';
import { Answer } from '../../../../shared/models';

@Component({
  selector: 'app-answer-table',
  imports: [],
  templateUrl: './answer-table.component.html',
  styleUrl: './answer-table.component.css'
})
export class AnswerTableComponent {
  @Input() answers : WritableSignal<Answer[]> = signal([]);
}
