var inorderTraversal = function (root) {
  let output = [];

  const inOrder = function (node) {
    if (!node) {
      return;
    }

    inOrder(node.left);
    output.push(node.val);
    inOrder(node.right);
  };

  inOrder(root);

  return output;
};

/**
 * Inorder traversal (중위 순회)
 *
 * Left -> Root -> Right 순서로 트리 탐색
 *
 */

var inorderTraversal = function (root) {
  let result = [];
  let stack = [];
  let current = root;

  while (current !== null || stack.length) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }

    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }

  return result;
};
