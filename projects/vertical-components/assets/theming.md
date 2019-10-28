## Default themes

The vertical component library comes with two pre-built theme css files. These theme files include all of the necessary styles and color palettes, so you only have to include a single css file in your app.

Available pre-built themes:
- `vertical-light-theme.css`
- `vertical-dark-theme.css`

If you're using Agular CLI, just include one line in your `styles.css` file:

```css
@import '@verticalgmbh/components/themes/vertical-light-theme.scss';
```

## Defining a custom theme

When you want to use a custom theme, you can create you own theme file.

A custom theme file needs to do the following things:
1. Imports the `all-theme.scss` file. This includes all component styles.
2. Defines a color palette. The color palette has to be based on the [Material Design Color System](https://material.io/design/color/#color-theme-creation). You can also create a seperate file for your color palette and import it in to your theme file.
3. Imports the `mat-core()` Sass mixin. This includes all common styles used by multiple components. This should only be included once in your app.
4. Defines a theme data-structure. You can create a theme using the `mat-light-theme` or `mat-dark-theme` functions. The output of this function is then passed to the `vertical-theme` mixin, which will output all of the corresponding styles for the theme.

### Example

```css
@import "~@verticalgmbh/components/all-theme";
@import "./custom-palette";

/* Include common styles */
@include mat-core();

/* Define a theme */
$primary: mat-palette($vertical-purple);
$accent: mat-palette($vertical-green);

$theme: mat-dark-theme($primary, $accent);

/* Include all theme styles for the components */
@include vertical-theme($theme);
```