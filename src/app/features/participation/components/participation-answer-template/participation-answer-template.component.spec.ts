import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationAnswerTemplateComponent } from './participation-answer-template.component';

describe('ParticipationAnswerTemplateComponent', () => {
  let component: ParticipationAnswerTemplateComponent;
  let fixture: ComponentFixture<ParticipationAnswerTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationAnswerTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationAnswerTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
