import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextButtonComponent } from './text-button.component';

describe('TextButtonComponent', () => {
  let component: TextButtonComponent;
  let fixture: ComponentFixture<TextButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TextButtonComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('host element', () => {

    it('should have border of 0px none rgb(0, 0, 0)', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.border).toBe('0px none rgb(0, 0, 0)');
    });
  });
});
