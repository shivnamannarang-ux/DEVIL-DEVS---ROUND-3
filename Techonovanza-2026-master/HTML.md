# HTML Cheat Sheet

HTML creates the structure and content of a webpage. It tells the browser what each part of the page means.

## Basic HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
</head>
<body>
    <h1>Hello</h1>
</body>
</html>
```

### Important Elements

| Element | Use | Example |
|---|---|---|
| `<!DOCTYPE html>` | Tells the browser that the document uses modern HTML. | `<!DOCTYPE html>` |
| `<html>` | Wraps the complete webpage. | `<html lang="en">` |
| `<head>` | Holds page information that is not usually shown on the page. | `<head>...</head>` |
| `<title>` | Sets the name shown in the browser tab. | `<title>Horizon Bank</title>` |
| `<body>` | Holds everything visible on the page. | `<body>...</body>` |
| `<h1>` to `<h6>` | Creates headings. `h1` is the most important heading. | `<h1>Welcome</h1>` |
| `<p>` | Creates a paragraph. | `<p>Banking made simple.</p>` |
| `<a>` | Creates a link to another page or section. | `<a href="about.html">About Us</a>` |
| `<button>` | Creates a button that can be used with JavaScript. | `<button>Log in</button>` |
| `<img>` | Shows an image. | `<img src="bank.jpg" alt="Bank building">` |
| `<form>` | Groups input fields that collect information. | `<form>...</form>` |
| `<input>` | Creates a field where a user can type information. | `<input type="email">` |
| `<label>` | Gives an input field a clear name. | `<label for="email">Email</label>` |
| `<section>` | Groups one section of related content. | `<section>...</section>` |
| `<div>` | Groups content when there is no more specific element. | `<div class="card">...</div>` |
| `<header>` | Contains the top part of a page, often the logo and navigation. | `<header>...</header>` |
| `<nav>` | Holds the main navigation links. | `<nav>...</nav>` |
| `<main>` | Contains the main content of the page. | `<main>...</main>` |
| `<footer>` | Contains the bottom part of a page. | `<footer>...</footer>` |
| `<article>` | Holds one independent item, such as a service card. | `<article>...</article>` |
| `<br>` | Moves text to a new line. | `Your money.<br>Your future.` |
| `<span>` | Styles a small part of text. | `<span class="logo-mark">H</span>` |

## Attributes

Attributes add extra information to an HTML element.

```html
<a class="active" href="about.html">About Us</a>
```

- `class="active"` gives the element a class that CSS can style.
- `href="about.html"` tells the link where to go.

Common attributes:

| Attribute | Use |
|---|---|
| `class` | Connects an element to CSS. Many elements can use the same class. |
| `id` | Gives one element a unique name. JavaScript can use it to find the element. |
| `href` | Sets the destination of a link. |
| `src` | Sets the location of an image or script. |
| `alt` | Describes an image for accessibility. |
| `type` | Sets the type of an input or button. |
| `placeholder` | Shows example text inside an empty input. |
| `required` | Makes an input necessary before form submission. |

## HTML Used in This Project

### Linking CSS

```html
<link rel="stylesheet" href="../CSS/home.css">
```

The `link` element connects the homepage to its stylesheet. The `about.html` page connects to `about.css` instead.

### Linking JavaScript

```html
<script src="../JS/home.js"></script>
```

The `script` element connects the homepage to its JavaScript file. It is placed near the end of `body` so the page elements load before the script runs.

### Linking to a Section

```html
<a href="#services">Services</a>
<section id="services">...</section>
```

The `#services` link moves the visitor to the element with `id="services"`.

### Creating a Form

```html
<form id="contactForm">
    <input type="email" id="email" required>
    <button type="submit">Get started</button>
</form>
```

The `id` values allow JavaScript to find the form and respond when it is submitted.

## Good Practice

- Use one `h1` for the main heading of a page.
- Use headings in order: `h1`, then `h2`, then `h3`.
- Add `alt` text to images.
- Use labels for form inputs.
- Use meaningful class names such as `service-card` instead of names like `box1`.
- Close every opening tag that needs a closing tag.
- Indent nested elements so the structure is easy to read.
