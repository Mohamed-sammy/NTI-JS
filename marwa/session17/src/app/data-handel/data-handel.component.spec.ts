import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataHandelComponent } from './data-handel.component';

describe('DataHandelComponent', () => {
  let component: DataHandelComponent;
  let fixture: ComponentFixture<DataHandelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataHandelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataHandelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
