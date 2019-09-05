import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Guia1Component } from './guia1.component';

describe('Guia1Component', () => {
  let component: Guia1Component;
  let fixture: ComponentFixture<Guia1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Guia1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Guia1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
