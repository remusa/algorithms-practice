# Time Complexity

## Characteristics of good code

1. Readable
2. Scalable

## Big-O Notation

* Measures the perfomance of code as the number of inputs increases.
* Expresses the runtime in terms of *how quickly it grows relative to the input, as the input gets arbitrarily large*.
* Calculates the number of operations a computer has to perform (how many steps
  it takes to complete something).

* Note: **Beware of premature optimization**. Sometimes optimizing time or space negatively impacts readability or coding time. For a young startup it might be more important to write code that's easy to ship quickly or easy to understand later, even if this means it's less time and space efficient than it could be.

## Big-O 4 Rules

* Rule 0. Generally:
  * Same indentation (assignments, declarations, calculations) **add**.
  * Nested indentation (nested loops) **multiply**.

* Rule 1. Worst Case. Big-O only cares about the worst case.
* Rule 2. Remove Constants: `O(3 + 4N) = O(N)`. We can ignore variable
  declarations, assignments and small calculations.
* Rule 3. Different Terms for Different Inputs.
* Rule 4. Drop Non Dominants. Only keep the biggest (**dominant**) term and eliminate the rest.

```javascript
// n, m (boxes and boxes2 are different inputs)
function compressTwoBoxes(boxes, boxes2) {
    boxes.forEach(element => {  // n
        console.log(element)    // n
    })

    boxes2.forEach(element => { // m
        console.log(element)    // m
    })
}

// O(n + m)
```

```javascript
function printAllNumbersThenAllPairSums(numbers) {
    console.log('these are the numbers:')  //1
    numbers.forEach(function(number) {  //n *
        console.log(number)   //1
    })

    console.log('and these are their sums:')    //1
    numbers.forEach(function(firstNumber) { //n *
        numbers.forEach(function(secondNumber) {  //n
            console.log(firstNumber + secondNumber) //1
        })
    })
} // 1 + (n * 1) + 1 + (n * n * 1) = 2 + n + (n^2) = O(n^2)

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])
```

* Note: `N` could be the actual input, or the size of the input

```javascript
function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log('hi');
  }
}

function printAllItems(items) {
  items.forEach(item => {
    console.log(item);
  });
}
```

## Common Examples

### O(1) - Constant Time

* Time doesn't change no matter the number of operations.
* *Static* or *constant* amount of time, the same no matter how much information is there or how many users there are.
* Example:
  * Reading a book page by page.
  * Determining if a number is odd or even.
  * Print the length of a list.

```javascript
function printLength(array) {
    console.log(array.length)
}

printLength([1, 2, 3, 4])
```

### O(N) - Linear Time

* Time depends on the number of inputs.
* Example:
  * Linear search.
  * Iterating over the elements of an array.

```javascript
const fish = ['dory', 'bruce', 'marlin', 'nemo']

for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
        console.log(`FOUND NEMO!`)
    }
}
```

### O(log N) - Logarithmic Functions

* **Divide and conquer** algorithms.
* Each iteration eliminates `n` number of possibilities.
* Finding a word in the dictionary (using binary search).
* Example:
  * Sorting a deck of playing cards (using merge sort).
  * In *binary search*, each iteration eliminates *at least*
  half of the possibilities.

```javascript

```

## O(N log N) - Log Linear (or Quasilinear / Linearithmic)

* The result of performing a `O(log n)` operation `n` times.
* Touches **each and every** element.
* Example: sorting a deck of playing cards (using merge sort).

## O(N^2) - Quadratic Functions (Polynomial Time)

* Found in nested loops.
* Example: checking if you have everything on your shopping list in your cart.

```javascript
//Log all pairs of array
const boxes = ['a', 'b', 'c', 'd', 'e'] // 5 * 5 = 25

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {        // n *
        for (let j = 0; j < array.length; j++) {    // n
            console.log(array[i], array[j])         // 1
        }
    }
} // O(n * n) = O(n^2)

logAllPairsOfArray(boxes)
```

## O(2^N) - Exponential Time

## O(n!) Factorial

* Example: recursive functions that run on every input.

```javascript
void nFacRuntimeFunc(int n) {
  for(int i=0; i<n; i++) {
    nFacRuntimeFunc(n - 1);
  }
}
```

## O(infinity)

* Example: tossing a coin until it lands on heads.

# Space Complexity

## 3 Pillars of Good Programming

1. Readability
2. Speed: Time Complexity.
3. Memory: Space Complexity.

* When a program executes it has two ways to remember things.
  * *Heap*: where we store variables that we assign values.
  * *Stack*: keep track of function calls.

* **Stack overflow**: programming error when too much memory is used on the call
  stack.

* **Space Complexity**: we don't care how big the input is, only about what
  happens *inside* the function (allocations, creation of variables).
  * Variables: create a variable.
  * Data structures: create an array.
  * Function calls.
  * Allocations.


```javascript
function boooo(array) {
    for (let i = 0; i < array.length; i++) { // creating the i variable = 1
        console.log(`booooo!`)
    }
}

boooo([1, 2, 3, 4, 5])  // O(1)
```

* Note: usually when we talk about space complexity, we're talking about *additional space*, so we don't include space taken up by the inputs.

```javascript
// this function takes constant space even though the input has (n) items
function getLargestItem(items) {
  let largest = -Number.MAX_VALUE

  items.forEach(item => {
    if (item > largest) {
      largest = item
    }
  })

  return largest
}
```

## Examples

* `O(1)`: we have a fixed number of variables.

```javascript
function sayHiNTimes(n) {
  for (let i = 0; i < n; i++) {
    console.log('hi')
  }
}
```

* `O(n)`: the size of an array scales with the size of the input.

```javascript
function arrayOfHiNTimes(n) {
  const hiArray = []

  for (let i = 0; i < n; i++) {
    hiArray[i] = 'hi'
  }

  return hiArray
}
```

* `O(n)`: the size of an array scales with the size of the input.
