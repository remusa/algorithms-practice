# Breadth-first Search

## Pseudocode

```
Put the starting node on a queue and marked it as visited
While the queue is not empty:
	pop off the node at the head of the queue

	If it is the node we are searching for Then exit and return the node

	For all of the unvisited neighbors:
		mark the neighbour as visited
		put the neighbour in the queue

If we get here, the node is not reachable from the starting node, BFS failed
```
