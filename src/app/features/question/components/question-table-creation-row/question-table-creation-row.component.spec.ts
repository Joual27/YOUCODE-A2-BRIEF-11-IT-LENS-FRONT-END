import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTableCreationRowComponent } from './question-table-creation-row.component';

describe('QuestionTableCreationRowComponent', () => {
  let component: QuestionTableCreationRowComponent;
  let fixture: ComponentFixture<QuestionTableCreationRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionTableCreationRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionTableCreationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
