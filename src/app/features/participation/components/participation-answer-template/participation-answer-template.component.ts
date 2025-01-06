import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Answer, Question} from '../../../../shared/models';


@Component({
  selector: 'app-participation-answer-template',
  imports: [CommonModule],
  templateUrl: './participation-answer-template.component.html',
  styleUrl: './participation-answer-template.component.css'
})
export class ParticipationAnswerTemplateComponent {
  @Input() answer!: Answer;
  @Input() isSelected: boolean = false;
  @Output() onSelect = new EventEmitter<number>();
  @Input() question !: Question;

  selectAnswer() {
    this.onSelect.emit(this.answer.id);
  }

}
