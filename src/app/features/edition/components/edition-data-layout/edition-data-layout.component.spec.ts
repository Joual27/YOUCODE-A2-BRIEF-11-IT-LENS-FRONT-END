import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionDataLayoutComponent } from './edition-data-layout.component';

describe('EditionDataLayoutComponent', () => {
  let component: EditionDataLayoutComponent;
  let fixture: ComponentFixture<EditionDataLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditionDataLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditionDataLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
