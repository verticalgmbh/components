# Overview

You can use vertical buttons on `<button>` and `<a>` elements. A `<button>` element should be used whenever some action is performed. An `<a>` element should be used whenever the user will navigate to another view.

## Variants

| Attribute                 | Description      |
|---------------------------|------------------|
| vertical-contained-button | Contained button |
| vertical-outlined-button  | Outlined button  |
| vertical-text-button      | Text button      |

# API

## API reference for vertical button

`import { VerticalButtonModule } from '@verticalgmbh/components';`

## Directives

### `VerticalContainedButton`

Contained button with vertical design.

**Selector:** `a[vertical-contained-button], button[vertical-contained-button]`

### `VerticalOutlinedButton`

Outlined button with vertical design.

**Selector:** `a[vertical-outlined-button], button[vertical-outlined-button]`

### `VerticalTextButton`

Text button with vertical design.

**Selector:** `a[vertical-text-button], button[vertical-text-button]`