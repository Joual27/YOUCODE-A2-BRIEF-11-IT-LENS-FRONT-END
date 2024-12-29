import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionDataHeaderComponent } from './edition-data-header.component';

describe('EditionDataHeaderComponent', () => {
  let component: EditionDataHeaderComponent;
  let fixture: ComponentFixture<EditionDataHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionDataHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionDataHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
