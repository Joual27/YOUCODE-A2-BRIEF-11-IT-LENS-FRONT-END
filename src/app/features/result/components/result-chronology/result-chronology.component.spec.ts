import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultChronologyComponent } from './result-chronology.component';

describe('ResultChronologyComponent', () => {
  let component: ResultChronologyComponent;
  let fixture: ComponentFixture<ResultChronologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultChronologyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultChronologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
