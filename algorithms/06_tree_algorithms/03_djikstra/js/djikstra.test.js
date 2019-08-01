import { WeightedGraph } from './djikstra'

describe('djikstra in weighted graph  tests', function() {
    it('should perform the operations on a weighted graph', () => {
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

        graph.dijkstra('A', 'E')
    })
})
