var isToeplitzMatrix = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < n - 1; i++) {
    let num = matrix[0][i];

    for (let j = 1; j < m; j++) {
      if (i + j < n && num !== matrix[j][i + j]) {
        return false;
      }
    }
  }

  for (let i = 1; i < m - 1; i++) {
    let num = matrix[i][0];

    for (let j = 1; j < n; j++) {
      if (i + j < m && num !== matrix[i + j][j]) {
        return false;
      }
    }
  }

  return true;
};

// 내가 한 방식은 줄별로 비교하는 방식
// 가로줄과 세로줄을 한번씩 찾아야 해서 코드가 길어지는 문제
// 굳이 줄별로 비교할 필요 없이 현재 칸의 수가 대각선 한칸 위의 수와 동일한지만 비교해도 됨

var isToeplitzMatrix = function (matrix) {
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false;
      }
    }
  }

  return true;
};
