import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OprecWelcomeComponent } from './oprec-welcome.component';

describe('OprecWelcomeComponent', () => {
  let component: OprecWelcomeComponent;
  let fixture: ComponentFixture<OprecWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OprecWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OprecWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
