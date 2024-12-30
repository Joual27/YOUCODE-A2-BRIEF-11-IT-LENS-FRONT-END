import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTableRowComponent } from './question-table-row.component';

describe('QuestionTableRowComponent', () => {
  let component: QuestionTableRowComponent;
  let fixture: ComponentFixture<QuestionTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionTableRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
