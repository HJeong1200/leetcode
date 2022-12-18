var searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;

  while (left <= right) {
    const mid = parseInt((left + right) / 2);

    if (matrix[mid].indexOf(target) !== -1) return true;

    /* Set으로도 가능
    const set = new Set(matrix[mid]);
    if (set.has(target)) return true;
    */

    if (matrix[mid][0] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};

// Binary Search Tree와 모양이 같음

var searchMatrix = function (matrix, target) {
  let m = 0;
  let n = matrix[0].length - 1;

  while (m <= matrix.length - 1 && n >= 0) {
    const curNode = matrix[m][n];

    if (curNode === target) return true;

    if (curNode > target) {
      n--;
    } else {
      m++;
    }
  }

  return false;
};
