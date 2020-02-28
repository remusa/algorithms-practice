# Hoisting, closures

## Execution context

* **Execution context**: just like functions/modules/packages allow you to manage the complexity of writing code, *execution contexts* allow the JavaScript engine to manage the complexity of interpreting and running code.
* Each *execution context* has two separate phases:
  * **Creation**: JavaScript does the following:
    1. Create a `global` object.
    2. Create an object called `this`.
    3. Set up memory space for variables and functions.
    4. Assign variable declarations a default value of `undefined` while placing any function declarations in memory.
  * **Execution**: the JavaScript engine starts running the code line by line and executing it.

* **Global Execution Context**: the *execution context* that gets created when the JavaScript engine runs the code.
  * Initially it consists of two things:
    * the `global` object.
    * a variable called `this`: `this` references the `global` object which will be `window` if you’re running JavaScript in the browser or `global` if you’re running it in a Node environment.
* **Function Execution Context**: called whenever a function is *invoked*.
  * Doesn't create a `global` object.
  * Everything else that happens during the *Creation* phase is the same.
      0. ~~Create a `global` object.~~
      1. Create an `arguments` object.
      2. Create an object called `this`.
      3. Set up memory space for variables and functions.
      4. Assign variable declarations a default value of `undefined` while placing any function declarations in memory.
  * Any argument passed in will be added as a local variable in that function’s *execution context*.
  * Variables declared inside of a function live inside that function’s *execution context*.

* **Execution Stack or Call Stack**: anytime a function is invoked, a new *execution context* is created and added to the *execution stack*. Whenever a function is finished running through both the *Creation* and *Execution* phase, it gets popped off the *execution stack*.
  * JavaScript is *single threaded* (only one task can be executed at a time).

## Hoisting

* **Hoisting**: the process of assigning variable declarations a default value of `undefined` during the *creation* phase.
* **Note**: nothing is actually "hoisted" or moved around.

## Scopes

* **Scope**: the current *execution context* or where variables are accesible.
* **Scope chain**: if the variable doesn’t exist in the current *execution context*, it’ll look to to nearest parent *execution context* for that variable. This lookup chain will continue all the way until the engine reaches the *Global Execution Context*. In that case, if the *Global Execution Context* doesn’t have the variable, it’ll throw a `Reference Error`.

## Variables

### Global variables

* In the browser, anytime you create a variable in the *Global Execution Context* (outside of any function), that variable will be added as a property on the `window` object.
* In both the browser and in Node, if you create a variable without a declaration (ie without `var`, `let`, or `const`), that variable will also be added as a property on the `global` object.

```javascript
// In the browser
var name = 'Tyler'

function foo () {
    bar = 'Created in foo without declaration'
}

foo()

console.log(window.name) // Tyler
console.log(window.bar) // Created in foo without declaration
```

## Closures

* **Definition**: a *closure* is a function inside another (parent) function, that *remembers* the context (and state, variables, methods, etc.) of its parent. A closure has access to its outer context (the parent's), but not the other way around. A closure has access to *3 contexts*: local, the parent's and the global.
* **Usage**:
  * Extends behavior of the parent function.
  * Hides implementation details.
  * Preserves values created in the parent function.

* **Other definitions**:
  * A *closure* is the combination of a function and the lexical environment within which that function was declared.
    * Closures are useful in hiding the implementation of functionality while still revealing the interface.
  * A *closure* is simply a function inside another function. It is used when you want to extend behavior such as pass variables, methods, or arrays from an outer function to inner function. We can also access the context defined in outer function from inner function, but not the other way around.
    * Why is this relevant?
      * Extends behavior
      * Useful when working with events
  * A *closure* is when a function *remembers* its lexical scope even when the function is executed *outside* that lexical scope.
  * A *closure* is an inner function that has access to the parent function’s variables, even after the parent function has executed.
  * A *closure* is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.
    * To use a closure, define a function inside another function and expose it. To expose a function, return it or pass it to another function.
    * The inner function will have access to the variables in the outer function scope, even after the outer function has returned.

* Why would you use one?
  * Data privacy / emulating private methods with closures. Commonly used in the module pattern.
  * Partial applications or currying.

* Example:

```javascript
function createCount(){
   let state = 0

   return function count(){
      state += 1
      return state
   }
}

let count = createCount()
console.log(count()) //1
console.log(count()) //2
```

```javascript
function memoizedAddTo80() {
    let cache = {}

    return function(n) {
        // closure to avoid putting cache in global scope
        if (n in cache) {
            return cache[n]
        } else {
            console.log(`long operation`)
            cache[n] = n + 80
            return cache[n]
        }
    }
}

const memoized = memoizedAddTo80()

console.log('1', memoized(5))
console.log('2', memoized(5))
console.log('3', memoized(6))
```

## Resources

* [The Ultimate Guide to Hoisting, Scopes, and Closures in JavaScript](https://tylermcginnis.com/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/)
* [front-end-interview-handbook/javascript-questions.md at master · yangshun/front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/javascript-questions.md#what-is-a-closure-and-howwhy-would-you-use-one)
* [Learn Origin of Closure – Deep JavaScript Foundations, v3](https://frontendmasters.com/courses/deep-javascript-v3/what-is-closure/)
* [Master the JavaScript Interview: What is a Closure?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
* [Learn these core JavaScript concepts in just a few minutes](https://www.freecodecamp.org/news/learn-these-core-javascript-concepts-in-just-a-few-minutes-f7a16f42c1b0/)
* [A perfect guide for cracking a JavaScript interview (A developer’s perspective)](https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d)
* [Learn these JavaScript fundamentals and become a better developer](https://www.freecodecamp.org/news/learn-these-javascript-fundamentals-and-become-a-better-developer-2a031a0dc9cf/)
* [js-bits/closures.js at master · vasanthk/js-bits](https://github.com/vasanthk/js-bits/blob/master/js/closures.js)
