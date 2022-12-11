var minPathSum = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const result = [];

  for (let i = 0; i < m; i++) {
    result.push(Array(n).fill(0));
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0) {
        if (j === 0) {
          result[i][j] = grid[i][j];
        } else {
          result[i][j] = grid[i][j] + result[i][j - 1];
        }
      } else {
        if (j === 0) {
          result[i][j] = grid[i][j] + result[i - 1][j];
        } else {
          result[i][j] =
            grid[i][j] + Math.min(result[i - 1][j], result[i][j - 1]);
        }
      }
    }
  }

  return result[m - 1][n - 1];
};
