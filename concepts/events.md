# Events

* **Event delegation**: instead of assigning an event handler to each element that is handled in a similar way, we put a single handler on their common ancestor, so when something triggers an event (like clicking) it *bubbles* up to the parent.
  * Useful because event listeners are very expensive on the page because every time it re-renders it needs to be re-added to the DOM.
  * In the handler we get `event.target`, see where the event actually happened and handle it.
  * Instead of listening for a change on the inputs directly (the children elements), we should look for an HTML element that is going to be on the page when the page initially loads (the parent element).
* **Event bubbling or event propagation**: place an event listener on a single parent HTML element that lives above a HTML child, and that event listener will get executed whenever an event occurs on any of its child nodes — even if these node children are added to the page after the initial load!.

## Resources

* [Part 4: What is Event Delegation in JavaScript? - Bret Doucette - Medium](https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983)
