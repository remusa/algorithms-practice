/*
    Let's build a very basic calculator by programming it. Can you write a function that will evaluate a simple expression string without using your language's eval method?

    It should also be able to handle positive and negative symbols +,-, parentheses (), and spaces.
    ​
    Assume for now that you don't need to handle multiplication or division cases.
*/

// O(n)
function calculator(str) {
    const stack = []
    const arr = [...str]
    let res = 0

    for (let i = 0; i < arr.length - 1; i++) {
        if (condition) {
          
        }
    }

    console.log(`stack: ${stack}`)
}

let expr = '3 - 1 + 2'
calculator(expr)
// 4

expr = '(2+(4+2)-1)-(5+8)'
calculator(expr)
// -6

module.exports = {
    calculator,
}
