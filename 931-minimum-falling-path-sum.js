// DP

var minFallingPathSum = function (matrix) {
  const n = matrix.length;

  if (n === 1) return matrix[0][0];

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[i + 1][j - 1] === undefined) {
        matrix[i][j] += Math.min(matrix[i + 1][j], matrix[i + 1][j + 1]);
      } else if (matrix[i + 1][j + 1] === undefined) {
        matrix[i][j] += Math.min(matrix[i + 1][j - 1], matrix[i + 1][j]);
      } else {
        matrix[i][j] += Math.min(
          matrix[i + 1][j - 1],
          matrix[i + 1][j],
          matrix[i + 1][j + 1]
        );
      }
    }
  }

  return Math.min(...matrix[0]);
};

// Matrix의 맨 처음과 끝에 Infinity 넣기

var minFallingPathSum = function (matrix) {
  const n = matrix.length;

  if (n === 1) return matrix[0][0];

  for (let i = 0; i < n; i++) {
    matrix[i].unshift(Infinity);
    matrix[i].push(Infinity);
  }

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 1; j <= n; j++) {
      matrix[i][j] += Math.min(
        matrix[i + 1][j - 1],
        matrix[i + 1][j],
        matrix[i + 1][j + 1]
      );
    }
  }

  return Math.min(...matrix[0]);
};
