import { Component, Input, signal, WritableSignal } from '@angular/core';
import { QuestionTableComponent } from "../question-table/question-table.component";
import { Answer, Question } from '../../../../shared/models';
import { AnswerTableComponent } from '../../../answer/components/answer-table/answer-table.component';

@Component({
  selector: 'app-question-data-layout',
  imports: [QuestionTableComponent , AnswerTableComponent],
  templateUrl: './question-data-layout.component.html',
  styleUrl: './question-data-layout.component.css'  
})
export class QuestionDataLayoutComponent {
  @Input() questions !: WritableSignal<Question[]>;
  @Input() isShownQuestionsTable !: WritableSignal<boolean>;
  activeQuestionAnswers : WritableSignal<Answer[]>  = signal([]);
  activeQuestionId !: number;
  @Input() activeTable : WritableSignal<string> = signal("questions");

  onQuestionTargeted(questionId: number): void {
    this.activeTable.set("answers");
    this.activeQuestionId = questionId;
    this.getQuestionAnswers(questionId);
  }

  private getQuestionAnswers(questionId: number): void {
    const activeQuestion = this.questions().find(q => q.id === questionId);
    if (activeQuestion) {
      this.activeQuestionAnswers.set(activeQuestion.answers);
    }
  }

}
