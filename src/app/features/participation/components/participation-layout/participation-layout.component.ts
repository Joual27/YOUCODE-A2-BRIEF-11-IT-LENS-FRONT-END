import {Component, effect, inject, Input, OnInit, signal, SimpleChanges} from '@angular/core';
import {EmbeddedSurvey, Question, Subchapter} from '../../../../shared/models';
import { ParticipationAdvancementComponent } from "../participation-advancement/participation-advancement.component";
import { ParticipationQuestionTemplateComponent } from "../participation-question-template/participation-question-template.component";
import {CommonModule} from '@angular/common';
import {ParticipationService} from '../../services/participation.service';
import {AnswerToMultipleQuestions, AnswerToQuestion} from '../../models';
import {Router} from '@angular/router';

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
  @Input() editionId = signal<number>(0);
  surveyData = signal<EmbeddedSurvey | null >(null);
  isSurveyComplete = signal<boolean>(false);
  participationService = inject(ParticipationService);
  router = inject(Router);
  selectedAnswers = new Map<number, number[]>();
  constructor() {
    effect(() => {
      this.getCurrentQuestionData();
      this.loadSurveyData();
   });
  }

  loadSurveyData() : void{
    this.participationService.getEditionData(this.editionId()).subscribe({
      next : (res)=>{
        this.surveyData.set(res.data.edition.survey)
      },
      error : (err) => {
        console.log("err" + err)
      }
    })
  }

  private getCurrentQuestionData() {
    const currentSubchapter = this.subchapters()[this.activeSubchapterIndex()];
    console.log(currentSubchapter)
    if (currentSubchapter && currentSubchapter.questions) {
      this.currentQuestion.set(currentSubchapter.questions[this.activeQuestionIndex()]);
    }
  }

  handleAnswerSelected(answerId: number) {
    const questionId = this.currentQuestion()?.id;
    if (!questionId) return;

    if (this.currentQuestion()?.type === 'MULTI_CHOICE') {
      const answers = this.selectedAnswers.get(questionId) || [];
      if (answers.includes(answerId)) {
        this.selectedAnswers.set(
          questionId,
          answers.filter((id) => id !== answerId)
        );
      } else {
        this.selectedAnswers.set(questionId, [...answers, answerId]);
      }
    } else {
      this.selectedAnswers.set(questionId, [answerId]);
    }

    console.log("Selected answers:", this.selectedAnswers);
  }

  submitAnswer() {
    const question = this.currentQuestion();
    if (!question) return;

    const questionId = question.id;
    const selectedAnswerIds = this.selectedAnswers.get(questionId) || [];

    if (question.type === 'MULTI_CHOICE') {
      const payload: AnswerToMultipleQuestions = {
        responses: [
          {
            questionId: questionId,
            answers: selectedAnswerIds.map((id) => ({ answerId: id })),
          },
        ],
      };

      this.participationService
        .answerToMultipleQuestions(payload, this.editionId())
        .subscribe({
          next: (res) => {
            console.log("Multi-choice answer submitted successfully:", res);
          },
          error: (err) => {
            console.error("Error submitting multi-choice answer:", err);
          },
        });
    } else {
      const payload: AnswerToQuestion = {
        questionId: questionId,
        answerId: selectedAnswerIds[0],
      };

      this.participationService
        .answerToQuestion(payload, this.editionId())
        .subscribe({
          next: (res) => {
            console.log("Single-choice answer submitted successfully:", res);
          },
          error: (err) => {
            console.error("Error submitting single-choice answer:", err);
          },
        });
    }
  }

  handleNext() {
    this.submitAnswer();

    const currentSubchapter = this.subchapters()[this.activeSubchapterIndex()];
    const isLastQuestion = this.activeQuestionIndex() === currentSubchapter.questions.length - 1;
    const isLastSubchapter = this.activeSubchapterIndex() === this.subchapters().length - 1;

    if (isLastQuestion && isLastSubchapter) {
      this.isSurveyComplete.set(true);

      setTimeout(() => {
        this.router.navigate(['/']);
      }, 6000);
      return;
    }

    if (!isLastQuestion) {
      this.activeQuestionIndex.set(this.activeQuestionIndex() + 1);
    } else if (!isLastSubchapter) {
      this.activeSubchapterIndex.set(this.activeSubchapterIndex() + 1);
      this.activeQuestionIndex.set(0);
    }

    this.getCurrentQuestionData();

  }
}
