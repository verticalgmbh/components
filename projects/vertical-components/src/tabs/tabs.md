# Overview

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

# API

## API reference for vertical tabs

`import { VerticalTabsModule } from '@verticalgmbh/components';`

## Directives

### `VerticalTab`

Single tab in a tab group.

**Selector:** `[vertical-tab]`

### `VerticalTabGroup`

Container for vertical tabs, that includes the activeTab state.

**Selector:** `[vertical-tab-group]`

**Properties**

| Name               | Type        | Values      | Description                |
|--------------------|-------------|-------------|----------------------------|
| @Input() activeTab | VerticalTab | VerticalTab | Active tab in a tab group. |