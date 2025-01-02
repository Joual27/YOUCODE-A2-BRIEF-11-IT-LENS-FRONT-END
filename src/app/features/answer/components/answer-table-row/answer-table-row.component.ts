import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Answer } from '../../../../shared/models';
import { AnswerService } from '../../services/answer-service.service';

@Component({
  selector: 'app-answer-table-row',
  imports: [],
  templateUrl: './answer-table-row.component.html',
  styleUrl: './answer-table-row.component.css'
})
export class AnswerTableRowComponent {
  @Input() answer !: Answer;
  answerService = inject(AnswerService);
  @Output() answerDeletedEvent = new EventEmitter<number>;

  handleDelete() : void{
    this.answerService.deleteAnswer(this.answer.id).subscribe({
      next : (res) => {
        this.answerDeletedEvent.emit(res.data.answerId)
      },
      error : (err) => {
        console.log("err" + err);
      }
    })
  }
}
