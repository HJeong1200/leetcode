var rangeSumBST = function (root, low, high) {
  let arr = [];

  function search(node, low, high) {
    if (!node) {
      return;
    }

    search(node.left, low, high);
    if (node.val >= low && node.val <= high) {
      arr.push(node.val);
    }
    search(node.right, low, high);
  }

  search(root, low, high);

  return arr.reduce((acc, cur) => acc + cur, 0);
};

// 전체 찾을 필요 없이, node.val > low 이면 left를 찾고, node.val < right 이면 right을 찾으면 됨

var rangeSumBST = function (root, low, high) {
  let arr = [];

  search(root, low, high, arr);

  return arr.reduce((acc, cur) => acc + cur, 0);
};

function search(node, low, high, arr) {
  if (!node) {
    return;
  }

  if (node.val >= low && node.val <= high) {
    arr.push(node.val);
  }

  if (node.val > low) {
    search(node.left, low, high, arr);
  }
  if (node.val < high) {
    search(node.right, low, high, arr);
  }
}
