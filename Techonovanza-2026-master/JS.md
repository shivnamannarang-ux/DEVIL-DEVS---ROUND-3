# JavaScript Cheat Sheet

JavaScript adds behavior and interaction to a webpage. HTML creates the content and CSS styles it; JavaScript makes the page respond to the user.

## JavaScript Used in This Project

The project has two JavaScript files:

- `JS/home.js` controls the homepage login button and contact form.
- `JS/about.js` controls the About Us page login button.

## Variables

A variable stores information so it can be used later.

```javascript
var loginButton = document.getElementById("loginButton");
```

This stores the element with the id `loginButton` inside a variable called `loginButton`.

`var` is an older but beginner-friendly way to create a variable. Modern projects can also use `let` and `const`.

```javascript
let name = "Alex";
const bankName = "Horizon Bank";
```

- Use `let` when a value may change.
- Use `const` when a value should not be replaced.

## Finding HTML Elements

### `document.getElementById()`

Finds one HTML element by its id.

```javascript
var form = document.getElementById("contactForm");
```

This works with HTML like this:

```html
<form id="contactForm">...</form>
```

### `document.querySelector()`

Finds the first element that matches a CSS selector.

```javascript
var heading = document.querySelector("h1");
var card = document.querySelector(".service-card");
```

## Click Events

The login button runs a function when it is clicked.

```javascript
loginButton.onclick = function () {
    alert("Online banking login is coming soon!");
};
```

- `onclick` waits for a click.
- `function () { }` contains the code that should run.
- `alert()` displays a browser message.

You could change this to update the page instead:

```javascript
loginButton.onclick = function () {
    loginButton.textContent = "Login selected";
};
```

## Form Submit Events

The homepage form uses `onsubmit`.

```javascript
contactForm.onsubmit = function (event) {
    event.preventDefault();
    document.getElementById("formMessage").textContent = "Thanks!";
};
```

### What Each Line Does

- `onsubmit` runs when the form is submitted.
- `event` contains information about the form event.
- `event.preventDefault()` stops the browser from refreshing the page.
- `textContent` changes the text inside an element.

## Resetting a Form

```javascript
contactForm.reset();
```

This clears the input fields after the form is submitted.

## Changing Styles with JavaScript

JavaScript can add or remove a class.

```javascript
var card = document.querySelector(".service-card");
card.classList.add("featured");
```

The CSS class must already exist for this to have a visual effect.

You can also change a style directly, but classes are usually easier to manage:

```javascript
card.style.backgroundColor = "orange";
```

## Conditions

Conditions let the program make a decision.

```javascript
var email = document.getElementById("email");

if (email.value === "") {
    alert("Please enter your email.");
}
```

The code inside the `if` block runs only when the email field is empty.

## Useful Methods

| Method | Use | Example |
|---|---|---|
| `alert()` | Shows a message box. | `alert("Hello");` |
| `getElementById()` | Finds an element by id. | `document.getElementById("email")` |
| `querySelector()` | Finds the first matching element. | `document.querySelector("h1")` |
| `textContent` | Reads or changes text. | `message.textContent = "Done";` |
| `classList.add()` | Adds a CSS class. | `box.classList.add("active");` |
| `classList.remove()` | Removes a CSS class. | `box.classList.remove("active");` |
| `reset()` | Clears a form. | `form.reset();` |
| `preventDefault()` | Stops the default browser action. | `event.preventDefault();` |

## Ideas for Competitors

Try adding these features:

- A menu button that opens and closes a navigation menu
- A show and hide balance button
- A savings goal calculator
- A FAQ where questions open when clicked
- A character counter for a message field
- A success message after a new account form
- A dark mode button

Example of a simple toggle:

```javascript
var details = document.getElementById("details");
var button = document.getElementById("showButton");

button.onclick = function () {
    if (details.style.display === "none") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
};
```

## Good Practice

- Use meaningful variable names.
- Use `event.preventDefault()` when a form should not reload the page.
- Check that an element exists before using it.
- Keep one small task inside each function.
- Test the browser console when something does not work.
- Never use real passwords, bank details, or private customer data in this project.
