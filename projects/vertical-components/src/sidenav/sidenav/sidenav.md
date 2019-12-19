# Overview

`vertical-sidenav` is a component to display a sidenavigation. It uses the native `<nav>` element and applies vertical style and logic to it. 

Infinite items and sub-items can be added to a `vertical-sidenav`.

# API

## API reference for vertical sidenav

`import { VerticalSidenavModule } from '@verticalgmbh/components';`

## Directives

### `VerticalSidenav`

Sidenavigation with title and count that can have infinite items and sub-items.

**Selector:** `nav[vertical-sidenav]`

**Properties**

| Name                | Type                  | Values | Description                 |
|---------------------|-----------------------|--------|-----------------------------|
| @Input() activeItem | `VerticalSidenavItem` |        | Active item in the sidenav. |

### `VerticalSidenavGroup`

Group of sidenav-items which adds a title and a divider.

**Selector:** `vertical-sidenav-group`

**Properties**

| Name           | Type     | Values | Description                     |
|----------------|----------|--------|---------------------------------|
| @Input() title | `string` |        | Title above sidenav-item-group. |

### `VerticalSidenavItem`

Group of sidenav-items which adds a title and a divider.

**Selector:** `vertical-sidenav-item`

**Properties**

| Name           | Type     | Values | Description                                |
|----------------|----------|--------|--------------------------------------------|
| @Input() title | `string` |        | Title of a sidenav-item.                   |
| @Input() count | `number` |        | Count that is displayed next to the title. |