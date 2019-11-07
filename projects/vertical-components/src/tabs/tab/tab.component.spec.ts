import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabComponent } from './tab.component';

describe('TabComponent', () => {
  let component: TabComponent;
  let fixture: ComponentFixture<TabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabComponent);
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
