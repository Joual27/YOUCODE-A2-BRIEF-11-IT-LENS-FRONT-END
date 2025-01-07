import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPageLayoutComponent } from './result-page-layout.component';

describe('ResultPageLayoutComponent', () => {
  let component: ResultPageLayoutComponent;
  let fixture: ComponentFixture<ResultPageLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultPageLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultPageLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
