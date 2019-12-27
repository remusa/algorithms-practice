class HashTable {
  constructor(size) {
    // this.data = []
    this.data = new Array(size)
    this.numItems = size
  }

  _hash(key) {
    // Address => index where it's stored
    let address = 0

    for (let i = 0; i < key.length; i++) {
      address = (address + key.charCodeAt(i) * i) % this.data.length // address function
    }

    return address
  }

  set(key, value) {
    this.numItems++
    const address = this._hash(key)

    // if address bucket doesn't exist create it
    if (!this.data[address]) {
      this.data[address] = []
    }

    // add key-value pair to the address bucket
    this.data[address].push([key, value])

    return this.data
  }

  get(key) {
    const address = this._hash(key)
    const currentBucket = this.data[address]

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }

    return undefined
  }

  keys() {
    const keysArr = []

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArr.push(this.data[i][0][0]) // second 0 is the key
      }
    }

    return keysArr
  }

  values() {
    const valuesArr = []

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        for (let j = 0; j < this.data[i].length; j++) {
          if (!valuesArr.includes(this.data[i][j][1])) {
            valuesArr.push(this.data[i][j][1])
          }
        }
      }
    }

    return valuesArr
  }
}

const myHashTable = new HashTable(50)

myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.keys()

console.log(myHashTable)
console.log(myHashTable.keys())
