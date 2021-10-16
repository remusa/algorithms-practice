# Frontend Interview

## JavaScript

What is hoisting?

What's the difference between const, let and var?

What's the difference between === and ==.

What's the main difference between an arrow function and a "normal" function (named)?

How can you handle asynchronous flows in JS? Promises, async/await.

-----

What's the difference between iterating over an array using a map, a forEach and a normal for cycle?

If you were dealing with an array of elements that need to perform asynchronous requests, what would you use and why?

Depends. You can map and create promises and resolve them all concurrently.

## React

When should requests to get data from a server be done in class/functional components?

You'll probably want to resend the request in componentDidUpdate. If we're receiving parameters via props and these ever change without remounting the component, you'll see stale data if you only send the request in the did-mount lifecycle.

A single useEffect would handle the equivalent mount, update, and unmount lifecycle stages. Ignoring prop updates is as simple as excluding them from the dependency array.

-----

Can you explain what is a closure in JavaScript? Can you name an example in general (like caching)? When do use it in React (ex: arrow functions in components).

-----

React function binding (ex: in class components)

-----

What does the children prop do in React?

-----

How would handle the prop drilling problem?

-----

An useEffect hook is causing a memory leak. What do you think are the possible causes?

Mention missing dependencies in the dep array for useEffect. Not calling a cleanup function

-----

How do you handle styling in a webapp? What about in React/React Native?

-----

What is the VirtualDOM in React

-----

Should you extract the request into a standalone component/hook?

-----

How do you handle errors? ErrorBoundaries?

------

What's the diff between class and functional components?

------

When would you use a class component instead of a functional component?

- Intervals can be easier to use.
- When you need to use a very specific lifecycle method.

------

What does use(insert Hook) do?

------

How do you handle routing?

------

Can you explain how the Virtual DOM works?

------

What's the difference between state and props?

- **Props**: properties passed from parent to child components.
- **State**: actual data/properties of the current component.

------

What's the difference between using a named function and an arrow function inside of a functional component?

------

When mapping through an array in React, why do items need a key?

------

Can you explain the relationship between an useEffect hook and a ref (created with useRef)?

If a ref is included in an useEffect dependency array, modifying it won't trigger a rerender because only elements that can trigger a rerender cause a useEffect to run.

------

When would you use a ref?

------

React.memo can improve the performance of your React app. Why not use it on every component?

You wouldn't want to use it for every component because you're not acknowledging that that memoization is a tradeoff between computation and memory. We could end up using extra memory for caching/memoizing components that already render plenty fast, or never re-render with the same props.

------

Does order matter when using React hooks?

------

How do you handle asynchronous flows in class/functional components?

------

How does React handle data-binding? Can you explain it using a form?

Uni-directional data flow or data binding

- **One way databinding**: only the component can update the HTML.

  - Data flows to child components from parent components (containers).
  - React doesn't have a mechanism to allow the HTML to change the component. `render(data) -> UI`.
  - To update a value from the HTML it must have an `event handler` like `onChange` attached.
  - Changing data updates view, but changing the input in the view will not update the data, unless
    programmer does it explicitly by attaching a listener to the input.
  - _Two-way data binding_: changing data changes view and vice versa, updating input inside view
    updates data.

-----

Event Bubbling

To make it easier to capture events from one source – the parent element – rather than setting an event handler on each inner child.

-----

How do you handle state managemente in React? Class vs. functional components, app state vs. server state.

-----

How would you share data from a server that changes frequently? What about data that rarely changes?

App data: local state -> useState, useReducer, Context, etc.
Server data: react-query, apollo-graphql, redux?

-----

A parent component has two children. One of them changes data frequently and the other one
computes an expensive result. The component has performance issues. How would you diagnose it? What would you try first?

- Moving state up and down the tree. Separating the components so as to not cause uneccesary rerenders.
- Performance tools: memo, useMemo, useCallback.

-----

What's your approach to testing in general?
How would you test an app with no tests? Assuming you have access to both the frontend and the backend, where do you start? What do you choose to test?
Favorite testing tools? Jest/React Testing Library/Cypress.

## Mobile

What navigation libraries have you worked with? What do you think about choosing one?

GitHub link?

What has been your experience in publishing to app stores?

Link to an app you have published?

Date persistance?

## References

