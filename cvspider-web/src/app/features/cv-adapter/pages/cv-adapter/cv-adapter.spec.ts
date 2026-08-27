import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvAdapter } from './cv-adapter';

describe('CvAdapter', () => {
  let component: CvAdapter;
  let fixture: ComponentFixture<CvAdapter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvAdapter],
    }).compileComponents();

    fixture = TestBed.createComponent(CvAdapter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
