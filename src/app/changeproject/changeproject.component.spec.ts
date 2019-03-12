import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeprojectComponent } from './changeproject.component';

describe('ChangeprojectComponent', () => {
  let component: ChangeprojectComponent;
  let fixture: ComponentFixture<ChangeprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
