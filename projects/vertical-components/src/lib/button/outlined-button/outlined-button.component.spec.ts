import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutlinedButtonComponent } from './outlined-button.component';

describe('OutlinedButtonComponent', () => {
  let component: OutlinedButtonComponent;
  let fixture: ComponentFixture<OutlinedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutlinedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutlinedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('host element', () => {

    it('should have border width of 2px', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.borderWidth).toBe('1px');
    });
    it('should have border style of solid', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.borderStyle).toBe('solid');
    });

  });
});
