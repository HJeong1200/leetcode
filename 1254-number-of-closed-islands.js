var closedIsland = function (grid) {
  const visited = Array(grid.length)
    .fill(0)
    .map(() => Array(grid[0].length).fill(0));
  let result = 0;

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      if (grid[i][j]) continue;
      if (visited[i][j]) continue;

      const isClosed = checkClosed(grid, visited, i, j);

      if (isClosed) result++;
    }
  }

  return result;
};

function checkClosed(grid, visited, i, j) {
  const dx = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let status = true;

  const queue = [];

  queue.push([i, j]);

  while (queue.length) {
    const [i, j] = queue.shift();
    visited[i][j] = 1;

    dx.forEach(([y, x]) => {
      const yPos = i + y;
      const xPos = j + x;

      if (
        (yPos === 0 ||
          xPos === 0 ||
          yPos === grid.length - 1 ||
          xPos === grid[0].length - 1) &&
        grid[yPos][xPos] === 0
      ) {
        status = false;
        return;
      }
      if (
        yPos < 0 ||
        xPos < 0 ||
        yPos >= grid.length - 1 ||
        xPos >= grid[0].length - 1 ||
        visited[yPos][xPos] ||
        grid[yPos][xPos] === 1
      )
        return;

      queue.push([yPos, xPos]);
    });
  }

  return status;
}
