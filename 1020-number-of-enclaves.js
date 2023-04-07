var numEnclaves = function (grid) {
  grid = [
    Array(grid[0].length).fill(1),
    ...grid,
    Array(grid[0].length).fill(1),
  ];
  grid = grid.map((row) => [1, ...row, 1]);

  const visited = Array(grid.length)
    .fill(0)
    .map((el) => Array(grid[0].length).fill(0));
  let enclaves = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!grid[i][j] || visited[i][j]) continue;

      const result = bfs(i, j, grid, visited);
      if (i !== 0 && j !== 0) enclaves += result;
    }
  }

  return enclaves;
};

const bfs = (i, j, grid, visited) => {
  const queue = [];
  const dx = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  queue.push([i, j]);
  visited[i][j] = 1;
  let enclaves = 1;

  while (queue.length) {
    const [i, j] = queue.shift();

    dx.forEach(([y, x]) => {
      const yPos = i + y;
      const xPos = j + x;

      if (
        yPos < 0 ||
        yPos >= grid.length ||
        xPos < 0 ||
        xPos >= grid[0].length ||
        grid[yPos][xPos] === 0 ||
        visited[yPos][xPos]
      )
        return;

      visited[yPos][xPos] = 1;
      queue.push([yPos, xPos]);
      enclaves++;
    });
  }

  return enclaves;
};

// shorter

var numEnclaves = function (grid) {
  grid = [
    Array(grid[0].length).fill(1),
    ...grid,
    Array(grid[0].length).fill(1),
  ];
  grid = grid.map((row) => [1, ...row, 1]);

  let enclaves = 0;

  bfs2(0, 0, grid);

  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid[0].length - 1; j++) {
      if (grid[i][j] === 1) enclaves++;
    }
  }

  return enclaves;
};

const bfs2 = (i, j, grid) => {
  const queue = [];
  const dx = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  queue.push([i, j]);
  grid[i][j] = 0;

  while (queue.length) {
    const [i, j] = queue.shift();

    dx.forEach(([y, x]) => {
      const yPos = i + y;
      const xPos = j + x;

      if (
        yPos < 0 ||
        yPos >= grid.length ||
        xPos < 0 ||
        xPos >= grid[0].length ||
        grid[yPos][xPos] === 0
      )
        return;

      queue.push([yPos, xPos]);
      grid[yPos][xPos] = 0;
    });
  }
};
