var isBalanced = function (root) {
  if (!root || (!root.left && !root.right)) {
    return true;
  }

  const findHeight = (node) => {
    if (!node) {
      return 0;
    }

    return Math.max(findHeight(node.left), findHeight(node.right)) + 1;
  };

  let left = findHeight(root.left);
  let right = findHeight(root.right);

  if (
    Math.abs(left - right) <= 1 &&
    isBalanced(root.right) &&
    isBalanced(root.left)
  ) {
    return true;
  } else {
    return false;
  }
};

/**
 * Height-balanced tree: The heights of its subtrees differ by no more than 1
 *
 * 여기서 findHeight 함수는 현재 node에 대하여 양쪽의 subtree가 balanced인지의 여부를 확인
 * => 모든 자식 노드에 대해서도 isBalanced를 실행해야 height-balanced인지를 알 수 있음
 * => 시간복잡도 O(n^2)
 */

function dfsHeight(node) {
  if (!node) return 0;

  let leftHeight = dfsHeight(node.left);
  let rightHeight = dfsHeight(node.right);

  if (leftHeight === -1) return -1;
  if (rightHeight === -1) return -1;

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
}

var isBalanced = function (root) {
  return dfsHeight(root) !== -1;
};

/**
 * DFS를 사용
 *
 * 현재 node의 height을 DFS 사용하여 계산
 * => subtree가 balanced가 아닌 경우 -1을 리턴, -1이 리턴되는 경우 결과는 false
 * => 시간복잡도 O(n)
 */
