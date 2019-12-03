# Overview
`<vertical-checkbox>` provides the most common functionality as a native `<input type="checkbox"` enhanced with vertical styling.

## Label
The checkbox label is provided via the content of the `<vertical-checkbox>`. The label can be positioned before or after the checkbox by setting the `labelPosition` property to `'before'` or `'after'`. By default, the `labelPosition` is set to `'after'`.

## States

A checkbox can have four different states: `checked`, `unchecked`, `indeterminate` or `disabled`. By default, a checkbox is set to be `unchecked`.

`<vertical-checkbox>` supports a `checked`, `indeterminate` and `disabled` state, similar to the native `<input type="checkbox">`, by just providing the property with the same name. While the indeterminate property of the checkbox is true, it will render as indeterminate regardless of the checked value.

# API

## API reference for vertical checkbox

`import { VerticalCheckboxModule } from '@verticalgmbh/components';`

## Directives

### `VerticalCheckbox`

A checkbox component with vertical design.

**Selector:** `vertical-checkbox`

**Properties**

| Name                   | Type      | Values                  | Description                                                                                                                                                          |
|------------------------|-----------|-------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| @Input() checked       | `boolean` |                         | Whether the checkbox is checked.                                                                                                                                     |
| @Input() disabled      | `boolean` |                         | Whether the checkbox is disabled.                                                                                                                                    |
| @Input() id            | `string`  |                         | A unique id for the checkbox input. If none is supplied, it will b auto-generated.                                                                                   |
| @Input() indeterminate | `boolean` |                         | Whether the checkbox is indeterminate. This can be used to represent a checkbox with three states, e.g. a checkbox that represents a nested list of checkable items. |
| @Input() labelPosition | `string`  | `'before'`<br>`'after'` | Whether the label should appear after or before the checkbox. Defaults to `'after'`.                                                                                 |
| @Input() name          | `string`  |                         | Name value will be applied to the input element if present.                                                                                                          |
| @Input() required      | `boolean` |                         | Whether the checkbox is required.                                                                                                                                    |
| @Input() value         | `string`  |                         | The value attribute of the native input element.                                                                                                                     |

