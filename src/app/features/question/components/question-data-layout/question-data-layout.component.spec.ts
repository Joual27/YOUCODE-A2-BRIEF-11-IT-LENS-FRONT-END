import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDataLayoutComponent } from './question-data-layout.component';

describe('QuestionDataLayoutComponent', () => {
  let component: QuestionDataLayoutComponent;
  let fixture: ComponentFixture<QuestionDataLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionDataLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionDataLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
