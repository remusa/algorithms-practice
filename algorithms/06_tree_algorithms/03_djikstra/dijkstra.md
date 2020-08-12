# Dijkstra's Algorithm

| Operation | Worst case  |
| --------- | ----------- |
| space     | `O(n)`      |
| access    | `O(log(n))` |
| search    | `O(log(n))` |
| insert    | `O(log(n))` |
| delete    | `O(log(n))` |

- Useful when finding shortest path, but unlike _BFS_, it takes into account _weights_.

- **Dijkstra**: determines the shortest path (if reachable) from one node in a graph to _every other
  node_ within the same graph.

  - _Faster than Bellman-Ford_: on average.

- Examples:
  - GPS - finding fastest route.
  - Network Routing - finds open shortest path for data.
  - Biology - used to model the spread of viruses among humans.
  - Airline tickets - finding cheapest route to your destination.

1. Every time we look to visit a new node, we pick the node with the smallest known distance to
   visit first.
2. Once we’ve moved to the node we’re going to visit, we look at each of its neighbors
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the
   node we’re checking from the starting node.
4. If the new total distance to a node is less than the previous total, we store the new shorter
   distance for that node.

## Pseudocode

```
This function should accept a starting and ending vertex
Create an object (we'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
After setting a value in the distances object, add each vertex with a priority of Infinity to the priority queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
Create another object called previous and set each key to be every vertex in the adjacency list with a value of null
Start looping as long as there is anything in the priority queue
  dequeue a vertex from the priority queue
  If that vertex is the same as the ending vertex - we are done!
  Otherwise loop through each value in the adjacency list at that vertex
    Calculate the distance to that vertex from the starting vertex
    if the distance is less than what is currently stored in our distances object
      update the distances object with new lower distance
      update the previous object to contain that vertex
      enqueue the vertex with the total distance from the start node
```

## Improving Dijkstra's Algorithm

- Dijkstra's algorithm is greedy. That can cause problems.
- We can improve this algorithm by adding a _heuristics_ (a best guess).

## Resources

- [Dijkstra's Algorithm Pseudocode](https://cs.slides.com/colt_steele/graphs#/120/0/0)
