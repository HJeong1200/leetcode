var minDiffInBST = function (root) {
  if (!root) {
    return Infinity;
  }
  return Math.min(
    findMin(root),
    minDiffInBST(root.left),
    minDiffInBST(root.right)
  );
};

function findMin(root) {
  let [leftNum, rightNum] = [Infinity, Infinity];

  if (root.left) {
    leftNum = root.val - root.left.val;
  }
  if (root.right) {
    rightNum = root.right.val - root.val;
  }

  let result = Math.min(leftNum, rightNum);

  return result;
}

// node별로만 비교하면 안되고 전체 tree에 대해서 비교해야 함
// tree 순회하면서 value를 저장하고, 저장한 값들을 비교하며 min 찾아서 리턴

var minDiffInBST = function (root) {
  let allValues = [];

  const search = (node) => {
    if (!node) {
      return;
    }

    allValues.push(node.val);
    search(node.left);
    search(node.right);
  };

  search(root);

  allValues = allValues.sort((a, b) => a - b);
  let min = Infinity;

  for (let i = 1; i < allValues.length; i++) {
    min = Math.min(min, allValues[i] - allValues[i - 1]);
  }

  return min;
};
