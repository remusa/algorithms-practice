function isEven(n) {
  return n % 2 === 0
}

function isOdd(n) {
  return !isEven(n)
}

function power(x, n) {
  console.log(`Computing ${x} raised to power ${n}.`)

  // base case
  if (n === 0) {
    return 1
  }

  // recursive case: n is negative
  if (n < 0) {
    return 1 / power(x, -n)
  }

  // recursive case: n is odd
  if (isOdd(n)) {
    return power(x, n - 1) * x
  }

  // recursive case: n is even
  if (isEven(n)) {
    const y = power(x, n / 2)
    return y * y
  }
}

const displayPower = function (x, n) {
  console.log(`${x} to the ${n} is ${power(x, n)}`)
}

module.export = {
  power,
}
