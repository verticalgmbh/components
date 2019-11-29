# Overview

`vertical-input` is a component that allows native `<input>` elements to work inside a `<vertical-form-field>`.

All of the attributes that can be used with normal `<input>` elements can be used on `vertical-input` elements as well. The only limitation is that the `type` attribute can only be one of the values supported by `vertical-input`.

## Supported `<input>` types

The following input types can be used with `vertical-input`:
- color
- date
- datetime-local
- email
- month
- number
- password
- search
- tel
- text
- time
- url
- week

## Troubleshooting

### Error: Input type "..." isn't supported by vertical-input

This error occurs when you attempt to set an input's `type` property to a value that isn't supported by the `vertical-input` component. A list of supported `<input>` types can be found above.

# API

## API reference for vertical form-field

`import { VerticalInputModule } from '@verticalgmbh/components';`

## Directives

### `VerticalInput`

Component that allows a native input to work inside a `VerticalFormField`.

**Selector:** `input[vertical-input]`

**Properties**

| Name          | Type     | Values                                                                                                                                            | Description                |
|---------------|----------|---------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------|
| @Input() type | `string` | `color`<br>`date`<br>`datetime-local`<br>`email`<br>`month`<br>`number`<br>`password`<br>`search`<br>`tel`<br>`text`<br>`time`<br>`url`<br>`week` | Input type of the element. |