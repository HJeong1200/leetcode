var isUnivalTree = function (root) {
  let set = new Set();

  function inorder(node) {
    if (!node) {
      return;
    }

    inorder(node.left);
    set.add(node.val);
    inorder(node.right);
  }

  inorder(root);

  return set.size === 1 ? true : false;
};

var isUnivalTree = function (root) {
  let prevVal = root.val;
  let result = true;

  function inorder(node) {
    if (!node) {
      return;
    }

    inorder(node.left);
    if (prevVal !== node.val) {
      result = false;
    }
    prevVal = node.val;
    inorder(node.right);
  }

  inorder(root);

  return result;
};

var isUnivalTree = function (root) {
  if (!root) return true;

  if (root.left && root.left.val !== root.val) return false;
  if (root.right && root.right.val !== root.val) return false;

  return isUnivalTree(root.left) && isUnivalTree(root.right);
};
