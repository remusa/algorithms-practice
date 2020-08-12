# React

- **Lifecycle methods**:
  [React lifecycle methods diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

  - `componentWillMount()`: called before `render()` when a component is being mounted to the DOM.
  - `componentDidMount()` API calls (ajax requests), attach EventListener, timers/listeners.
  - `componentWillUnmount()`: remove EventListeners and timers/intervals.
  - `componentWillUpdate()`: called whenever a component is receiving new props.
  - `componentDidUpdate()`: called immediately after a component re-renders.
  - `componentWillReceiveProps()`: called whenever a component is receiving new props.
  - `shouldComponentUpdate()`: new state or props.

- **Component**: React elements. A part of reusable code.

- **VirtualDOM** the ideal representation of the UI. Kept in memory and synced to the real DOM using
  `ReactDOM`.
- **Reconciliation**: process through which React updates the DOM.

  - **Diffing algorithm**: React compares the root elements:
    - If they're of different types it will rebuild the tree.
    - If they're of the same type, it will update changed attributes.
  - **Keys**: React matches children on both trees.
    - Helps avoid rerendering stable components when moved (example: list elements that change
      order).

- **Props**: properties passed from parent to child components.
- **State**: actual data/properties of the current component.

- **One way databinding**: only the component can update the HTML.

  - Data flows to child components from parent components (containers).
  - React doesn't have a mechanism to allow the HTML to change the component. `render(data) -> UI`.
  - To update a value from the HTML it must have an `event handler` like `onChange` attached.
  - Changing data updates view, but changing the input in the view will not update the data, unless
    programmer does it explicitly by attaching a listener to the input.
  - _Two-way data binding_: changing data changes view and vice versa, updating input inside view
    updates data.

- **Composition vs. inheritance**: components should be specialized.

  - A more _specific_ component renders a more _generic_ one by passing `props`.

- **PropTypes**:

  - _Problems_: can become legacy documentation if not maintained.
  - _Tips_: use `shapeOf` instead of `object`.

- **PureComponent**: improves performance by _memoizing_ (only updates the component if props
  change).

  - Handles the `shouldComponentUpdate` method automatically by shallow comparing shallow props and
    states.
  - Similar to `React.memo()` for functional components.

- **Types of Components**:
  - A _stateless functional component_ is a function that accepts props and returns `JSX`.
  - A _stateless component_ is a class that extends `React.Component`, but does not use internal
    state.
  - A _stateful component_ is a component that maintains its own internal state.

## Resources

- [React lifecycle methods diagram](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)
- [javascript - Can anyone explain the difference between Reacts one-way data binding and Angular's two-way data binding - Stack Overflow](https://stackoverflow.com/questions/34519889/can-anyone-explain-the-difference-between-reacts-one-way-data-binding-and-angula)
- [Understanding unidirectional data flow in React - Liz Denhup - Medium](https://medium.com/@lizdenhup/understanding-unidirectional-data-flow-in-react-3e3524c09d8e)
- [How React Reconciliation Works | CSS-Tricks](https://css-tricks.com/how-react-reconciliation-works/)
- [React job interview - Questions - YouTube](https://www.youtube.com/watch?v=nRI0dn6GTj8)
- [When to use Component or PureComponent - codeburst](https://codeburst.io/when-to-use-component-or-purecomponent-a60cfad01a81)
- [React Top-Level API – React](https://reactjs.org/docs/react-api.html#reactpurecomponent)
