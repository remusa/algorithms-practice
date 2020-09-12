# Frontend

## HTML/CSS

- `none`: removes the element from the page. The element is still in the DOM, but it is removed
  visually and any other conceivable way (you can’t tab to it or its children, it is ignored by
  screen readers, etc).
- `ìnline`: default value for elements. Think of elements like `<span>`, `<em>`, or `<b>` and how
  wrapping text in those elements within a string of text doesn't break the flow of the text.
  - Accepts margin and padding, but the element still sits inline.
  - Margin and padding will only push other elements horizontally away, not vertically.
  - The default value for elements. Think of elements like `<span>`, `<em>`, or `<b>` and how
    wrapping text in those elements within a string of text doesn't break the flow of the text.
- `inline-block`: similar to inline in that it will set inline with the natural flow of text (on the
  "baseline"). The difference is that you are able to set a width and height which will be
  respected.
- `block`: usually container elements, like `<div>`, `<section>`, and `<ul>`, and text "blocks" like
  `<p>` and `<h1>`.
  - Block level elements do not sit inline but break past them.
  - By default (without setting a width) they take up as much horizontal space as they can.
- Others: `flex`, `grid`, `table`.

* **Critical rendering path**: sequence of steps the browser goes through to convert HTML, CSS and
  JavaScript into pixels on the screen.
  - A _render tree_ is created and rendered on the screen. `DOM` (Document Object Model) + `CSSOM`
    (CSS Object Model) = `render tree`.
  - CSS blocks rendering. It needs to be compiled on one go.
  - Scripts block rendering, except for `async` scripts (prefer `async` tag to `defer`).
  - Tips:
    - Reduce the number of static files loaded.
    - Minimize the number of network requests.

## Resources

- [display | CSS-Tricks](https://css-tricks.com/almanac/properties/d/display/)

* [Critical rendering path explained - YouTube](https://www.youtube.com/watch?v=FnhieCCfhlA)
