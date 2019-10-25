The `vertical-tab` attribute can only be used on elements, that are children of an element with the `vertical-tab-group` assigned to it.

## Active Tab

The `activeTab` input can be used to set the active tab. By default, the first tab is set to be active.

### Example
```html
<div vertical-tab-group [activeTab]="tab2">
  <div vertical-tab #tab1>Tab1</div>
  <div vertical-tab #tab2>Tab2</div>
  <div vertical-tab #tab3>Tab3</div>
</div>
```