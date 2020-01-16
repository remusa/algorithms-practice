# Cheat sheet

## JavaScript

* **Data types**: SBN NUS O
  * String
  * Number
  * Boolean
  * null
  * undefined
  * Symbol
  * Object

* **Undeclared, undefined and null**:
  * *undeclared*: variable doesn't exist (no identifier).
  * *undefined*: declared but not assigned a value.
  * *null*: value is `null` (explicitly stated).

* **Callback**: a function passed into another function as an argument.
  * The function you’re passing the callback function to is called a *higher order function*.
  * *Uses*:
    * Abstraction over turning one value into another.
    * Delaying execution of a function until a particular time.
  * *Callback hell*: many nested callbacks.

* **Promise**: object that may produce a single value some time in the future. Represents the completion or failure of the operation. Specifically made for handling async operations.
  * *States*: pending, fulfilled, or rejected.
  * *Arguments*: a *callback function*:
    * This function is going to be passed two arguments, *resolve* and *reject*.
  * Can be *chained* using multiple `then()`. Each one returns a promise.

* **Async/await**: makes asynchronous code look like synchronous code.
  * `async` functions return a `Promise`.

* `bind, call and apply`:
  * Ways of explicitly binding the `this` keyword to a context.
  * Use `.bind()` when you want that function to later be called with a certain context, useful in events.
  * Use `.call()` or `.apply()` when you want to invoke the function immediately, with modification of the context.
    * A context is an object that replaces `this` keyword inside the function.

* **Event delegation**: instead of assigning an event handler to each element that is handled in a similar way, we put a single handler on their common ancestor, so when something triggers an event (like clicking) it *bubbles* up to the parent.
  * Useful because event listeners are very expensive on the page because every time it re-renders it needs to be re-added to the DOM.
  * In the handler we get `event.target`, see where the event actually happened and handle it.
  * Instead of listening for a change on the inputs directly (the children elements), we should look for an HTML element that is going to be on the page when the page initially loads (the parent element).
* **Event bubbling or event propagation**: place an event listener on a single parent HTML element that lives above a HTML child, and that event listener will get executed whenever an event occurs on any of its child nodes — even if these node children are added to the page after the initial load!.

* **Prototypal Inheritance**: all objects have a `prototype` property. If we try to access a property on an object and JS doesn't find, it will try to look for it in the `prototype`, and the `prototype`'s `prototype`. This is how JavaScript simulates inheritance.
  * *Get the prototype of an object*: use `Object.getPrototypeOf(<object>`.
  * *Determining if a property lives on the prototype*: use `<object>.hasOwnProperty`.
  * *Check if an object is an instance of a Class*: use `<object> instanceof <Class>`.

* `this`: refers to the current execution context.
  * If the `new` keyword is used when calling the function, this inside the function is a brand new object.
  * If `apply`, `call`, or `bind` are used to call/create a function, `this` inside the function is the object that is passed in as the argument.
  * If a function is called as a method, such as `obj.method()` , `this` is the object that the function is a property of.
  * If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, this is the global object. In a browser, it is the `window` object. If in strict mode (`'use strict'`), this will be `undefined` instead of the `global` object.
  * If multiple of the above rules apply, the rule that is higher wins and will set the `this` value.
  * If the function is an ES2015 arrow function, it ignores all the rules above and receives the `this` value of its surrounding scope at the time it is created.

* **Closure**: a function inside another (parent) function, that remembers the context (and state, variables, methods, etc.) of its parent.
  * Has access to its outer context (the parent's), but not the other way around.
  * Has access to *3 scopes*: local, the parent's and the global.
  * *Usage*:
    * Extends behaviour of the parent function.
    * Hides implementation details.
    * Preserves values created in the parent function.

```javascript
function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```

**Hoisting**: variable and function declarations are moved to the top of the code. The variable and function declarations are put into memory during the `compile phase`. Declarations are initialized as `undefined` when they're defined.

**Declaration**: create new identifier (with `undefined`) in memory.
**Initialization**: assign a value.

* **Scope**: defines where variables/functions are accesible.
  * *global*: available anywhere.
  * *function*: available inside the function.
  * *block*: avaiable inside the block (curly braces).

* **Variables**:
  * *variables created without var*: global scope.
  * *var*: function scoped. If you try to use a variable declared with var before the actual declaration, you’ll just get undefined.
  * *let*: block scoped.
  * *const*: block scoped, IMMUTABLE.

* **Constructor**: defines and initializes objects and their features. Called when a class is initialized via new.

* `super()`: used to call its parent’s constructor and `super.<methodName>` to access its parent’s methods. This means we can use the parents properties and method in the children.

* **Worker**: used to off-load expensive tasks from the main thread to a different thread.
  * Helps with not blocking the UI, since JavaScript is single-threaded.

## Loops

* **for loops**: 3 statements -> initialize some kind of counter, condition, increment/decrement
  * `while` loops-
* **for...of**: used for `iterables` (`arrays`, NOT objects unless converted with `keys()`, `values()`, `entries()`) specially when length isn't known. Doesn't need to create index variables.
* **for...in**: used for objects (`enumerable` properties).
* **Array.forEach**: pass a function and execute it on each item. Pass (value, index, object).
  * `Array.every, .some, .map, .filter, .reduce`

`slice`: returns a new array, *doesn't mutate* the original.
`splice`: *modifies* original array.

## React

* **Lifecycle methods**:
  * `componentWillMount()`: called before `render()` when a component is being mounted to the DOM.
  * `componentDidMount()` API calls (ajax requests), attach EventListener, timers/listeners.
  * `componentWillReceiveProps()`: called whenever a component is receiving new props.
  * `shouldComponentUpdate()`: new state or props.
  * `componentWillUpdate()`: called whenever a component is receiving new props.
  * `componentDidUpdate()`: called immediately after a component re-renders.
  * `componentWillUnmount()`: remove EventListeners and timers/intervals.
