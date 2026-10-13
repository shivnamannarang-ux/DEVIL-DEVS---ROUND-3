# CSS Cheat Sheet

CSS controls the appearance and layout of an HTML page. It changes colors, sizes, spacing, positions, and more.

## CSS Rule Structure

```css
.selector {
    property: value;
}
```

Example:

```css
.primary-button {
    background: #173f3b;
    color: white;
    padding: 16px 21px;
}
```

This selects every element with the `primary-button` class and gives it a background color, text color, and space inside the button.

## Selectors Used in This Project

| Selector | Use | Example |
|---|---|---|
| `body` | Styles the whole page. | `body { margin: 0; }` |
| `.class-name` | Selects elements with a class. | `.service-card { padding: 20px; }` |
| `#id-name` | Selects one element with an id. | `#contact { padding: 30px; }` |
| `element` | Selects every element of that type. | `h1 { font-size: 50px; }` |
| `element .class` | Selects a class inside an element. | `.site-footer .logo { color: green; }` |
| `:hover` | Changes an element when the mouse is over it. | `a:hover { color: orange; }` |

## Common Properties

| Property | Use | Example |
|---|---|---|
| `color` | Changes text color. | `color: white;` |
| `background` | Adds a background color. | `background: #173f3b;` |
| `font-family` | Chooses the text style. | `font-family: Arial, sans-serif;` |
| `font-size` | Changes text size. | `font-size: 20px;` |
| `font-weight` | Makes text normal or bold. | `font-weight: bold;` |
| `text-align` | Aligns text. | `text-align: center;` |
| `width` | Sets an element's width. | `width: 300px;` |
| `height` | Sets an element's height. | `height: 200px;` |
| `margin` | Adds space outside an element. | `margin: 20px;` |
| `padding` | Adds space inside an element. | `padding: 20px;` |
| `border` | Adds a line around an element. | `border: 1px solid gray;` |
| `border-radius` | Rounds corners. | `border-radius: 10px;` |
| `display` | Changes how an element is laid out. | `display: flex;` |
| `gap` | Adds space between flex or grid children. | `gap: 20px;` |
| `position` | Controls special positioning. | `position: absolute;` |
| `transform` | Rotates or changes an element. | `transform: rotate(-10deg);` |

## Layout Examples

### Flexbox

Flexbox is useful for placing items in a row or column.

```css
.site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

- `display: flex` activates Flexbox.
- `justify-content` controls the horizontal spacing.
- `align-items` controls vertical alignment.

### Grid

Grid is useful for creating columns.

```css
.service-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 17px;
}
```

This creates three equal columns with a gap between them.

### Centering a Section

```css
.section-width {
    width: 1120px;
    margin: auto;
}
```

`margin: auto` gives equal left and right space, which centers the section.

## CSS Used in This Project

- `.hero` creates two columns for the homepage introduction and card illustration.
- `.service-card` styles each banking service.
- `.featured` makes the first service card look different.
- `.contact-banner` styles the orange signup area.
- `.about-hero` creates the top section of the About Us page.
- `.story-image`, `.image-sun`, and `.image-line` create a simple illustration using CSS shapes.
- `.site-footer` styles the bottom of both pages.

## How to Change the Design

### Change the Main Colors

Find color values such as these in the CSS files:

```css
background: #173f3b;
color: #e58e52;
```

Replace the color code with another color.

### Change the Button Size

```css
.primary-button {
    padding: 16px 21px;
}
```

The first value controls top and bottom space. The second value controls left and right space.

### Add a New Card

The HTML needs a new element with the existing class:

```html
<article class="service-card">
    <h3>Mobile banking</h3>
    <p>Bank easily from your phone.</p>
</article>
```

The existing `.service-card` CSS will style it automatically.

## Good Practice

- Use clear class names.
- Keep one selector per block while learning.
- Group styles by page section.
- Use comments to label large sections.
- Check the page after changing sizes or spacing.
- Avoid changing many unrelated rules at the same time.
