import { Graph } from '../day_38_implement_a_graph'

describe('graph implementation tests', () => {
    it('should perform the operations on a graph', () => {
        const g = new Graph(7)
        const vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G']

        for (let i = 0; i < vertices.length; i++) {
            g.addVertex(vertices[i])
        }

        g.addEdge('A', 'G')
        g.addEdge('A', 'E')
        g.addEdge('A', 'C')
        g.addEdge('B', 'C')
        g.addEdge('C', 'D')
        g.addEdge('D', 'E')
        g.addEdge('E', 'F')
        g.addEdge('E', 'C')
        g.addEdge('G', 'D')

        expect(g.printNeighbors()).toEqual([ 'A: G E C', 'B: C', 'C: A B D E', 'D: C E G', 'E: A D F C', 'F: E', 'G: A D' ]);
    });
});
