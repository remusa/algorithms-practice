# Trees and Graphs

## Is This a Binary Search Tree?

* In a binary search tree, the right child must be greater than or equal to
  the root and the left child must be smaller than the root (for each subtree).

```
def is_bst(node, lower_lim = null, upper_lim = null):
    if lower_im != null and node.value < lower_lim:
        return false
    if upper_lim != null and node.value >= upper_lim:
        return false

    is_left_bst = true
    is_right_bst = true

    if node.left != null:
        is_left_bst = is_bst(node.left, lower_lim, node.value)

    if is_left_bst and node.right != null:
        is_left_bst = is_bst(node.right, node.value, upper_lim)

    return is_left_bst and is_right_bst
```

## Lowest Common Ancestor

* Tree is not necessarily sorted, so finding the nodes will be `O(n)`.
* Find the paths of both nodes, then compare both paths and find the common
  nodes traversed.
* Assume there're no duplicates in the tree.

```
lca(head, 8, 7) -> 1

// O(n)
// O(log n) - space if tree is balanced

def path_to_x(root, x):
    if root == null:
        return null

    if root.value == x:
        return Stack(root)

    left_path = path_to_x(root.left, x)
    if (left_path != null):
        left_path.push(root)
        return left_path

    right_path = path_to_x(root.right, x)
    if (right_path != null):
        right_path.push(root)
        return right_path

    return null

def lca(root, j, k):
    path_to_j = path_to_x(root, j)
    path_to_k = path_to_x(root, k)

    if path_to_j == null or path_to_k == null:
        return null

    lca_to_return = null

    while not path_to_j.empty() and not path_to_k.empty():
        j_pop = path_to_j.pop()
        k_pop = path_to_k.pop()

        if j_pop == k_pop:
            lca_to_return = j_pop
        else:
            break

    return lca_to_return
```

## Validate Binary Search Tree

* All elements in the right subtree should be larger.
* Start at the root node and traverse `left` and `right` subtrees.
* While traversing the `left`, set `max` value to previous value.
* While traversing the `right`, set `min` value to previous value.
* Check `current` node has value greater than `min` and less than `max`, if it doesn't, return `false`.
* Otherwise return true.

## Same Tree

* 

## Binary Tree Level Order Traversal

## Maximum Depth of Binary Tree

## Number of Islands

## Invert Binary Tree

## Lowest Common Ancestor of a Binary Search Tree
