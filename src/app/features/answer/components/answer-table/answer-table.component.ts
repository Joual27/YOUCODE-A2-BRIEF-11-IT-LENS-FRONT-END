import { Component, Input, OnInit, signal, WritableSignal } from '@angular/core';
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
export class AnswerTableComponent implements OnInit{
  @Input() answers : WritableSignal<Answer[]> = signal([]);
  @Input() isVisibleAnswerCreationRow = signal<boolean>(false);
  @Input() isShownAnswersTable !: WritableSignal<boolean>;


  ngOnInit(): void {
    if(this.answers().length > 0){
      this.isShownAnswersTable.set(true);
    }
  }
}
