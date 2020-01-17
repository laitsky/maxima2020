import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenilaianKepribadianComponent } from './penilaian-kepribadian.component';

describe('PenilaianKepribadianComponent', () => {
  let component: PenilaianKepribadianComponent;
  let fixture: ComponentFixture<PenilaianKepribadianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenilaianKepribadianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenilaianKepribadianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
