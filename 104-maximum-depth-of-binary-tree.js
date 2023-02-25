var maxDepth = function (root) {
  let maxDep = 0;

  const search = (node, curDep) => {
    if (node) {
      curDep++;
      search(node.left, curDep);
      search(node.right, curDep);
    } else {
      maxDep = Math.max(maxDep, curDep);
      return;
    }
  };

  search(root, 0);

  return maxDep;
};

/**
 * Using recursion
 *
 *  Recursion case:
 *  1) assume that the maximum depth of root's left and right is given.
 *  2) return Math.max(max depth of left, max depth of right) + 1
 *
 *  Base case:
 *  1) if current node === null, it's base case and return 0
 */

var maxDepth = function (root) {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 2023 ver

var maxDepth = function (root) {
  let depth = 0;

  const dfs = (node, curDepth) => {
    if (!node) {
      depth = Math.max(depth, curDepth);
      return;
    }

    dfs(node.right, curDepth + 1);
    dfs(node.left, curDepth + 1);
  };

  dfs(root, 0);

  return depth;
};
