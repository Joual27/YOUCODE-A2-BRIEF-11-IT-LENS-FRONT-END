import { Component, inject, OnInit, signal } from '@angular/core';
import { Survey } from '../../../../shared/models';
import { DataService } from '../../../../core/services/data.service';
import { ParticipationAdvancementComponent } from "../participation-advancement/participation-advancement.component";
import { ParticipationQuestionTemplateComponent } from "../participation-question-template/participation-question-template.component";

@Component({
  selector: 'app-participation-layout',
  imports: [ParticipationAdvancementComponent, ParticipationQuestionTemplateComponent],
  templateUrl: './participation-layout.component.html',
  styleUrl: './participation-layout.component.css'
})
export class ParticipationLayoutComponent {

}
