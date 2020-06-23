# Generators

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

## Resources

* [The Basics Of ES6 Generators](https://davidwalsh.name/es6-generators)
* [Diving Deeper With ES6 Generators](https://davidwalsh.name/es6-generators-dive)
* [Iterators and generators - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
