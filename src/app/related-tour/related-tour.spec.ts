import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedTour } from './related-tour';

describe('RelatedTour', () => {
  let component: RelatedTour;
  let fixture: ComponentFixture<RelatedTour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RelatedTour]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelatedTour);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
