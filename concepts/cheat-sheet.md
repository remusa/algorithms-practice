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
* **Array.forEach**: pass a functon and execute it on each item. Pass (value, index, object).
  * `Array.every, .some, .map, .filter, .reduce`

* **Note**: differences between `map` and `forEach`:
  * `map` receives a function as a parameter and applies it on each element, returning a new array with the results of applying the function.
  * `forEach` receives a function as a parameter and executes it once for each array element.
  * `map` can be chained, `forEach` can't.
  * Neither directly *mutates* the array, although the callback function may do so.
  * `map` returns a new Array, `forEach` returns `undefined`.
  * Use `map` if the data will be changed or used.
  * Use `forEach` if you don't need the returned array.

`slice`: returns a new array, *doesn't mutate* the original.
`splice`: *modifies* original array.

## Generators

* Normal functions normally run to completion.
* **Generators** may be paused in the middle of running, one or many times, and resumed later, allowing other code to run during these paused periods.
* Inside the generator function, the `yield` keyword pauses the function from inside itself (it can't be paused from outside).
* Using `yield` is like making a *request* for a value from outside the function.
* By default, the value of `yield` is `undefined`.
* Once a function has *paused*, it *can't resume on its own* (an external control must be used to restart the generator).
* With normal functions, you get parameters at the beginning and a `return` value at the end. With generator functions, you send messages out with each `yield`, and you send messages back in with each restart.
* A generator function is defined by using the `*` special generator function type.
* **Note**: `yield` is an *expression*, not a *statement*, because when we restart the generator, we will send a value back in, and whatever we send in will be the computed result of that `yield` expression.

```javascript
function *foo() {
    var x = 1 + (yield "foo");
    console.log(x);
}

/*
The yield "foo" expression will send the "foo" string value out when pausing the generator function at that point, and whenever (if ever) the generator is restarted, whatever value is sent in will be the result of that expression, which will then get added to 1 and assigned to the x variable.
*/
```

### Generator Iterator

* `Iterators` are a special kind of behavior (a design pattern actually() where we step through an ordered set of values one at a time by calling `next()` until all values have been returned.
* To step throught the values of a generator function, we need an `iterator` to be constructed.
* An `object` is returned when calling an iterator with a `value` property and a `done` boolean property.
* **Note**: calling the generator function in the normal way doesn't actually execute any of its contents.

```javascript
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

// Create an iterator
var it = foo();

// Start iterating
const message = it.next();

// An object is returned
console.log(message); // { value:1, done:false }

console.log( it.next() ); // { value:2, done:false }
console.log( it.next() ); // { value:3, done:false }
console.log( it.next() ); // { value:4, done:false }
console.log( it.next() ); // { value:5, done:false }

// Calling it on the last value completes the generator function
console.log( it.next() ); // { value:undefined, done:true }
```

* Another example:

```javascript
function *foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var it = foo( 5 );

// note: not sending anything into `next()` here
console.log( it.next() );       // { value:6, done:false }
console.log( it.next( 12 ) );   // { value:8, done:false }
console.log( it.next( 13 ) );   // { value:42, done:true }
```

### for..of

* ES6 supports running iterators to completion with the `for..of` loop.

```javascript
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
}

for (var v of foo()) {
    console.log( v );
}
// 1 2 3 4 5

console.log( v ); // still `5`, not `6` :(
```

## React

* **Lifecycle methods**:
  * `componentWillMount()`: called before `render()` when a component is being mounted to the DOM.
  * `componentDidMount()` API calls (ajax requests), attach EventListener, timers/listeners.
  * `componentWillReceiveProps()`: called whenever a component is receiving new props.
  * `shouldComponentUpdate()`: new state or props.
  * `componentWillUpdate()`: called whenever a component is receiving new props.
  * `componentDidUpdate()`: called immediately after a component re-renders.
  * `componentWillUnmount()`: remove EventListeners and timers/intervals.

## Resources

* [Understanding Async Await | CSS-Tricks](https://css-tricks.com/understanding-async-await/)
* [The Differences Between forEach() and map() that Every Developer Should Know](https://www.freecodecamp.org/news/4-main-differences-between-foreach-and-map/)
