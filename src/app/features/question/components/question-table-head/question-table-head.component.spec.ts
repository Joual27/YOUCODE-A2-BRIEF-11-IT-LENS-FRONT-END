import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTableHeadComponent } from './question-table-head.component';

describe('QuestionTableHeadComponent', () => {
  let component: QuestionTableHeadComponent;
  let fixture: ComponentFixture<QuestionTableHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionTableHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
