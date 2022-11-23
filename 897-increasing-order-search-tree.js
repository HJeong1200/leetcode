var increasingBST = function (root) {
  let curNode = new TreeNode();
  let head = curNode;

  function inorder(node) {
    if (!node) {
      return;
    }

    inorder(node.left);
    curNode.right = new TreeNode();
    curNode.right.val = node.val;
    curNode = curNode.right;
    inorder(node.right);
  }

  inorder(root);

  return head.right;
};
