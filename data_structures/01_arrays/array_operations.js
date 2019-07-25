const strings = ['a', 'b', 'c', 'd']

// lookup O(1)
strings[2]

// push O(1)
strings.push('e')

// pop O(1)
strings.pop() // returns 'e' and deletes it from the array

// unshift O(n)
strings.unshift('x') // ['x', 'a', 'b', 'c', 'd']

// splice O(n)
strings.splice(2, 0, 'alien') // ['x', 'a', 'alien', 'b', 'c', 'd']

console.log(strings) // ['x', 'a', 'alien', 'b', 'c', 'd']
