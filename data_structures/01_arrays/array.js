class Array {
  constructor() {
    this.length = 0
    this.data = {}
  }

  // lookup -> O(1)
  get(index) {
    return this.data[index]
  }

  // push -> O(1)
  push(item) {
    this.data[this.length] = item
    this.length++
  }

  // pop -> O(1)
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  // delete -> O(n)
  delete(index) {
    const item = this.data[index]
    this.shiftItems(index)
  }

  // shift -> O(n)
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
  }
}

const myArray = new Array()
myArray.push('hi')
myArray.push('you')
myArray.push('!')

// console.log(`${myArray.pop()}`) // !
// console.log(`${myArray.pop()}`) // you

myArray.delete(0)

myArray.push('are')
myArray.push('awesome')

myArray.delete(1)

console.log(`${JSON.stringify(myArray)}`)
