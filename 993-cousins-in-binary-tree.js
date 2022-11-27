var isCousins = function (root, x, y) {
  let xResult = inorder(root, x, 0);
  let yResult = inorder(root, y, 0);

  return xResult[0] === yResult[0] && xResult[1] !== yResult[1] ? true : false;
};

function inorder(node, num, depth) {
  if (!node) return false;

  if (
    (node.left && node.left.val === num) ||
    (node.right && node.right.val === num)
  )
    return [depth + 1, node.val];

  return (
    inorder(node.left, num, depth + 1) || inorder(node.right, num, depth + 1)
  );
}
