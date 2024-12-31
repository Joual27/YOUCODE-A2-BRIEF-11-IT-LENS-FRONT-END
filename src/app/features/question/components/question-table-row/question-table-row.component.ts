import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from '../../../../shared/models';

@Component({
  selector: 'app-question-table-row',
  imports: [],
  templateUrl: './question-table-row.component.html',
  styleUrl: './question-table-row.component.css'
})
export class QuestionTableRowComponent {
  @Input() question !: Question;
  @Output() questionTargeted = new EventEmitter<number>();

  handleQuestionTargeting(){
    this.questionTargeted.emit(this.question.id);
  }

  
}
