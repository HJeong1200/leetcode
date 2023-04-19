var longestZigZag = function (root) {
  if (!root) return 0;
  return Math.max(zigZag(root, 0, "left"), zigZag(root, 0, "right"));
};

const zigZag = (node, number, move) => {
  if (!node) return number - 1;

  if (move === "left") {
    const next = "right";
    return Math.max(
      zigZag(node.left, 0, next),
      zigZag(node.right, number + 1, next)
    );
  } else {
    const next = "left";
    return Math.max(
      zigZag(node.left, number + 1, next),
      zigZag(node.right, 0, next)
    );
  }
};
