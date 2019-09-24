import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextButtonComponent } from './text-button.component';

describe('TextButtonComponent', () => {
  let component: TextButtonComponent;
  let fixture: ComponentFixture<TextButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextButtonComponent ]
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

    it('should have border radius of 2px', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.borderRadius).toBe('2px');
    });
    it('should have cursor pointer ', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.cursor).toBe('pointer');
    });
    it('should display as block ', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.display).toBe('block');
    });
    it('should have font-size of 0.875rem (Test uses px -> 14px) ', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.fontSize).toBe('14px');
    });
    it('should have font-weight of 500 ', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.fontWeight).toBe('500');
    });
    it('should have height of 1.75rem (Test uses px -> 28px)', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.height).toBe('28px');
    });
    it('should have letter-spacing of 0.3px ', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.letterSpacing).toBe('0.3px');
    });
    it('should line-height of 1rem (Test uses px -> 16px)', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.lineHeight).toBe('16px');
    });
    it('should have min-width of 4.6875rem (Test uses px -> 75px)', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.minWidth).toBe('75px');
    });
    it('should have outline of rgb(0, 0, 0) none 0px ', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.outline).toBe('rgb(0, 0, 0) none 0px');
    });
    it('should have padding of 0px ', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.padding).toBe('0px');
    });
    it('should have position  relative ', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.position).toBe('relative');
    });
    it('should have text-align  center ', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.textAlign).toBe('center');
    });
    it('should have text-decortaion  none solid rgb(0, 0, 0) ', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.textDecoration).toBe('none solid rgb(0, 0, 0)');
    });
    it('should have transition  of background-color 0.2s cubic-bezier(0.35, 0, 0.25, 1) 0s ', () => {
      const style = getComputedStyle(fixture.debugElement.nativeElement);
      expect(style.transition).toBe('background-color 0.2s cubic-bezier(0.35, 0, 0.25, 1) 0s');
    });
  });
});
