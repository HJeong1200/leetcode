var nearestExit = function (maze, entrance) {
  const [a, b] = entrance;
  const queue = hasClosedBoundary(maze, a, b);
  const dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  let result = -1;

  while (queue.length) {
    if (result !== -1) return result;

    const [i, j, distance] = queue.shift();

    dir.forEach(([y, x]) => {
      const yPos = i + y;
      const xPos = j + x;

      if (
        yPos < 0 ||
        xPos < 0 ||
        yPos >= maze.length ||
        xPos >= maze[0].length ||
        maze[yPos][xPos] === "+"
      )
        return;
      if (yPos === entrance[0] && xPos === entrance[1]) result = distance + 1;
      maze[yPos][xPos] = "+";
      queue.push([yPos, xPos, distance + 1]);
    });
  }

  return result;
};

function hasClosedBoundary(maze, a, b) {
  const queue = [];

  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[0].length; j++) {
      if (i === a && j === b) continue;
      if (
        (i === 0 ||
          i === maze.length - 1 ||
          j === 0 ||
          j === maze[0].length - 1) &&
        maze[i][j] === "."
      ) {
        queue.push([i, j, 0]);
      }
    }
  }

  return queue;
}
