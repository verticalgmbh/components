import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainedButtonComponent } from './contained-button.component';

describe('ContainedButtonComponent', () => {
  let component: ContainedButtonComponent;
  let fixture: ComponentFixture<ContainedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
