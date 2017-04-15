import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatashowComponent } from './datashow.component';

describe('DatashowComponent', () => {
  let component: DatashowComponent;
  let fixture: ComponentFixture<DatashowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatashowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatashowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
