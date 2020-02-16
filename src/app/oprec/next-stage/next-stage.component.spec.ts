import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextStageComponent } from './next-stage.component';

describe('NextStageComponent', () => {
  let component: NextStageComponent;
  let fixture: ComponentFixture<NextStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
