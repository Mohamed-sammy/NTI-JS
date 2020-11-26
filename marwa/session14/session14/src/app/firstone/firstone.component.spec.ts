import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstoneComponent } from './firstone.component';

describe('FirstoneComponent', () => {
  let component: FirstoneComponent;
  let fixture: ComponentFixture<FirstoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
