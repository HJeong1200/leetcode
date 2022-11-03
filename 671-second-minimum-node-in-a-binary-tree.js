var findSecondMinimumValue = function (root) {
  let numArr = [];

  function treeTraverse(node) {
    if (!node) {
      return;
    }

    numArr.push(node.val);
    treeTraverse(node.left);
    treeTraverse(node.right);
  }

  treeTraverse(root);

  let min = Infinity;

  for (let el of numArr) {
    if (numArr[0] < el) {
      min = Math.min(el, min);
    }
  }

  if (min !== Infinity) {
    return min;
  } else {
    return -1;
  }
};

// Using sort

var findSecondMinimumValue = function (root) {
  let numArr = [];

  function treeTraverse(node) {
    if (!node) {
      return;
    }

    numArr.push(node.val);
    treeTraverse(node.left);
    treeTraverse(node.right);
  }

  treeTraverse(root);

  numArr.sort((a, b) => a - b);

  for (let el of numArr) {
    if (numArr[0] < el) {
      return el;
    }
  }

  return -1;
};

// 굳이 Arr 사용하여 모든 값을 저장할 필요 없음

var findSecondMinimumValue = function (root) {
  if (!root) {
    return -1;
  }

  const num = root.val;
  let answer = Infinity;

  function dfs(node) {
    if (!node) {
      return;
    }

    if (node.val > num) {
      answer = Math.min(answer, node.val);
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return answer === Infinity ? -1 : answer;
};
