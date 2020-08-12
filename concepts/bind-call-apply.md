# Bind, call and apply

- **TLDR**: Use `.bind()` when you want that function to later be called with a certain context,
  useful in events. Use `.call()` or `.apply()` when you want to invoke the function immediately,
  with modification of the context.

  - A _context_ is an object that replaces `this` keyword inside the function.

- Three ways of _explicitly binding_ the `this` keyword to a context.
- `call` is a property on every function and the first argument you pass to it will be the _context_
  (or the focal object) in which the function is invoked. In other words, the first argument you
  pass to call will be what the `this` keyword inside that function is referencing.

```javascript
function greet(l1, l2, l3) {
  alert(`Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`)
}

const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

greet.call(user, languages[0], languages[1], languages[2])
```

- `apply` is the exact same thing as `call`, but instead of passing in arguments one by one, you can
  pass in a single array and it will spread each element in the array out for you as arguments to
  the function.

```javascript
const languages = ['JavaScript', 'Ruby', 'Python']

// greet.call(user, languages[0], languages[1], languages[2])
greet.apply(user, languages)
```

- **Difference**: `call` requires the arguments to be passed in one-by-one, and `apply` takes the
  arguments as an array.

- `bind`: is the same as `call`, but instead of immediately invoking the function, it’ll return a
  new function that you can invoke at a later time.
  - Use a method over and over with the `this` context of another object, and in that case you could
    use the bind method to create a brand new function with an explicitly bound this.
  - Helpful when you want to use events to access properties of one class within another class.

```javascript
function greet(l1, l2, l3) {
  alert(`Hello, my name is ${this.name} and I know ${l1}, ${l2}, and ${l3}`)
}

const user = {
  name: 'Tyler',
  age: 27,
}

const languages = ['JavaScript', 'Ruby', 'Python']

const newFn = greet.bind(user, languages[0], languages[1], languages[2])
newFn() // alerts "Hello, my name is Tyler and I know JavaScript, Ruby, and Python"
```

## Resources

- [Understanding the "this" keyword, call, apply, and bind in JavaScript](https://tylermcginnis.com/this-keyword-call-apply-bind-javascript/)
- [Understanding This, Bind, Call, and Apply in JavaScript – Tania Rascia](https://www.taniarascia.com/this-bind-call-apply-javascript/)
