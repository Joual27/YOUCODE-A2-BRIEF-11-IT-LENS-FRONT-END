import { Component, Input, signal } from '@angular/core';
import {Question, Subchapter} from '../../../../shared/models';
import { ParticipationAdvancementComponent } from "../participation-advancement/participation-advancement.component";
import { ParticipationQuestionTemplateComponent } from "../participation-question-template/participation-question-template.component";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-participation-layout',
  imports: [ParticipationAdvancementComponent, ParticipationQuestionTemplateComponent , CommonModule],
  templateUrl: './participation-layout.component.html',
  styleUrl: './participation-layout.component.css'
})
export class ParticipationLayoutComponent {
  @Input() subchapters = signal<Subchapter[]>([]);
  activeSubchapterIndex = signal<number>(0);
  activeQuestionIndex = signal<number>(0);
  currentQuestion = signal<Question | null>(null);

  ngOnInit() {
    this.getCurrentQuestionData();
  }

  private getCurrentQuestionData() {
    const currentSubchapter = this.subchapters()[this.activeSubchapterIndex()];
    if (currentSubchapter && currentSubchapter.questions) {
      this.currentQuestion.set(currentSubchapter.questions[this.activeQuestionIndex()]);
    }
  }

  handleAnswerSelected(answerId: number) {
    // Here you can handle the answer selection, perhaps update a service
    console.log('Answer selected:', answerId);
  }

  handleNext() {
    const currentSubchapter = this.subchapters()[this.activeSubchapterIndex()];
    if (this.activeQuestionIndex() < currentSubchapter.questions.length - 1) {
      this.activeQuestionIndex.set(this.activeQuestionIndex() + 1);
    } else if (this.activeSubchapterIndex() < this.subchapters().length - 1) {
      this.activeSubchapterIndex.set(this.activeSubchapterIndex() + 1);
      this.activeQuestionIndex.set(0);
    }
    this.getCurrentQuestionData();
  }
}
