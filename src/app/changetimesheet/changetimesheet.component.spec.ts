import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangetimesheetComponent } from './changetimesheet.component';

describe('ChangetimesheetComponent', () => {
  let component: ChangetimesheetComponent;
  let fixture: ComponentFixture<ChangetimesheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangetimesheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangetimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
