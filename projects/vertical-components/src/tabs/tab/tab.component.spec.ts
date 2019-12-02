import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalTab } from './tab.component';

describe('VerticalTab', () => {
  let component: VerticalTab;
  let fixture: ComponentFixture<VerticalTab>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalTab]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTab);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit component on _click()', () => {
    spyOn(component.click, 'emit');
    component._click();
    expect(component.click.emit).toHaveBeenCalledWith(component);
  })
});
