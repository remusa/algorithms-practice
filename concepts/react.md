# React

* **Lifecycle methods**: [React lifecycle methods diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
  * `componentWillMount()`: called before `render()` when a component is being mounted to the DOM.
  * `componentDidMount()` API calls (ajax requests), attach EventListener, timers/listeners.
  * `componentWillReceiveProps()`: called whenever a component is receiving new props.
  * `shouldComponentUpdate()`: new state or props.
  * `componentWillUpdate()`: called whenever a component is receiving new props.
  * `componentDidUpdate()`: called immediately after a component re-renders.
  * `componentWillUnmount()`: remove EventListeners and timers/intervals.

* **Component**: React elements. A part of reusable code.

* **VirtualDOM** the ideal representation of the UI. Kept in memory and synced to the real DOM using `ReactDOM`.
* **Reconciliation**: process through which React updates the DOM.
  * **Diffing algorithm**: React compares the root elements:
    * If they're of different types it will rebuild the tree.
    * If they're of the same type, it will update changed attributes.
  * **Keys**: React matches children on both trees.
    * Helps avoid rerendering stable components when moved (example: list elements that change order).

* **Props**: properties passed from parent to child components.
* **State**: actual data/properties of the current component.

* **One way databinding**: only the component can update the HTML.
  * Data flows to child components from parent components (containers).
  * React doesn't have a mechanism to allow the HTML to change the component. `render(data) -> UI`.
  * To update a value from the HTML it must have an `event handler` like `onChange` attached.
  * Changing data updates view, but changing the input in the view will not update the data, unless programmer does it explicitly by attaching a listener to the input.
  * *Two-way data binding*: changing data changes view and vice versa, updating input inside view updates data.

* **Composition vs. inheritance**: components should be specialized.
  * A more *specific* component renders a more *generic* one by passing `props`.

## Resources

* [React lifecycle methods diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
* [javascript - Can anyone explain the difference between Reacts one-way data binding and Angular's two-way data binding - Stack Overflow](https://stackoverflow.com/questions/34519889/can-anyone-explain-the-difference-between-reacts-one-way-data-binding-and-angula)
* [Understanding unidirectional data flow in React - Liz Denhup - Medium](https://medium.com/@lizdenhup/understanding-unidirectional-data-flow-in-react-3e3524c09d8e)
* [How React Reconciliation Works | CSS-Tricks](https://css-tricks.com/how-react-reconciliation-works/)