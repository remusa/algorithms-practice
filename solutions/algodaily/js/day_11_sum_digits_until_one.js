/*

*/

function stringArrayToNumber(array) {
  const arr = [...array]
  for (let i = 0; i < array.length; i++) {
    arr[i] = parseInt(array[i])
  }
  return arr
}

function sumArray(array) {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i]
  }
  return sum
}

function sumDigits(n) {
  if (!n) {
    return null
  }

  let strArr = n.toString().split('')

  if (strArr.length <= 1) {
    return n
  }

  let res = 0
  let numArr = []
  while (strArr.length > 1) {
    numArr = stringArrayToNumber(strArr)
    res = sumArray(numArr)
    strArr = res.toString().split('')
  }

  return res
}

function sumDigits2(n) {
  if (!n) {
    return null
  }

  if (n % 9 === 0) {
    return 9
  }

  return n % 9
}

module.exports = {
  sumDigits,
  sumDigits2,
}
