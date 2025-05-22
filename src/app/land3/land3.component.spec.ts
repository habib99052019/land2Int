import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Land3Component } from './land3.component';

describe('Land3Component', () => {
  let component: Land3Component;
  let fixture: ComponentFixture<Land3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Land3Component]
    });
    fixture = TestBed.createComponent(Land3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
