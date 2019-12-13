# Overview

## Troubleshooting

### Error: vertical-form-field must contain a VerticalFormFieldControl

This error occurs when you have not added a form field control to your form field. This happens when you try to contain an element that is not supported by the vertical-form-field. Make sure you've added the vertical-input directive to your input element and imported VerticalInputModule.

# API

## API reference for vertical form-field

`import { VerticalTableModule } from '@verticalgmbh/components';`

## Directives

### `VerticalTable`

Container for form controls that applies styling and behavior.

**Selector:** `vertical-table`

**Properties**

| Name                | Type                        | Values                 | Description                      |
|---------------------|-----------------------------|------------------------|----------------------------------|
| @Input() appearance | VerticalFormFieldAppearance | `filled`<br>`outlined` | The form-field appearance style. |