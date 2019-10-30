import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TabComponent } from '../tab/tab.component';

import { TabGroupComponent } from './tab-group.component';

describe('TabGroupComponent', () => {
  let component: TabGroupComponent;
  let fixture: ComponentFixture<TabGroupComponent>;
  let tabs = [new TabComponent()];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabGroupComponent);
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
