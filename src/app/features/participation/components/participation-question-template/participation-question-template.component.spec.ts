import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationQuestionTemplateComponent } from './participation-question-template.component';

describe('ParticipationQuestionTemplateComponent', () => {
  let component: ParticipationQuestionTemplateComponent;
  let fixture: ComponentFixture<ParticipationQuestionTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationQuestionTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationQuestionTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
