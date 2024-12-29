import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-edition-data-title',
  imports: [],
  templateUrl: './edition-data-title.component.html',
  styleUrl: './edition-data-title.component.css'
})
export class EditionDataTitleComponent {
   @Input() title !: string;
}
