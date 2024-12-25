import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSurveyDetailsPageComponent } from './single-survey-details-page.component';

describe('SingleSurveyDetailsPageComponent', () => {
  let component: SingleSurveyDetailsPageComponent;
  let fixture: ComponentFixture<SingleSurveyDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleSurveyDetailsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleSurveyDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
