import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTableCreationRowComponent } from './answer-table-creation-row.component';

describe('AnswerTableCreationRowComponent', () => {
  let component: AnswerTableCreationRowComponent;
  let fixture: ComponentFixture<AnswerTableCreationRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerTableCreationRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerTableCreationRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
