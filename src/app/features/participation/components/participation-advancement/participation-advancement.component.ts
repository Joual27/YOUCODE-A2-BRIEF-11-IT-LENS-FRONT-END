import {Component, Input, signal} from '@angular/core';
import { ParticipationAdvancementItemComponent } from "../participation-advancement-item/participation-advancement-item.component";
import {Subchapter} from '../../../../shared/models';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-participation-advancement',
  imports: [ParticipationAdvancementItemComponent, NgForOf],
  templateUrl: './participation-advancement.component.html',
  styleUrl: './participation-advancement.component.css'
})
export class ParticipationAdvancementComponent {
  @Input() subchapters = signal<Subchapter[]>([]);
  @Input() activeSubchapterIndex = signal<number>(0);
}
