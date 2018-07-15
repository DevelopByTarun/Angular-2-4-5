import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondformComponent } from './secondform.component';

describe('SecondformComponent', () => {
  let component: SecondformComponent;
  let fixture: ComponentFixture<SecondformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
