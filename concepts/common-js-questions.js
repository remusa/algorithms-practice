// STRINGS
// Performance: transform string into array -> manipulate it -> convert array to string

// Create a function to reverse a string
function reverse(str) {
  if (!str) return

  // Method 1: using built-in JS functions
  // return str.split('').reverse().join('')

  // Method 2: loop from the end of the array
  const arr = []
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i]
    arr.push(char)
  }
  return arr.join('')
}

// console.log(reverse('Hello, world!'))

// ARRAYS
/*
    Object.entries()
    Array.from()
    [...item]

    .isArray()

    returns a new DS:
    .reduce()   ->  returns anything
    .filter()   ->  returns a new array
    .concat()   ->  returns a new array
    .map()      ->  returns a new array
    .join()     ->  return a string

    mutates original array:
    .push()     ->  doesn't return anything
    .pop()      ->  returns a value
*/

// Create a function that takes a string and returns a new string with duplicates removed
function removeDuplicates(str) {
  const arr = str.split(' ')
  const set = new Set(arr)
  const unique = [...set].join(' ')
  return unique
}

// console.log(removeDuplicates('This is is a test test string')) // 'This is a test string'

// Without using .flat(), create a function to flatten an array
function flatten(arr) {
  // Use recursion
  // while arr.length > 1, there are more elements in the array

  const flattened = arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      const subarray = flatten(curr)
      acc = acc.concat(subarray)
    } else {
      acc.push(curr)
    }
    return acc
  }, [])

  return flattened
}

console.log(flatten([1, 2, [3, 4, [5, 6, 7], 8], 9, 10])) // [1,2,3,4,5,6,7,8,9,10]

// Implement Function.prototype.bind()
Function.prototype.bind = function(context) {
  const fn = this
  return function() {
    fn.apply(context) // or call
  }
}

// Another way
function bind(fn, context) {
  return function() {
    // fn.call(context)
    fn.apply(context, [...arguments]) // handles arguments by spreading them
  }
}

// const foo = function() {
//     console.log(this.bar)
// }
// const baz = foo.bind({ bar: 'hello' })
// baz() // Hello

/*
Timing:
    setInterval()
    setTimetout()
*/

// Debounce: a way of preventing time-consuming tasks from firing often (autocomplete only searching after 500ms)
// It limits the rate at which a function gets invoked.
function debounce(fn, time) {
  let timeoutId

  return function() {
    if (timeoutId) {
      clearTimeout(timeoutId)
      // throttle -> just return
    }

    timeoutId = setTimeout(() => {
      // Invoke fn
      fn.apply(this, arguments)
      // Clear timeout
      timeoutId = null
    }, time)
  }
}

fn1 = debounce(() => console.log('debounce'), 500)
fn1() // Fired
fn1() // Ignored
fn1() // Ignored
fn1() // Ignored
// 500 ms later
fn1() // Fired
fn1() // Ignored

function throttle(fn, time) {
  let shouldWait = false

  return function(...args) {
    if (!shouldWait) {
      fn.apply(this, args)
      shouldWait = true

      setTimeout(function() {
        shouldWait = false
      }, time)
    }
  }
}

fn2 = throttle(() => console.log('throttle'), 500)
fn2() // Fired
fn2() // Ignored
fn2() // Ignored
fn2() // Ignored
// 500 ms later
fn2() // Fired
fn2() // Ignored

// Trees
// We have two identical DOM trees, A and B. For DOM tree A, we have the location of an element. Create a function to find that same element in tree B.
function backwardsPath(element, root) {
  const path = []
  let current = element

  while (current.parentNode) {
    const index = [...current.parentNode.children].indexOf(current)
    path.push(index)
    current = parentNode
  }

  current = root
  while (path.length) {
    current = current.children[path.pop()]
  }

  return current
}

/*
Rendering:
requestAnimationFrame():
    * For smooth transitions.
    * Globally available function on the window object.
    * Every time there's a render, it makes a call to requestAnimationFrame(), so it only updates when the render happens (all browsers render at 60fps, around every 16 ms.) so the UI isn't blocked.
*/

// Create a function to move an element. The function arguments are distance, duration, and the element to move.
function moveElement(duration, distance, element) {
  const start = performance.now()

  function move(currentTime) {
    const elapsed = currentTime - start
    const progress = elapsed / duration
    const amountToMove = progress * distance

    element.style.transform = `translateX(${amountToMove} px)`

    if (amountToMove < distance) {
      requestAnimationFrame(move)
    }
  }

  move(performance.now())
}

/*
Promises:
    * A promise to return something eventually.
*/

// Since JavaScript is single-threaded, it can't use .sleep()
// Create a sleep function that takes one parameter (time) and
// will wait "time" ms
function sleep(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

// async function run() {
//     await sleep(500)
//     console.log('hello')
//     await sleep(500)
//     console.log('world')
// }

// ADVANCED
// Write a function that returns the value at a give path
/*
let testObj = {
    foo: 2,
    bar: 'car',
    baz: {x: 'xx', y: 'yy', biz: {a: 56}}
};
getByPath(['baz', 'biz', 'a'], testObj); //56
*/
function getByPath([first, ...rest], obj) {
  if (!first || !obj[first]) {
    // Either no path was supplied or the top-level property doesnt' exist in obj
    return undefined
  }

  if (rest.length < 1) {
    return obj[first]
  }
  return getByPath(rest, obj[first])
}

// Create a function to turn any function into a "promisfied" function.
// Any function to be promisified will always have a callback as the last argument.
// The callback will always have this signature:
//   function(result){}

/*
    const exampleFn = function (x, y, callback) {};
    const promisedFn = promisify(exampleFn);
    promisedFn().then(...).then(...)
*/

function promisify(fn) {
  return function(...args) {
    return new Promise(function(resolve, reject) {
      function cb(result) {
        resolve(result)
      }

      fn.apply(this, args.concat(cb))
    })
  }
}

// Create a "shared" function that takes two array iterators
// and returns the numbers common in both arrays.

/*
    const i1 = function* () {
        yield* [0, 2, 3, 4, 9, 10];
    };
    const i2 = function* () {
        yield* [1, 2, 9, 10, 14];
    };
     // @param {Iterator} iter1
     // @param {Iterator} iter2
     //
     // @returns {Array} An array of number shared by both arrays
    function shared(iter1, iter2) {}
    shared(i1, i2); // [2, 9, 10]
*/
function shared(x, y) {
  const commonNumbers = []
  let curr1 = x.next()
  let curr2 = y.next()

  while (curr1.done !== true && curr2.done !== true) {
    if (curr1.value === curr2.value) {
      commonNumbers.push(curr1.value)
      curr1 = x.next()
      continue
    }

    if (curr1.value > curr2.value) {
      curr2 = y.next()
      continue
    }

    if (curr1.value < curr2.value) {
      curr1 = x.next()
      continue
    }
  }

  return commonNumbers
}
