// Write two functions that find the factorial of any number, one iterative and
// one recursive.

// O(n)
function factorialIterative(number) {
    let answer = 1

    if (number === 2) {
        answer = 2
    }

    for (let i = 2; i <= number; i++) {
        answer = answer * i
    }

    return answer
}

console.log('factorialIterative(5) = ', factorialIterative(5))

// O(n)
function factorialRecursive(number) {
    if (number <= 1) {
        return 1
    } else if (number === 2) {
        return 2
    }

    return number * factorialRecursive(number - 1)
}

console.log('factorialRecursive(5) = ', factorialRecursive(5))

module.exports = {
    factorialIterative,
    factorialRecursive,
}
