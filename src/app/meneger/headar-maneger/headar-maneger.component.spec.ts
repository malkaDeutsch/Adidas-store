import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadarManegerComponent } from './headar-maneger.component';

describe('HeadarManegerComponent', () => {
  let component: HeadarManegerComponent;
  let fixture: ComponentFixture<HeadarManegerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadarManegerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadarManegerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
