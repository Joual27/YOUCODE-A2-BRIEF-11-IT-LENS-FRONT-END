import { Component, Input } from '@angular/core';
import { TreeItem } from '../../../../shared/models';
import { ResultChronologyQuestionListComponent } from "../result-chronology-question-list/result-chronology-question-list.component";

@Component({
  selector: 'app-result-chronology-item',
  imports: [ResultChronologyQuestionListComponent],
  templateUrl: './result-chronology-item.component.html',
  styleUrl: './result-chronology-item.component.css'
})
export class ResultChronologyItemComponent {
  @Input({ required: true }) item!: TreeItem;
  @Input() level: number = 0;
}
