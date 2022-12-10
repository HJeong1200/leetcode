var uniquePaths = function (m, n) {
  const matrix = [];
  for (let i = 0; i < m; i++) {
    if (i === 0) {
      matrix.push(Array(n).fill(1));
    } else {
      matrix.push(Array(n).fill(0));
      matrix[i][0] = 1;
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
    }
  }

  return matrix[m - 1][n - 1];
};
