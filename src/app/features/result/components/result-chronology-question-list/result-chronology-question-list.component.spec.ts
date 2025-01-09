import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultChronologyQuestionListComponent } from './result-chronology-question-list.component';

describe('ResultChronologyQuestionListComponent', () => {
  let component: ResultChronologyQuestionListComponent;
  let fixture: ComponentFixture<ResultChronologyQuestionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultChronologyQuestionListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultChronologyQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
