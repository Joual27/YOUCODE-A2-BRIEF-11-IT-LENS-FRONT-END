import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionDataTitleComponent } from './edition-data-title.component';

describe('EditionDataTitleComponent', () => {
  let component: EditionDataTitleComponent;
  let fixture: ComponentFixture<EditionDataTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionDataTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionDataTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
