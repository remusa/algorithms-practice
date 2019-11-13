/*
    Since a graph is one of the more difficult data structures to conceptualize in a programmatic 2D manner, let's go ahead and implement it! We'll go with an adjacency list version. Note that there's also the adjacency matrix method which we will cover later.

    Recall that an adjacency list is a concept in graph theory, used to describe a representation of a graph via its nodes' adjacent (neighboring) nodes. You can think of it as each vertex maintaining a list of other vertices it's connected to. Using an unordered list data structure, each list is comprised of the node's neighbors.
*/

class Graph {
    constructor() {
        this.adjacencyList = new Map()
    }

    addVertex(nodeVal) {
        this.adjacencyList.set(nodeVal, [])
    }

    addEdge(src, dest) {
        this.adjacencyList.get(src).push(dest)
        this.adjacencyList.get(dest).push(src)
    }

    removeVertex(val) {
        if (this.adjacencyList.get(val)) {
            this.adjacencyList.delete(val)
        }

        this.adjacencyList.forEach(vertex => {
            const neighborIdx = vertex.indexOf(val)
            if (neighborIdx >= 0) {
                vertex.splice(neighborIdx, 1)
            }
        })
    }

    removeEdge(src, dest) {
        const srcDestIdx = this.adjacencyList.get(src).indexOf(dest)
        this.adjacencyList.get(src).splice(srcDestIdx, 1)

        const destSrcIdx = this.adjacencyList.get(dest).indexOf(src)
        this.adjacencyList.get(dest).splice(destSrcIdx, 1)
    }

    printNeighbors() {
        const result = []

        for (const vertex of this.adjacencyList.keys()) {
            const neighbors = []

            neighbors.push(`${vertex}:`)

            this.adjacencyList.get(vertex).forEach(neighbor => {
                neighbors.push(neighbor)
            })

            result.push(neighbors.join(' '))
        }

        return result
    }
}

module.exports = {
    Graph,
}
