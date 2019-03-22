import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeTeamComponent } from "./ChangeTeamComponent";

describe('ChangeTeamComponent', () => {
  let component: ChangeTeamComponent;
  let fixture: ComponentFixture<ChangeTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
