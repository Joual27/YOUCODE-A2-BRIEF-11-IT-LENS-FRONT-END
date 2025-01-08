import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultChapterComponent } from './result-chapter.component';

describe('ResultChapterComponent', () => {
  let component: ResultChapterComponent;
  let fixture: ComponentFixture<ResultChapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultChapterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultChapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
