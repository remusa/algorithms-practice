class MaxBinaryHeap {
    constructor() {
        this.data = []
    }

    insert(value) {
        this.data.push(value)
        this.bubbleUp()
    }

    bubbleUp() {
        let i = this.data.length - 1
        const element = this.data[i]

        while (i > 0) {
            const parentIndex = Math.floor((i - 1) / 2)
            const parent = this.data[parentIndex]

            if (element <= parentIndex) {
                break
            }

            this.data[parentIndex] = element
            this.data[i] = parent

            i = parentIndex
        }
    }
}

module.exports = {
    MaxBinaryHeap,
}
