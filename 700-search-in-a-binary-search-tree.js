var searchBST = function (root, val) {
  if (!root) {
    return null;
  }

  let result;

  function search(node, val) {
    if (!node) {
      return;
    }

    if (node.val === val) {
      result = node;
    } else if (node.val > val) {
      search(node.left, val);
    } else {
      search(node.right, val);
    }
  }

  search(root, val);

  return result ? result : null;
};

// without helper fn

var searchBST = function (root, val) {
  if (!root) {
    return null;
  }

  if (root.val === val) {
    return root;
  } else if (root.val > val) {
    return searchBST(root.left, val);
  } else {
    return searchBST(root.right, val);
  }
};
