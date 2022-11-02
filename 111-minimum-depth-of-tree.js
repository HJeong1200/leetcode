var minDepth = function (root) {
  if (!root) {
    return 0;
  }

  return depthFinder(root);
};

function depthFinder(node) {
  if (!node) {
    return Infinity;
  }

  if (!node.left && !node.right) {
    return 1;
  }

  return Math.min(depthFinder(node.left), depthFinder(node.right)) + 1;
}
