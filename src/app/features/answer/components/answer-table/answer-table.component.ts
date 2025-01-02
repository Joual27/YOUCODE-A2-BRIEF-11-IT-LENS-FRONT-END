import { Component, Input, OnInit, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { Answer } from '../../../../shared/models';
import { AnswerTableRowComponent } from '../answer-table-row/answer-table-row.component';
import { AnswerTableHeadComponent } from "../answer-table-head/answer-table-head.component";
import { AnswerTableCreationRowComponent } from "../answer-table-creation-row/answer-table-creation-row.component";

@Component({
  selector: 'app-answer-table',
  imports: [AnswerTableRowComponent, AnswerTableHeadComponent, AnswerTableCreationRowComponent],
  templateUrl: './answer-table.component.html',
  styleUrl: './answer-table.component.css'
})
export class AnswerTableComponent{
  @Input() answers : WritableSignal<Answer[]> = signal([]);
  @Input() isVisibleAnswerCreationRow = signal<boolean>(false);
  @Input() isShownAnswersTable : WritableSignal<boolean> = signal(false);
  @Input() activeQuestionId !: WritableSignal<number>;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['answers'] && this.answers().length > 0) {
      this.isShownAnswersTable.set(true);
    }
  }

  handleAnswerCreationEvent(answer : Answer): void{
    this.answers().push(answer);
    this.isVisibleAnswerCreationRow.set(false);
  }

  handleAnswerDeleteEvent(id : number) : void{
    const updatedAnswers =  this.answers().filter(ans => ans.id != id);
    this.answers.set(updatedAnswers);
    if(this.answers().length == 0){
      this.isShownAnswersTable.set(false);
      this.isVisibleAnswerCreationRow.set(false);
    }
  }
}
