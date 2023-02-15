var shortestBridge = function (grid) {
  let result = 0;
  const dx = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [];
  const visited = Array(grid.length)
    .fill(0)
    .map(() => Array(grid.length).fill(0));

  outer: for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (grid[i][j] === 1) {
        searchIsland(i, j, grid, queue, dx);
        break outer;
      }
    }
  }

  while (queue.length) {
    const [i, j, distance] = queue.shift();
    visited[i][j] = 1;

    dx.forEach(([y, x]) => {
      const yPos = y + i;
      const xPos = x + j;

      if (
        yPos < 0 ||
        xPos < 0 ||
        yPos >= grid.length ||
        xPos >= grid.length ||
        visited[yPos][xPos]
      )
        return;
      visited[yPos][xPos] = 1;

      if (grid[yPos][xPos] === 0) {
        queue.push([yPos, xPos, distance + 1]);
      }

      if (grid[yPos][xPos] === 1) {
        result = distance;
      }
    });

    if (result !== 0) return result;
  }
};

const searchIsland = (i, j, grid, queue, dx) => {
  const islandQueue = [[i, j]];
  const visited = Array(grid.length)
    .fill(0)
    .map(() => Array(grid.length).fill(0));

  while (islandQueue.length) {
    const [i, j] = islandQueue.shift();
    grid[i][j] = -1;
    visited[i][j] = 1;

    dx.forEach(([y, x]) => {
      const yPos = y + i;
      const xPos = x + j;

      if (
        yPos < 0 ||
        xPos < 0 ||
        yPos >= grid.length ||
        xPos >= grid.length ||
        visited[yPos][xPos]
      )
        return;
      visited[yPos][xPos] = 1;

      if (grid[yPos][xPos] === 1) {
        islandQueue.push([yPos, xPos]);
      }

      if (grid[yPos][xPos] === 0) {
        queue.push([yPos, xPos, 1]);
      }
    });
  }
};
