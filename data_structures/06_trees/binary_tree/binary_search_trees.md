# Binary Trees

| Operation | Average case | Worst case |
| --------- | ------------ | ---------- |
| space     | `O(n)`       | `O(n)`     |
| access    | `O(log(n))`  | `O(n)`     |
| search    | `O(log(n))`  | `O(n)`     |
| insert    | `O(log(n))`  | `O(n)`     |
| delete    | `O(log(n))`  | `O(n)`     |

* **Binary trees**: tree where every node has two or fewer children (`n < 2`. Children
  are called `left` and `right`.
* *Binary trees are very efficient*: by choosing one path we completely
  eliminate the other one (only 1 possibility needs to be chosen).

## Perfect Trees

* *Perfect*: a tree is perfect when there are no *gaps* (every level is full).

## Properties of Perfect Trees

1. **The number of total nodes on each level doubles as we move down the tree**.
2. **The number of nodes on the last level is equal to the sum of the number of
   nodes on all other levels (plus 1)**: about *half* of the nodes are on the
   last level.

### Height of a Tree

* **Height**: number of levels of the tree. If levels are `zero-indexed`, the
  number of nodes on the `xth` level is `2^x`.
  * `n`: number of nodes.
  * `h`: height of the trees.

```
1. Level 0: 2^0 nodes = 1,
2. Level 1: 2^1 nodes = 2,
3. Level 2: 2^2 nodes = 4,
4. Level 3: 2^3 nodes = 8,
etc.

# of nodes = 2^h -1
log nodes = height

log 100 = 2
10^2 = 100
```

* So the total number of nodes is: `n = 2^0 + 2^1 + 2^2 + 2^3 + ... + 2^(h - 1)`.
* *Logs* can be used to calculate the height of a tree.
  * `log10(100)` means *what power must you raise 10 to in order to get 100?*.
    The answer is `2`, because `10^2 = 100`.

## Binary Search Trees

* **Rules**:
  1. *Right child nodes* must be greater than the parent.
  2. *Left child nodes* must be smaller than or equal to the parent.
  3. Parent nodes can only have a *maximum of 2 children*.

* **Strengths**:
  * *Very efficient*: all operations are `O(log(n))` in average.
* **Weaknesses**:
  * *Unbalanced are slower*: if every parent has only one child, it can turn out into a
    *linked list*, then we have to traverse the entire tree for every operation `O(n)`.

## Binary Tree Implementation

* Binary Tree Node:

```javascript
class BinaryTreeNode {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
```

### Pseudocode for Basic Operations

* Insertion:

```
insert(value)
  Pre: value has passed custom type checks for type T
  Post: value has been placed in the correct location in the tree
  if root = ø
    root ← node(value)
  else
    insertNode(root, value)
  end if
end insert
```

```
insertNode(current, value)
  Pre: current is the node to start from
  Post: value has been placed in the correct location in the tree
  if value < current.value
    if current.left = ø
      current.left ← node(value)
    else
      InsertNode(current.left, value)
    end if
  else
    if current.right = ø
      current.right ← node(value)
    else
      InsertNode(current.right, value)
    end if
  end if
end insertNode
```

* Search:

```
contains(root, value)
  Pre: root is the root node of the tree, value is what we would like to locate
  Post: value is either located or not
  if root = ø
    return false
  end if
  if root.value = value
    return true
  else if value < root.value
    return contains(root.left, value)
  else
    return contains(root.right, value)
  end if
end contains
```

* Deletion:

```
remove(value)
  Pre: value is the value of the node to remove, root is the node of the BST
      count is the number of items in the BST
  Post: node with value is removed if found in which case yields true, otherwise false
  nodeToRemove ← findNode(value)
  if nodeToRemove = ø
    return false
  end if
  parent ← findParent(value)
  if count = 1
    root ← ø
  else if nodeToRemove.left = ø and nodeToRemove.right = ø
    if nodeToRemove.value < parent.value
      parent.left ←  nodeToRemove.right
    else
      parent.right ← nodeToRemove.right
    end if
  else if nodeToRemove.left != ø and nodeToRemove.right != ø
    next ← nodeToRemove.right
    while next.left != ø
      next ← next.left
    end while
    if next != nodeToRemove.right
      remove(next.value)
      nodeToRemove.value ← next.value
    else
      nodeToRemove.value ← next.value
      nodeToRemove.right ← nodeToRemove.right.right
    end if
  else
    if nodeToRemove.left = ø
      next ← nodeToRemove.right
    else
      next ← nodeToRemove.left
    end if
    if root = nodeToRemove
      root = next
    else if parent.left = nodeToRemove
      parent.left = next
    else if parent.right = nodeToRemove
      parent.right = next
    end if
  end if
  count ← count - 1
  return true
end remove
```

* Find parent of node:

```
findParent(value, root)
  Pre: value is the value of the node we want to find the parent of
       root is the root node of the BST and is != ø
  Post: a reference to the prent node of value if found; otherwise ø
  if value = root.value
    return ø
  end if
  if value < root.value
    if root.left = ø
      return ø
    else if root.left.value = value
      return root
    else
      return findParent(value, root.left)
    end if
  else
    if root.right = ø
      return ø
    else if root.right.value = value
      return root
    else
      return findParent(value, root.right)
    end if
  end if
end findParent
```

* Find node:

```
findNode(root, value)
  Pre: value is the value of the node we want to find the parent of
       root is the root node of the BST
  Post: a reference to the node of value if found; otherwise ø
  if root = ø
    return ø
  end if
  if root.value = value
    return root
  else if value < root.value
    return findNode(root.left, value)
  else
    return findNode(root.right, value)
  end if
end findNode
```

* Find minimum:

```
findMin(root)
  Pre: root is the root node of the BST
    root = ø
  Post: the smallest value in the BST is located
  if root.left = ø
    return root.value
  end if
  findMin(root.left)
end findMin
```

* Find maximum:

```
findMax(root)
  Pre: root is the root node of the BST
    root = ø
  Post: the largest value in the BST is located
  if root.right = ø
    return root.value
  end if
  findMax(root.right)
end findMax
```

## Tree Traversals

### InOrder Traversal

```
inorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in inorder
  if root = ø
    inorder(root.left)
    yield root.value
    inorder(root.right)
  end if
end inorder
```

### PreOrder Traversal

```
preorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in preorder
  if root = ø
    yield root.value
    preorder(root.left)
    preorder(root.right)
  end if
end preorder
```

### PostOrder Traversal

```
postorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in postorder
  if root = ø
    postorder(root.left)
    postorder(root.right)
    yield root.value
  end if
end postorder
```

## Resources

* [Binary Tree Data Structure | Interview Cake](https://www.interviewcake.com/concept/javascript/binary-tree?)
* [javascript-algorithms/src/data-structures/tree/binary-search-tree at master ·
  trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/tree/binary-search-tree)
