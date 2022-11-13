var leafSimilar = function (root1, root2) {
  let root1Arr = [];
  let root2Arr = [];

  searchLeaf(root1, root1Arr);
  searchLeaf(root2, root2Arr);

  if (root1Arr.length !== root2Arr.length) {
    return false;
  }

  for (let i = 0; i < root1Arr.length; i++) {
    if (root1Arr[i] !== root2Arr[i]) {
      return false;
    }
  }

  return true;
};

function searchLeaf(node, leafArr) {
  if (!node) return leafArr;

  if (!node.left && !node.right) {
    leafArr.push(node.val);
  }

  searchLeaf(node.left, leafArr);
  searchLeaf(node.right, leafArr);
}
