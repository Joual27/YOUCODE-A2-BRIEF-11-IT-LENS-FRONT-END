import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTableRowComponent } from './answer-table-row.component';

describe('AnswerTableRowComponent', () => {
  let component: AnswerTableRowComponent;
  let fixture: ComponentFixture<AnswerTableRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerTableRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
