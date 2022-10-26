var hasPathSum = function (root, targetSum) {
  if (!root) {
    return false;
  }

  targetSum = targetSum - root.val;

  if (targetSum === 0 && !root.left && !root.right) {
    return true;
  } else {
    return (
      hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
    );
  }
};
