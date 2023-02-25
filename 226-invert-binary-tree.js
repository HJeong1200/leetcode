var invertTree = function (root) {
  if (!root) {
    return root;
  }

  invert(root);

  return root;
};

function invert(node) {
  if (!node) {
    return;
  }

  invert(node.left);
  invert(node.right);

  [node.left, node.right] = [node.right, node.left];
}

// Refactoring

var invertTree = function (root) {
  if (!root) {
    return root;
  }

  invertTree(root.left);
  invertTree(root.right);

  [root.left, root.right] = [root.right, root.left];

  return root;
};

// 2023 ver

var invertTree = function (root) {
  if (!root) return root;

  const newTree = new TreeNode();
  newTree.val = root.val;

  const dfs = (node, newNode) => {
    if (!node) return;

    if (node.left) {
      newNode.right = new TreeNode();
      newNode.right.val = node.left.val;
      dfs(node.left, newNode.right);
    }

    if (node.right) {
      newNode.left = new TreeNode();
      newNode.left.val = node.right.val;
      dfs(node.right, newNode.left);
    }
  };

  dfs(root, newTree);

  return newTree;
};
