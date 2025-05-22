import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Land5Component } from './land5.component';

describe('Land5Component', () => {
  let component: Land5Component;
  let fixture: ComponentFixture<Land5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Land5Component]
    });
    fixture = TestBed.createComponent(Land5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
