import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsaiSingkatComponent } from './esai-singkat.component';

describe('EsaiSingkatComponent', () => {
  let component: EsaiSingkatComponent;
  let fixture: ComponentFixture<EsaiSingkatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsaiSingkatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsaiSingkatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
