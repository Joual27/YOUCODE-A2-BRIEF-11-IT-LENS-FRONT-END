import {Component, EventEmitter, Input, Output} from '@angular/core';
import { ParticipationAnswerTemplateComponent } from "../participation-answer-template/participation-answer-template.component";
import {Question} from '../../../../shared/models';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-participation-question-template',
  imports: [ParticipationAnswerTemplateComponent , CommonModule],
  templateUrl: './participation-question-template.component.html',
  styleUrl: './participation-question-template.component.css'
})
export class ParticipationQuestionTemplateComponent {
  @Input() question!: Question;
  @Input() questionNumber!: number;
  @Output() onAnswerSelected = new EventEmitter<number>();
  @Output() onNext = new EventEmitter<void>();
  selectedAnswerId: number | null = null;

  handleAnswerSelect(answerId: number) {
    this.selectedAnswerId = answerId;
    this.onAnswerSelected.emit(answerId);
  }

  handleNext() {
    if (this.selectedAnswerId) {
      this.onNext.emit();
      this.selectedAnswerId = null;
    }
  }
}