* [Some interview questions that I had some troubles answering : reactjs](https://old.reddit.com/r/reactjs/comments/iul6gm/some_interview_questions_that_i_had_some_troubles/)
* [A thread of "advanced" React interview questions : reactjs](https://old.reddit.com/r/reactjs/comments/i4a45q/a_thread_of_advanced_react_interview_questions/)
* [React js entry/junior level interview questions. HELP : reactjs](https://old.reddit.com/r/reactjs/comments/jqan4l/react_js_entryjunior_level_interview_questions/))
* [Training OutLine - React Training](https://tkssharma.gitbook.io/react-training/training-outline)
* [Frequently Asked React and Front-end Interview Questions – Oğuzhan Olguncu](https://ogzhanolguncu.com/blog/frequently-asked-react-and-frontend-interview-questions)
* [Frequently Asked React and Front-end Interview Questions – Oğuzhan Olguncu](https://ogzhanolguncu.com/blog/frequently-asked-react-and-frontend-interview-questions)








## Resume

- [ ] Specific tasks bank credit card

- [ ] Write tests?

## Git

- Git flow

## JavaScript

- [ ] What's the difference between const, let and var?



- [ ] What's the difference between iterating over an array using a map, a forEach and a normal for cycle?



- [ ] Can you tell me one difference between a function expression (named function) and an arrow function



- [ ] - **Shallow vs deep copy**:
  - _Deep copy_: means that all of the values of the new variable are copied and _disconnected from
    the original variable_.
  - _Shallow copy_: means that certain (sub-)values are _still connected_ to the original variable.
  - **Note**: arrays and objects are stored only once when instantiated, and assigning a variable
    just creates a _pointer (reference)_ to that value. Changes in the copy trigger changes in the
    original.

```javascript
const a = 5

let b = a // this is the copy

b = 6

console.log(b) // 6
console.log(a) // 5

// Objects -> Shallow copy
const a = { name: 'John Doe' }

const b = a
b.name = 'Mary Jane'

console.log(b.name) // Mary Jane
console.log(a.name) // Mary Jane

const a = { name: 'John Doe' }

const b = { ...a } // Using the spread operator
const b = Object.assign({}, a) // Using Object.assign

// Objects -> Deep copy
const b = JSON.parse(JSON.stringify(a)) // Stringifying the object and then parsing it

b.name = 'Mary Jane'

console.log(a.name) // John Doe
console.log(b.name) // Mary Jane

// Arrays -> Shallow copy
const a = [1, 2, 3]

const b = [...a] // Using the spread operator

b[1] = 4

console.log(a[1]) // 2
console.log(b[1]) // 4

// Arrays -> slice, map, filter, reduce -> return new arrays
// Arrays -> splice -> mutates the original array
```

## React

- [ ] When should requests to get data from a server be done in class/functional components?

You'll probably want to resend the request in componentDidUpdate. If we're receiving parameters via props and these ever change without remounting the component, you'll see stale data if you only send the request in the did-mount lifecycle.

A single useEffect would handle the equivalent mount, update, and unmount lifecycle stages. Ignoring prop updates is as simple as excluding them from the dependency array.

- [ ] What does the children prop do in React?

- [ ] How would handle the prop drilling problem?

- [ ] An useEffect hook is causing a memory leak. What do you think are the possible causes?

Mention missing dependencies in the dep array for useEffect. Not calling a cleanup function

- [ ] When would you use a class component instead of a functional component?

- Intervals can be easier to use.
- When you need to use a very specific lifecycle method.

- [ ] How do you handle routing?

- [ ] What's the difference between state and props?

- **Props**: properties passed from parent to child components.
- **State**: actual data/properties of the current component.

- [ ] How does React handle data-binding? Can you explain it using a form?

Uni-directional data flow or data binding

- **One way databinding**: only the component can update the HTML.

  - Data flows to child components from parent components (containers).
  - React doesn't have a mechanism to allow the HTML to change the component. `render(data) -> UI`.
  - To update a value from the HTML it must have an `event handler` like `onChange` attached.
  - Changing data updates view, but changing the input in the view will not update the data, unless
    programmer does it explicitly by attaching a listener to the input.
  - _Two-way data binding_: changing data changes view and vice versa, updating input inside view
    updates data.

- [ ] When mapping through an array in React, why do items need a key?

- [ ] When would you use a ref? What's it's relationship with an useEffect hook?

- [ ] React.memo can improve the performance of your React app. Why not use it on every component?

You wouldn't want to use it for every component because you're not acknowledging that that memoization is a tradeoff between computation and memory. We could end up using extra memory for caching/memoizing components that already render plenty fast, or never re-render with the same props.

- [ ] How do you handle state managemente in React? Class vs. functional components, app state vs. server state.

- [ ] How would you share data from a server that changes frequently? What about data that rarely changes?

App data: local state -> useState, useReducer, Context, etc.
Server data: react-query, apollo-graphql, redux?

- [ ] How would you test an app with no tests? What's your approach to testing in general?
Assuming you have access to both the frontend and the backend, where do you start? What do you choose to test?

- [ ] Favorite testing tools? Jest/React Testing Library/Cypress.

## Mobile

- [ ] What navigation libraries have you worked with? What do you think about choosing one?

- [ ] What has been your experience in publishing to app stores?

- [ ] GitHub link?

- [ ] Link to an app you have published?

- [ ] Date persistance?
