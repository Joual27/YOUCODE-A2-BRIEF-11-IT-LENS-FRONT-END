import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSurveysPageComponent } from './all-surveys-page.component';

describe('AllSurveysPageComponent', () => {
  let component: AllSurveysPageComponent;
  let fixture: ComponentFixture<AllSurveysPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllSurveysPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllSurveysPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
