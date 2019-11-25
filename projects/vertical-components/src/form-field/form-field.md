# Overview

`<vertical-form-field>` is a component used to wrap several vertical components and apply text field styles such as the underline, label, prefix/suffix, and hint/error messages.

In this documentation, "form field" refers to the wrapper component `<vertical-form-field>` and "form-field-control" refers to the components that the `<vertical-form-field>` is wrapping (e.g. input).

The following vertical components are designed to work inside a `<vertical-form-field>`:
- `<input vertical-input>`

## Appearance

The `vertical-form-field` has two different appearance variants which can be set via the `appearance` input. The `filled` appearance shows the input box with an underline underneath it. The `outlined` appearance adds a border all the way around instead of just an underline. By default, the `filled` appearance will be applied.

## Hints

Hints are additional descriptive text that appear below the form field's underline. A `<vertical-form-field>` can only have one `<vertical-hint>` element. 

Please note that per design a hint only takes up 80% of the available width, which can lead to a hint being cut off. Therefore try to keep your hints as short and clear as possible.

## Errors

Errors can be shown below the form field underline by adding a `<vertical-error>` element inside the `<vertical-form-field>`. The `vertical-form-field` uses `formControl` to detect errors. Therefore it is needed to include a `formControl` in your application if you want to display error messages below form fields.

Errors will be hidden initially and will be displayed on invalid form fields after the user has interacted with the element or the parent form has been submitted. Since errors occupy the same space as hints, hints are hidden when errors are shown. A `<vertical-form-field>` can only have one `<vertical-error>` element. If a form field can have more than one error state it is up to your app to toggle which message should be displayed. 

Please note that per design an error only takes up 80% of the available width, which can lead to an error being cut off. Therefore try to keep your errors as short and clear as possible.

## Label

A label is a text that is displayed above the form field by adding a `<vertical-label>` element inside of a `<vertical-form-field>`.

A `vertical-label` will insert a native html `<label>` element with the `for` attribute set to the unique id of the form field control (e.g. input).

Please note that per design a label only takes up 80% of the available width, which can lead to a label being cut off. Therefore try to keep your labels as short and clear as possible.

## Prefix & Suffix

Custom content can be included before and after the input tag, as a prefix or suffix. Adding the `vertcalPrefix` directive to an element inside the `<vertical-form-field>` will designate it as the prefix. Similarly, adding `verticalSuffix` will designate it as the suffix.

## Troubleshooting

### Error: vertical-form-field must contain a VerticalFormFieldControl

This error occurs when you have not added a form field control to your form field. This happens when you try to contain an element that is not supported by the vertical-form-field. Make sure you've added the vertical-input directive to your input element and imported VerticalInputModule.

### Error: A label was already declared

This error occurs if you have added multiple <vertical-labe> elements to your form-field. You can only have one hint that is displayed above the form field.

### Error: A hint was already declared

This error occurs if you have added multiple <vertical-hint> elements to your form-field. You can only have one hint that is displayed below the underline of the form-field. If you need to switch between different hints, you may use 'ngIf' or 'ngSwitch'.

### Error: An error was already declared

This error occurs if you have added multiple <vertical-error> elements to your form-field. You can only have one error that is displayed below the underline of the form-field. If you need to switch between different errors, you may use 'ngIf' or 'ngSwitch'.

# API

## API reference for vertical form-field

`import { VerticalFormFieldModule } from '@verticalgmbh/components';`

## Directives

### `VerticalFormField`

Container for form controls that applies styling and behavior.

**Selector:** `vertical-form-field`

**Properties**

| Name                | Type                        | Values                 | Description                      |
|---------------------|-----------------------------|------------------------|----------------------------------|
| @Input() appearance | VerticalFormFieldAppearance | `filled`<br>`outlined` | The form-field appearance style. |

### `VerticalLabel`

Label for the form-field.

**Selector:** `vertical-label`

### `VerticalError`

Error message to be displayed below the form-field.

**Selector:** `vertical-error`

### `VerticalHint`

Hint message to be displayed below the form-field.

**Selector:** `vertical-hint`

### `VerticalPrefix`

Prefix to be placed in front of the form field.

**Selector:** `[verticalPrefix]`

### `VerticalSuffix`

Suffix to be placed in front of the form field.

**Selector:** `[verticalSuffix]`