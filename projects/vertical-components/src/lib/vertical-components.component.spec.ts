import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalComponentsComponent } from './vertical-components.component';

describe('VerticalComponentsComponent', () => {
  let component: VerticalComponentsComponent;
  let fixture: ComponentFixture<VerticalComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerticalComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
