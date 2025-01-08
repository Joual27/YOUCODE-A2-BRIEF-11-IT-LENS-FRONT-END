import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultQuestionListComponent } from './result-question-list.component';

describe('ResultQuestionListComponent', () => {
  let component: ResultQuestionListComponent;
  let fixture: ComponentFixture<ResultQuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultQuestionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
