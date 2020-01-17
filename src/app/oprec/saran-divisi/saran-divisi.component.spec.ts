import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaranDivisiComponent } from './saran-divisi.component';

describe('SaranDivisiComponent', () => {
  let component: SaranDivisiComponent;
  let fixture: ComponentFixture<SaranDivisiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaranDivisiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaranDivisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
