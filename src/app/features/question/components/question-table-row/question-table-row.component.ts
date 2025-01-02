import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Question } from '../../../../shared/models';
import { QuestionService } from '../../services/question-service.service';

@Component({
  selector: 'app-question-table-row',
  imports: [],
  templateUrl: './question-table-row.component.html',
  styleUrl: './question-table-row.component.css'
})
export class QuestionTableRowComponent {
  @Input() question !: Question;
  @Output() questionTargeted = new EventEmitter<number>();
  questionService = inject(QuestionService);
  @Output() questionDeletedEvent = new EventEmitter<number>;

  handleQuestionTargeting(){
    this.questionTargeted.emit(this.question.id);
  }

  handleDelete(): void{
    this.questionService.deleteQuestion(this.question.id).subscribe({
      next : (res) => {
        this.questionDeletedEvent.emit(res.data.questionId);
      },
      error : (err) => {
        console.log("err" + err);
      } 
    })  
  }

}
