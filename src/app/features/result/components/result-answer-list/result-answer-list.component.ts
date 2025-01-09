import {Component, Input, OnInit, signal} from '@angular/core';
import {Answer} from '../../../../shared/models';

@Component({
  selector: 'app-result-answer-list',
  imports: [],
  templateUrl: './result-answer-list.component.html',
  styleUrl: './result-answer-list.component.css'
})
export class ResultAnswerListComponent implements OnInit{
  @Input({ required: true }) answers!: Answer[];
  @Input() totalAnswers !: number ;

  ngOnInit() : void {
  }

  calculatePercentage(answer : Answer) : number{
    return Number((answer.selectionCount / this.totalAnswers * 100).toFixed(2));
  }
}
