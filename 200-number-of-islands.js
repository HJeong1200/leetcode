var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let islands = 0;
  const visited = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "0") continue;
      if (!visited[i][j]) islands++;

      checkIsland(grid, visited, i, j);
    }
  }

  return islands;
};

const checkIsland = (grid, visited, i, j) => {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;
  if (visited[i][j]) return;
  if (grid[i][j] === "0") return;

  visited[i][j] = 1;

  checkIsland(grid, visited, i + 1, j);
  checkIsland(grid, visited, i - 1, j);
  checkIsland(grid, visited, i, j + 1);
  checkIsland(grid, visited, i, j - 1);
};
