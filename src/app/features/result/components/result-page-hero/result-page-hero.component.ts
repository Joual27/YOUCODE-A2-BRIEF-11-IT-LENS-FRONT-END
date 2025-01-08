import {Component, Input} from '@angular/core';
import {Edition} from '../../../../shared/models';

@Component({
  selector: 'app-result-page-hero',
  imports: [],
  templateUrl: './result-page-hero.component.html',
  styleUrl: './result-page-hero.component.css'
})
export class ResultPageHeroComponent{
  @Input() editionData : Edition | undefined;
}
