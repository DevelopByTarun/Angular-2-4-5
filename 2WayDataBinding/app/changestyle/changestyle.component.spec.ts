import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangestyleComponent } from './changestyle.component';

describe('ChangestyleComponent', () => {
  let component: ChangestyleComponent;
  let fixture: ComponentFixture<ChangestyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangestyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangestyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
