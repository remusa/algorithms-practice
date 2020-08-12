const { performance } = require('perf_hooks')

const fish = ['dory', 'bruce', 'marlin', 'nemo']
const nemo = ['nemo']
const everyone = [
  'dory',
  'bruce',
  'marlin',
  'nemo',
  'gill',
  'bloat',
  'nigel',
  'squirt',
  'darla',
  'hank',
]
const large = new Array(1000).fill('nemo')

function findNemo(array) {
  const t0 = performance.now()
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log(`FOUND NEMO!`)
    }
  }
  const t1 = performance.now()
  console.log(`Function call took: ${t1 - t0} ms`)
}

findNemo(fish)
findNemo(nemo)
findNemo(everyone)
findNemo(large)

// //////////////////////////////////////

// What is the Big O of the below function? (Hint, you may want to go line by line)
function funChallenge(input) {
  // Big O is O(N)
  let a = 10 // 1
  a = 50 + 3 // 1

  for (let i = 0; i < input.length; i++) {
    // N
    anotherFunction() // N
    const stranger = true // N
    a++ // N
  }

  return a // 1
}

funChallenge()

/*
    1 + 1 + N + N + N + N + 1 = O(3 + 4N) = 4N = N
*/

// What is the Big O of the below function? (Hint, you may want to go line by line)
function anotherFunChallenge(input) {
  // 8(3 + 7N) = O(N)
  const a = 5 // 1
  const b = 10 // 1
  const c = 50 // 1

  for (let i = 0; i < input; i++) {
    // N
    const x = i + 1 // N
    const y = i + 2 // N
    const z = i + 3 // N
  }

  for (let j = 0; j < input; j++) {
    // N
    const p = j * 2 // N
    const q = j * 2 // N
  }

  const whoAmI = "I don't know" // 1
}

// printAllNumbersThenAllPairSums

function printAllNumbersThenAllPairSums(numbers) {
  console.log('these are the numbers:') // 1
  numbers.forEach(function (number) {
    // n *
    console.log(number) // 1
  })

  console.log('and these are their sums:') // 1
  numbers.forEach(function (firstNumber) {
    // n *
    numbers.forEach(function (secondNumber) {
      // n
      console.log(firstNumber + secondNumber) // 1
    })
  })
} // 1 + (n * 1) + 1 + (n * n * 1) = 2 + n + (n^2)

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5])
