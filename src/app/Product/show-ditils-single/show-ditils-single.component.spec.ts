import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDitilsSingleComponent } from './show-ditils-single.component';

describe('ShowDitilsSingleComponent', () => {
  let component: ShowDitilsSingleComponent;
  let fixture: ComponentFixture<ShowDitilsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDitilsSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowDitilsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
