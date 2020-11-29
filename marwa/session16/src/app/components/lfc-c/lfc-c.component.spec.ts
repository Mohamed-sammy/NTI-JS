import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LfcCComponent } from './lfc-c.component';

describe('LfcCComponent', () => {
  let component: LfcCComponent;
  let fixture: ComponentFixture<LfcCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LfcCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LfcCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
