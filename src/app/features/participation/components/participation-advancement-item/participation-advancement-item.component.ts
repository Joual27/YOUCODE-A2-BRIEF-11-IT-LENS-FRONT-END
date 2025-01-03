import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-participation-advancement-item',
  imports: [],
  templateUrl: './participation-advancement-item.component.html',
  styleUrl: './participation-advancement-item.component.css'
})
export class ParticipationAdvancementItemComponent {

  @Input() number !: string;
  @Input() title !: string
}
