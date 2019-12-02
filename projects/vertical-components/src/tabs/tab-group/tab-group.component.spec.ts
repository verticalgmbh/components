import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { VerticalTab } from '../tab/tab.component';

import { VerticalTabGroup } from './tab-group.component';

describe('VerticalTabGroup', () => {
  let component: VerticalTabGroup;
  let fixture: ComponentFixture<VerticalTabGroup>;
  let tabs = [new VerticalTab()];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalTabGroup]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalTabGroup);
    component = fixture.componentInstance;
    (component.tabs as any) = {
      toArray() {
        return tabs;
      }
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to clickEvent', () => {
    // Arrange
    let tab = tabs[0];
    spyOn(tab.click, 'emit');

    // Act
    tab._click();

    // Assert
    expect(tab.click.emit).toHaveBeenCalledTimes(1);
  });

  it('should subscribe to clickEvent', fakeAsync(() => {
    // Arrange
    let tab = tabs[0];
    spyOn(tab.click, 'emit');

    // Act
    tab._click();
    fixture.detectChanges();
    tick();
    fixture.whenStable();

    // Assert
    expect(tab.click.emit).toHaveBeenCalledTimes(1);
  }));
});
