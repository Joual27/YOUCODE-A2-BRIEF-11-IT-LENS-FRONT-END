import { Component, Input, Signal, signal, WritableSignal } from '@angular/core';

import { EditionDataHeaderComponent } from "../edition-data-header/edition-data-header.component";
import { EditionDataTitleComponent } from "../edition-data-title/edition-data-title.component";
import { ChapterChosenEventData, Edition, Question } from '../../../../shared/models';
import { ChapterTreeComponent } from "../../../chapter/components/chapter-tree/chapter-tree.component";
import { CommonModule } from '@angular/common';
import { QuestionDataLayoutComponent } from "../../../question/components/question-data-layout/question-data-layout.component";

@Component({
  selector: 'app-edition-data-layout',
  imports: [EditionDataHeaderComponent, EditionDataTitleComponent, ChapterTreeComponent, CommonModule, QuestionDataLayoutComponent],
  templateUrl: './edition-data-layout.component.html',
  styleUrl: './edition-data-layout.component.css'
})
export class EditionDataLayoutComponent {
  @Input() editionData !: WritableSignal<Edition | undefined>;
  activeChapterQuestions = signal<Question[]>([]);
  activeSubChapterId = signal<number>(0);
  questionsTableShown = signal<boolean>(false);
  isVisibleCreationRow = signal<boolean>(false);
  activeTable = signal<string>("questions");
  
  handleChosenChapterChange(data : ChapterChosenEventData){
    this.isVisibleCreationRow.set(false);
    this.activeTable.set("questions")
    this.activeChapterQuestions.set(data.questions);
    if(this.activeChapterQuestions().length > 0){
      this.questionsTableShown.set(true);
    }
    else{
      this.questionsTableShown.set(false);
    }
    this.activeSubChapterId.set(data.subchapterId);
  }

  handleShowingTable(){
    this.questionsTableShown.set(true);
    this.isVisibleCreationRow.set(true);
  }
}
