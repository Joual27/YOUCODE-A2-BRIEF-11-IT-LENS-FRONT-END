import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterTreeComponent } from './chapter-tree.component';

describe('ChapterTreeComponent', () => {
  let component: ChapterTreeComponent;
  let fixture: ComponentFixture<ChapterTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChapterTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChapterTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
