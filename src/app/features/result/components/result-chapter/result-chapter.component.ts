import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Chapter} from '../../../../shared/models';
import {ResultQuestionListComponent} from '../result-question-list/result-question-list.component';

@Component({
  selector: 'app-result-chapter',
  standalone: true,
  imports: [CommonModule, ResultQuestionListComponent],
  templateUrl: './result-chapter.component.html',
})
export class ResultChapterComponent {
  @Input() chapter?: Chapter;
}
