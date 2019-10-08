# Closures

* **Closure**:
  * A *closure* is the combination of a function and the lexical environment within which that function was declared.
    * Closures are useful in hiding the implementation of functionality while still revealing the interface.
  * A *closure* is simply a function inside another function. It is used when you want to extend behavior such as pass variables, methods, or arrays from an outer function to inner function. We can also access the context defined in outer function from inner function, but not the other way around (remember the scope principles we talked about above).
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

* [front-end-interview-handbook/javascript-questions.md at master · yangshun/front-end-interview-handbook](https://github.com/yangshun/front-end-interview-handbook/blob/master/questions/javascript-questions.md#what-is-a-closure-and-howwhy-would-you-use-one)
* [Learn Origin of Closure – Deep JavaScript Foundations, v3](https://frontendmasters.com/courses/deep-javascript-v3/what-is-closure/)
* [Master the JavaScript Interview: What is a Closure?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36)
* [Learn these core JavaScript concepts in just a few minutes](https://www.freecodecamp.org/news/learn-these-core-javascript-concepts-in-just-a-few-minutes-f7a16f42c1b0/)
* [A perfect guide for cracking a JavaScript interview (A developer’s perspective)](https://medium.com/dev-bits/a-perfect-guide-for-cracking-a-javascript-interview-a-developers-perspective-23a5c0fa4d0d)
* [Learn these JavaScript fundamentals and become a better developer](https://www.freecodecamp.org/news/learn-these-javascript-fundamentals-and-become-a-better-developer-2a031a0dc9cf/)
* [js-bits/closures.js at master · vasanthk/js-bits](https://github.com/vasanthk/js-bits/blob/master/js/closures.js)
