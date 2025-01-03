import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationLayoutComponent } from './participation-layout.component';

describe('ParticipationLayoutComponent', () => {
  let component: ParticipationLayoutComponent;
  let fixture: ComponentFixture<ParticipationLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipationLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
