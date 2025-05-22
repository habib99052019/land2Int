import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPage4Component } from './landing-page4.component';

describe('LandingPage4Component', () => {
  let component: LandingPage4Component;
  let fixture: ComponentFixture<LandingPage4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingPage4Component]
    });
    fixture = TestBed.createComponent(LandingPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
