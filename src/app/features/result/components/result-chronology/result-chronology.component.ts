import { Component, Input, signal } from '@angular/core';
import { Edition } from '../../../../shared/models';
import { ResultChronologyItemComponent } from "../result-chronology-item/result-chronology-item.component";

@Component({
  selector: 'app-result-chronology',
  imports: [ResultChronologyItemComponent],
  templateUrl: './result-chronology.component.html',
  styleUrl: './result-chronology.component.css'
})
export class ResultChronologyComponent {
  @Input() editionData = signal<Edition | undefined>(undefined);
}
