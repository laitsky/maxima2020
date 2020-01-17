import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OprecTokenComponent } from './oprec-token.component';

describe('OprecTokenComponent', () => {
  let component: OprecTokenComponent;
  let fixture: ComponentFixture<OprecTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OprecTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OprecTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
