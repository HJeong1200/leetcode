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

// using DFS

var islandPerimeter = function (grid) {
  let visited = Array(grid.length).fill(0);
  visited = visited.map(() => Array(grid[0].length).fill(0));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 0) continue;

      return islandDFS(grid, visited, i, j);
    }
  }

  return 0;
};

const islandDFS = (grid, visited, i, j) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return 1;
  if (visited[i][j]) return 0;
  if (grid[i][j] === 0) return 1;

  visited[i][j] = 1;

  return (
    islandDFS(grid, visited, i + 1, j) +
    islandDFS(grid, visited, i - 1, j) +
    islandDFS(grid, visited, i, j + 1) +
    islandDFS(grid, visited, i, j - 1)
  );
};
