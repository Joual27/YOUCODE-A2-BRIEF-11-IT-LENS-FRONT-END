import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerTableHeadComponent } from './answer-table-head.component';

describe('AnswerTableHeadComponent', () => {
  let component: AnswerTableHeadComponent;
  let fixture: ComponentFixture<AnswerTableHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnswerTableHeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerTableHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
