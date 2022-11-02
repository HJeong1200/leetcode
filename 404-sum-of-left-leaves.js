var sumOfLeftLeaves = function (root) {
  let sum = 0;

  const sumLeft = (node) => {
    if (!node) {
      return;
    }

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }

    sumLeft(node.left);
    sumLeft(node.right);
  };

  sumLeft(root);

  return sum;
};
