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
