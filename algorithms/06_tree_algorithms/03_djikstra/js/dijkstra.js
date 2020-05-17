class PriorityQueue {
  constructor() {
    this.values = []
  }

  enqueue(value, priority) {
    this.values.push({ value, priority })
    this.sort()
  }

  dequeue() {
    return this.values.shift()
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority)
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight })
    this.adjacencyList[vertex2].push({ node: vertex1, weight })
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue()

    const distances = {}
    const previous = {}
    const path = [] // Path to return
    let smallest

    // Build up initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0
        nodes.enqueue(vertex, 0)
      } else {
        distances[vertex] = Infinity
        nodes.enqueue(vertex, Infinity)
      }

      previous[vertex] = null
    }

    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value

      if (smallest === finish) {
        // We are done, build up path to return at end
        while (previous[smallest]) {
          path.push(smallest)
          smallest = previous[smallest]
        }
        break
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          // Find neighboring node
          const nextNode = this.adjacencyList[smallest][neighbor]

          // Calculate new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight
          const nextNeighbor = nextNode.node

          if (candidate < distances[nextNeighbor]) {
            // Updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate

            // Updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest

            // Enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate)
          }
        }
      }
    }

    return [...path, smallest].reverse()
  }
}

function example1() {
  const graph = new WeightedGraph()

  graph.addVertex('A')
  graph.addVertex('B')
  graph.addVertex('C')
  graph.addVertex('D')
  graph.addVertex('E')
  graph.addVertex('F')

  graph.addEdge('A', 'B', 4)
  graph.addEdge('A', 'C', 2)
  graph.addEdge('B', 'E', 3)
  graph.addEdge('C', 'D', 2)
  graph.addEdge('C', 'F', 4)
  graph.addEdge('D', 'E', 3)
  graph.addEdge('D', 'F', 1)
  graph.addEdge('E', 'F', 1)

  const dijkstra = graph.dijkstra('A', 'E') // ["A", "C", "D", "F", "E"]
  console.log('dijkstra', dijkstra)
}

// example1()

module.exports = {
  WeightedGraph,
}
