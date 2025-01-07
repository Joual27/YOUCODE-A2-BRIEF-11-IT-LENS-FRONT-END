import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationThankYouComponent } from './participation-thank-you.component';

describe('ParticipationThankYouComponent', () => {
  let component: ParticipationThankYouComponent;
  let fixture: ComponentFixture<ParticipationThankYouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationThankYouComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationThankYouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
