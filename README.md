# `f-toggle` :bear:

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-toggle.svg)](https://badge.fury.io/js/%40justeat%2Ff-toggle)
[![Build Status](https://travis-ci.org/justeat/f-toggle.svg)](https://travis-ci.org/justeat/f-toggle)
[![Coverage Status](https://coveralls.io/repos/github/justeat/f-toggle/badge.svg)](https://coveralls.io/github/justeat/f-toggle)
[![Dependency Status](https://gemnasium.com/badges/github.com/justeat/f-toggle.svg)](https://gemnasium.com/github.com/justeat/f-toggle)

Fozzie vanilla JS toggle library.

Visibility is set by applying the `is-hidden` class to the target element.

## Adding `f-toggle` to your project

```bash
yarn add @justeat/f-toggle
```

Then, inside your script import and run `f-toggle`.

```js
import toggle from '@justeat/f-toggle';

toggle();
```

## Setting up toggles

To create a toggle add a `data-toggle-target` attribute to the element which is going to trigger the toggle

```html
<a data-toggle-target="toggle-me">Trigger toggle</a>
```

Then add a `data-toggle-name` attribute to the element which is going to be toggled

```html
<div data-toggle-name="toggle-me">I will be toggled</div>
```

### Showing elements

You can use the `show:` prefix in order to show an element when clicked

```html
<a data-toggle-target="show:toggle-me">Trigger toggle</a>
```

### Hiding elements

You can use the `hide:` prefix in order to hide an element when clicked

```html
<a data-toggle-target="hide:toggle-me">Trigger toggle</a>
```

### Multiple toggles

You can specify multiple targets and states by separating them with a space

```html
<a data-toggle-target="alpha beta hide:gamma show:delta">Trigger toggle</a>

<div data-toggle-name="alpha">alpha</div>
<div data-toggle-name="beta">beta</div>
<div data-toggle-name="gamma">gamma</div>
<div data-toggle-name="delta">delta</div>
```

This will toggle the visibility of `alpha` & `beta`, hide `gamma`, and show `delta`.

## Running the unit tests

This module is [covered by a suite of unit tests](test/index.test.js). To run them simply run `yarn test` on the command line.