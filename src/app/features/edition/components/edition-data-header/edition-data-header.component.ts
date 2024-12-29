import { Component, Input, WritableSignal } from '@angular/core';
import { Edition } from '../../../../shared/models';

@Component({
  selector: 'app-edition-data-header',
  imports: [],
  templateUrl: './edition-data-header.component.html',
  styleUrl: './edition-data-header.component.css'
})
export class EditionDataHeaderComponent {
   @Input() editionData !: WritableSignal<Edition | undefined>;
}
