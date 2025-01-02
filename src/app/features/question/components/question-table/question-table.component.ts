import { Component, EventEmitter, Input, Output, ViewEncapsulation, WritableSignal } from '@angular/core';
import { QuestionTableHeadComponent } from "../question-table-head/question-table-head.component";
import { Question } from '../../../../shared/models';
import { QuestionTableRowComponent } from "../question-table-row/question-table-row.component";
import { QuestionTableCreationRowComponent } from "../question-table-creation-row/question-table-creation-row.component";

@Component({
  selector: 'app-question-table',
  imports: [QuestionTableHeadComponent, QuestionTableRowComponent, QuestionTableCreationRowComponent],
  templateUrl: './question-table.component.html',
  styleUrl: './question-table.component.css',
})
export class QuestionTableComponent {
  @Input() questionsToDisplay !: WritableSignal<Question[]>;
  @Input() tableShown !: boolean ;
  @Output() questionTargeted = new EventEmitter<number>;
  @Input() activeSubChapterId !: WritableSignal<number>;
  @Input() isVisibleCreationRow !: WritableSignal<boolean>;


  handleQuestionTargeted(questionId : number){
    this.questionTargeted.emit(questionId);
  }

  handleQuestionCreatedEvent(question : Question){
    this.questionsToDisplay().push(question);
    this.isVisibleCreationRow.set(false);
  }

  handleQuestionDeleteEvent(id : number) : void{
    const updatedQuestions = this.questionsToDisplay().filter(ques => ques.id != id);
    this.questionsToDisplay.set(updatedQuestions);
    if(this.questionsToDisplay().length == 0){
      this.tableShown = false;
    }
  }
}
