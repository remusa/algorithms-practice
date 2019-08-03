# Breadth-first Search

| Operation | Worst case |
| --------- | ---------- |
| space     | ``         |
| search    | `O(n)`     |

* *Time complexity*: `O(V + E)` where `V` is the number of nodes and E the
  number of edges. You need to traverse all nodes.
* *Space complexity*: `O(V)` as well - since at worst case you need to hold all vertices in the queue.

* **Breadth-first search (BFS)**: algorithm for exploring a tree or a graph. In
  a BFS, you first explore all the nodes one step away, then all the nodes two
  steps away, etc.
* Nodes *ripple out* from the starting point, like throwing a stone in the
  center of a pond.
* *Uses a queue*, instead of a stack like *DFS*.

* Steps:
  1. Start with the root.
  2. Visit all immediate children.
  3. Move to the children of all those nodes.
  4. Repeat steps 2-3 until we reach the end.

## Comparison with Depth-first Search

* **Advantages**:
  * *BFS* will find the *shortest path* between the starting point and any other
    reachable node. *DFS* will not necessarily find the shortest path.
* **Disadvantages**:
  * *Requires more memory* than *DFS* (generally) because we need to take
    note of all the nodes on a given level while searching that level (track
    every node and its children in order).

## Steps

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

## Pseudocode

```
BFS(root)
  Pre: root is the node of the BST
  Post: the nodes in the BST have been visited in breadth first order
  q ← queue
  while root = ø
    yield root.value
    if root.left = ø
      q.enqueue(root.left)
    end if
    if root.right = ø
      q.enqueue(root.right)
    end if
    if !q.isEmpty()
      root ← q.dequeue()
    else
      root ← ø
    end if
  end while
end BFS
```

```
1  procedure BFS(G,start_v):
2      let Q be a queue
3      label start_v as discovered
4      Q.enqueue(start_v)
5      while Q is not empty
6          v = Q.dequeue()
7          if v is the goal:
8              return v
9          for all edges from v to w in G.adjacentEdges(v) do
10             if w is not labeled as discovered:
11                 label w as discovered
12                 w.parent = v
13                 Q.enqueue(w)
```

## Resources

* [Breadth-First Search (BFS) and Breadth-First Traversal | Interview Cake](https://www.interviewcake.com/concept/javascript/bfs?)
* [Breadth-first search - Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)
* [Tree Traversals (Inorder, Preorder and Postorder) - GeeksforGeeks](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
* [BFS vs DFS for Binary Tree -
  GeeksforGeeks](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)
* [algorithm - What is the time and space complexity of a breadth first and
  depth first tree traversal? - Stack
  Overflow](https://stackoverflow.com/questions/9844193/what-is-the-time-and-space-complexity-of-a-breadth-first-and-depth-first-tree-tr)
* [Breadth-First Search (BFS) | Brilliant Math & Science
  Wiki](https://brilliant.org/wiki/breadth-first-search-bfs/)
* [Algorithms: Graph Search, DFS and BFS -
  YouTube](https://www.youtube.com/watch?v=zaBhtODEL0w)
* [Breadth First Search Tutorials & Notes | Algorithms |
  HackerEarth](https://www.hackerearth.com/practice/algorithms/graphs/breadth-first-search/tutorial/)
