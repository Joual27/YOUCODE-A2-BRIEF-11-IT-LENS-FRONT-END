import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultChronologyItemComponent } from './result-chronology-item.component';

describe('ResultChronologyItemComponent', () => {
  let component: ResultChronologyItemComponent;
  let fixture: ComponentFixture<ResultChronologyItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultChronologyItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultChronologyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
