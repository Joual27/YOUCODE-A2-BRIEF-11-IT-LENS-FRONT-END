import { Component, Input, signal } from '@angular/core';
import { Subchapter } from '../../../../shared/models';
import { ParticipationAdvancementComponent } from "../participation-advancement/participation-advancement.component";
import { ParticipationQuestionTemplateComponent } from "../participation-question-template/participation-question-template.component";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-participation-layout',
  imports: [ParticipationAdvancementComponent, ParticipationQuestionTemplateComponent , CommonModule],
  templateUrl: './participation-layout.component.html',
  styleUrl: './participation-layout.component.css'
})
export class ParticipationLayoutComponent {
  @Input() subchapters   = signal<Subchapter[]>([]);
  activeSubchapterIndex = signal<number>(0);
  activeQuestionIndex = signal<number>(0);
}
