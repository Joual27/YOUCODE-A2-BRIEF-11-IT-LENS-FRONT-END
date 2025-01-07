import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultPageHeroComponent } from './result-page-hero.component';

describe('ResultPageHeroComponent', () => {
  let component: ResultPageHeroComponent;
  let fixture: ComponentFixture<ResultPageHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultPageHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultPageHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
