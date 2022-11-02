var postorderTraversal = function (root) {
  let result = [];

  const postorder = (node) => {
    if (!node) {
      return;
    }

    postorder(node.left);
    postorder(node.right);
    result.push(node.val);
  };

  postorder(root);

  return result;
};
