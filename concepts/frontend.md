# Frontend

## HTML/CSS

* `ìnline`: default value for elements. Think of elements like `<span>`, `<em>`, or `<b>` and how wrapping text in those elements within a string of text doesn't break the flow of the text.
  * Accepts margin and padding, but the element still sits inline.
  * Margin and padding will only push other elements horizontally away, not vertically.
* `inline-block`: similar to inline in that it will set inline with the natural flow of text (on the "baseline"). The difference is that you are able to set a width and height which will be respected.
* `block`: usually container elements, like `<div>`, `<section>`, and `<ul>`, and text "blocks" like `<p>` and `<h1>`.
  * Block level elements do not sit inline but break past them.
  * By default (without setting a width) they take up as much horizontal space as they can.

## Resources

* [display | CSS-Tricks](https://css-tricks.com/almanac/properties/d/display/)Inline

The default value for elements. Think of elements like `<span>`, `<em>`, or `<b>` and how wrapping text in those elements within a string of text doesn't break the flow of the text.
