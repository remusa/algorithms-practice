function boooo(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`booooo!`)
  }
}

boooo([1, 2, 3, 4, 5])

// ////////////////

function arrayOfHiNTimes(n) {
  const hiArray = [] // 1

  for (let i = 0; i < n; i++) {
    // 1
    hiArray[i] = 'hi' // n (each item is an additional memory space)
  }

  return hiArray
}

arrayOfHiNTimes(6) // O(n)
