import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeteamComponent } from './changeteam.component';

describe('ChangeteamComponent', () => {
  let component: ChangeteamComponent;
  let fixture: ComponentFixture<ChangeteamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeteamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
