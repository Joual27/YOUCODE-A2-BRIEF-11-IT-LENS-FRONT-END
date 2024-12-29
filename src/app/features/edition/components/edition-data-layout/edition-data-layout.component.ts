import { Component, Input, WritableSignal } from '@angular/core';

import { EditionDataHeaderComponent } from "../edition-data-header/edition-data-header.component";
import { EditionDataTitleComponent } from "../edition-data-title/edition-data-title.component";
import { Edition } from '../../../../shared/models';
import { ChapterTreeComponent } from "../../../chapter/components/chapter-tree/chapter-tree.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edition-data-layout',
  imports: [EditionDataHeaderComponent, EditionDataTitleComponent, ChapterTreeComponent , CommonModule],
  templateUrl: './edition-data-layout.component.html',
  styleUrl: './edition-data-layout.component.css'
})
export class EditionDataLayoutComponent {
  @Input() editionData !: WritableSignal<Edition | undefined>;
}
