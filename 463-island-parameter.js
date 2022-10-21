var islandPerimeter = function (grid) {
  let parameters = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        parameters += 4;

        if (j > 0 && grid[i][j - 1] === 1) {
          parameters--;
        }
        if (j < grid[i].length - 1 && grid[i][j + 1] === 1) {
          parameters--;
        }
        if (i > 0 && grid[i - 1][j] === 1) {
          parameters--;
        }
        if (i < grid.length - 1 && grid[i + 1][j] === 1) {
          parameters--;
        }
      }
    }
  }

  return parameters;
};
