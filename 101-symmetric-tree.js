var isSymmetric = function (root) {
  return checkSymmetry(root.left, root.right);
};

function checkSymmetry(x, y) {
  if (!x && !y) {
    return true;
  } else if (!x || !y) {
    return false;
  }

  if (x.val !== y.val) {
    return false;
  }

  return checkSymmetry(x.left, y.right) && checkSymmetry(x.right, y.left);
}
