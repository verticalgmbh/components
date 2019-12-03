# VerticalComponents

This is the library of the vertical team's UI components.

## Installation

```bash
npm install @verticalgmbh/components
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

Import the theme file by including the followng line in your `styles.scss`:

```css
@import '@verticalgmbh/components/prebuilt-themes/vertical-light-theme.css';
```
If you want to use a custom theme, please follow the [theming guide](https://github.com/verticalgmbh/components/tree/master/projects/vertical-components/assets/theming.md).

Make sure that you have installed [material icons](https://google.github.io/material-design-icons/) and the [roboto font](https://fonts.google.com/specimen/Roboto).

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

| Feature    | Documentation   |
|------------|-----------------|
| button     | [Docs][1]       |
| checkbox   | [Docs][2]       |
| form-field | [Docs][3]       |
| input      | [Docs][4]       |
| tabs       | [Docs][5]       |
| ---------  | --------------- |
| theming    | [Guide][6]      |

[1]: https://github.com/verticalgmbh/components/tree/master/projects/vertical-components/src/button/button.md
[2]: https://github.com/verticalgmbh/components/tree/master/projects/vertical-components/src/checkbox/checkbox.md
[3]: https://github.com/verticalgmbh/components/tree/master/projects/vertical-components/src/form-field/form-field.md
[4]: https://github.com/verticalgmbh/components/tree/master/projects/vertical-components/src/input/input.md
[5]: https://github.com/verticalgmbh/components/tree/master/projects/vertical-components/src/tabs/tabs.md
[6]: https://github.com/verticalgmbh/components/tree/master/projects/vertical-components/assets/theming.md
