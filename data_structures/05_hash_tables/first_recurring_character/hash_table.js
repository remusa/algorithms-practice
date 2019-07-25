class HashTable {
    constructor(size) {
        // this.data = []
        this.data = new Array(size)
    }

    _hash(key) {
        let address = 0
        for (let i = 0; i < key.length; i++) {
            address = (address + key.charCodeAt(i) * i) % this.data.length // address function
        }
        return address
    }

    set(key, value) {
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
        const keysArray = []
        console.log(this.data.length)
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]) // second 0 is the key
            }
        }
        return keysArray
    }
}

module.exports = { HashTable }
