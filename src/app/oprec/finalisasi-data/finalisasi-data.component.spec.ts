import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalisasiDataComponent } from './finalisasi-data.component';

describe('FinalisasiDataComponent', () => {
  let component: FinalisasiDataComponent;
  let fixture: ComponentFixture<FinalisasiDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalisasiDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalisasiDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
