/*
    Can you implement the JS Map class from scratch? Only two methods are necessary-- get and set. Do not use JS Objects ({} notation) for this exercise.

    Note: Regular Javascript objects and the Map class are both simple key-value hash tables/associative arrays, with a few key differences:

    A Map object can iterate through its elements in insertion order, whereas JavaScript's Objects don't guarantee order. In addition, Objects have default keys due to their prototype, and Maps don't come with default keys. Here's a good breakdown of the two. For the purpose of this exercise, let's assume the same functionality for both.

    For the two methods you'll define:

    get(key: string) should be given a key, and return the value for that key.
    set(key: string, val: string) should take a key and a value as parameters, and store the pair.
*/

class Hashmap {
    constructor() {
        this.data = []
    }

    set(key, value) {
        const address = this.hashStr(key)

        if (!this.data[address]) {
            this.data[address] = []
        }

        const bucket = [address, value]
        this.data[address].push(bucket)

        return this.data
    }

    get(key) {
        const address = this.hashStr(key)
        const currentBucket = this.data[address]

        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                console.log(currentBucket[i][0])
                if (currentBucket[i][0] === address) {
                    return currentBucket[i][1]
                }
            }
        }
    }

    hashStr(str) {
        let finalHash = 0
        for (let i = 0; i < str.length; i++) {
            const charCode = str.charCodeAt(i)
            finalHash += charCode
        }
        return finalHash
    }
}

module.exports = {
    Hashmap,
}
