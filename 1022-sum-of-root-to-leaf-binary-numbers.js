var sumRootToLeaf = function (root) {
  let total = [];

  function preorder(node, stack) {
    if (!node) {
      return;
    }

    stack += node.val;

    if (!node.left && !node.right) {
      total.push(stack);
    }

    preorder(node.left, stack);
    preorder(node.right, stack);
  }

  preorder(root, "");

  let result = 0;

  for (let el of total) {
    result += parseInt(el, 2);
  }

  return result;
};

// 1. stack이 function 밖에 별도로 선언되어 있는 경우 - function은 stack 참조
// 2. stack을 function에 넘겨주는 경우 - stack은 개별로 관리
