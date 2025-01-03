import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationAdvancementComponent } from './participation-advancement.component';

describe('ParticipationAdvancementComponent', () => {
  let component: ParticipationAdvancementComponent;
  let fixture: ComponentFixture<ParticipationAdvancementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationAdvancementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationAdvancementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
