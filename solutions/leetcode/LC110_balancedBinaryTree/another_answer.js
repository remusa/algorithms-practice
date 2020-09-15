function isBalanced2(root) {
  // base case: we've hit end of a branch while still balanced
  if (root === null) {
    return true
  }

  function getTreeHeight(root, height = 0, maxHeight = 0) {
    // recursive tree measuring function
    if (height > maxHeight) {
      maxHeight = height
    }

    if (!root || (!root.left && !root.right)) {
      // check to make sure there is a root and at least one branch
      return maxHeight
    }

    const leftSubtree = getTreeHeight(root.left, height + 1, maxHeight)
    const rightSubtree = getTreeHeight(root.right, height + 1, maxHeight)

    // return the height of the longest branch, which is determined by recursively traversing the tree using getTreeHeight()
    return Math.max(leftSubtree, rightSubtree)
  }

  // make sure there's a left branch, height is zero if there isn't
  const leftHeight = root.left ? getTreeHeight(root.left) + 1 : 0
  const rightHeight = root.right ? getTreeHeight(root.right) + 1 : 0

  // check if the current root node is a balanced tree
  if (Math.abs(leftHeight - rightHeight) > 1) {
    return false
  }

  // if it is, let's repeat the process on both the left and right branches
  if (!isBalanced(root.left)) {
    return false
  }

  return isBalanced(root.right)
}
