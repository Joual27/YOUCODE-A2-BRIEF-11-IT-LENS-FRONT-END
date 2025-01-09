import { Component, Input } from '@angular/core';
import { Question } from '../../../../shared/models';

@Component({
  selector: 'app-result-chronology-question-list',
  imports: [],
  templateUrl: './result-chronology-question-list.component.html',
  styleUrl: './result-chronology-question-list.component.css'
})
export class ResultChronologyQuestionListComponent {
  @Input({ required: true }) questions!: Question[];

  scrollToElement(id: number): void {
    const element = document.getElementById(`question-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
