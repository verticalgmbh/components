# VerticalComponents

This is the library of the vertical team's UI components.

## Installation

```bash
npm install @verticalgmbh/components
```

## Usage

Vertical components can be used as attributes on normal html elements.

### Example

```html
<button vertical-contained-button>Button</button>
<button vertical-contained-button disabled>Button</button>
```

## Getting started

### 1. Install component library

Install the vertical component library by running the following command:

```bash
npm install @verticalgmbh/components
```

Make sure that you have `@angular/cdk`, and `@angular/material` in your dependencies as well because we list these as peer dependencies:

```bash
npm install @angular/cdk @angular/material
```
### 2. Import theme

Import the theme file by including the followng line in your `styles.css`:

```css
@import '~@verticalgmbh/components/assets/themes/vertical-light-theme.scss';
```
If you want to use a custom theme, please follow the [theming guide](https://github.com/verticalgmbh/components/tree/master/projects/vertical-components/assets/theming.md).

### 3. Import modules

Import the modules you want to use by adding the following lines to your `app.module.ts` file:

```ts
import { VerticalButtonModule } from '@verticalgmbh/components';
…
@NgModule ({....
  imports: [...,
  VerticalButtonModule,
…]
})
```

### 4. Display a component

Add vertical attributes to a html tag in your `app.component.html`:

```html
<button vertical-contained-button>Button</button>
```

## Demo

You can find a demo of all components [here](https://components.vertical.de).

## Features

| Feature   | Documentation   |
|-----------|-----------------|
| button    | [Docs][1]       |
| tabs      | [Docs][2]       |
| --------- | --------------- |
| theming   | [Guide][3]      |

[1]: https://github.com/verticalgmbh/components/tree/master/projects/vertical-components/src/lib/button/button.md
[2]: https://github.com/verticalgmbh/components/tree/master/projects/vertical-components/src/lib/tabs/tabs.md
[3]: https://github.com/verticalgmbh/components/tree/master/projects/vertical-components/assets/theming.md
