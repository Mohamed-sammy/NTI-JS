import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddFormComponent } from './reactive-add-form.component';

describe('ReactiveAddFormComponent', () => {
  let component: ReactiveAddFormComponent;
  let fixture: ComponentFixture<ReactiveAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
