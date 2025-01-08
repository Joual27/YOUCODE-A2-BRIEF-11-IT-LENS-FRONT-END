import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAnswerListComponent } from './result-answer-list.component';

describe('ResultAnswerListComponent', () => {
  let component: ResultAnswerListComponent;
  let fixture: ComponentFixture<ResultAnswerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultAnswerListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultAnswerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
