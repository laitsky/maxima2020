import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOprecComponent } from './form-oprec.component';

describe('FormOprecComponent', () => {
  let component: FormOprecComponent;
  let fixture: ComponentFixture<FormOprecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOprecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOprecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
