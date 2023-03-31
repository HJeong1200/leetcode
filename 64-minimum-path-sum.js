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

// 2023.03

var minPathSum = function (grid) {
  grid.unshift(Array(grid[0].length).fill(Infinity));
  grid.map((row) => row.unshift(Infinity));

  for (let i = 1; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      if (i === 1 && j === 1) continue;

      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};
