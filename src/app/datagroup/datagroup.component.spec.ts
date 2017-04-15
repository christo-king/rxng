import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatagroupComponent } from './datagroup.component';

describe('DatagroupComponent', () => {
  let component: DatagroupComponent;
  let fixture: ComponentFixture<DatagroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatagroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatagroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
