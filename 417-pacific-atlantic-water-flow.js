var pacificAtlantic = function (heights) {
  const results = [];

  for (let i = 0; i < heights.length; i++) {
    for (let j = 0; j < heights[0].length; j++) {
      const visitedPacific = Array(heights.length)
        .fill("")
        .map(() => Array(heights[0].length).fill(0));
      const visitedAtlantic = Array(heights.length)
        .fill("")
        .map(() => Array(heights[0].length).fill(0));
      const currentHeight = heights[i][j];

      if (
        canVisitPacific(i, j, currentHeight, visitedPacific) &&
        canVisitAtlantic(i, j, currentHeight, visitedAtlantic)
      )
        results.push([i, j]);
    }
  }

  function canVisitPacific(i, j, currentHeight, visitedPacific) {
    if (
      i < 0 ||
      j < 0 ||
      i >= heights.length ||
      j >= heights[0].length ||
      visitedPacific[i][j] ||
      heights[i][j] > currentHeight
    )
      return false;

    visitedPacific[i][j] = 1;

    if ((i === 0 || j === 0) && heights[i][j] <= currentHeight) return true;

    return (
      canVisitPacific(i + 1, j, heights[i][j], visitedPacific) ||
      canVisitPacific(i - 1, j, heights[i][j], visitedPacific) ||
      canVisitPacific(i, j + 1, heights[i][j], visitedPacific) ||
      canVisitPacific(i, j - 1, heights[i][j], visitedPacific)
    );
  }

  function canVisitAtlantic(i, j, currentHeight, visitedAtlantic) {
    if (
      i < 0 ||
      j < 0 ||
      i >= heights.length ||
      j >= heights[0].length ||
      visitedAtlantic[i][j] ||
      heights[i][j] > currentHeight
    )
      return false;

    visitedAtlantic[i][j] = 1;

    if (
      (i === heights.length - 1 || j === heights[0].length - 1) &&
      heights[i][j] <= currentHeight
    )
      return true;

    return (
      canVisitAtlantic(i + 1, j, heights[i][j], visitedAtlantic) ||
      canVisitAtlantic(i - 1, j, heights[i][j], visitedAtlantic) ||
      canVisitAtlantic(i, j + 1, heights[i][j], visitedAtlantic) ||
      canVisitAtlantic(i, j - 1, heights[i][j], visitedAtlantic)
    );
  }

  return results;
};

// Using Queue

var pacificAtlantic = function (heights) {
  const m = heights.length;
  const n = heights[0].length;

  const pacific = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  const atlantic = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));

  const pacificQueue = [];
  const atlanticQueue = [];

  const dx = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        pacificQueue.push([i, j]);
        pacific[i][j] = 1;
      }

      if (i === m - 1 || j === n - 1) {
        atlanticQueue.push([i, j]);
        atlantic[i][j] = 1;
      }
    }
  }

  while (pacificQueue.length) {
    const [i, j] = pacificQueue.shift();

    dx.forEach(([y, x]) => {
      const yPos = i + y;
      const xPos = j + x;

      if (yPos < 0 || xPos < 0 || yPos >= m || xPos >= n || pacific[yPos][xPos])
        return;

      if (heights[yPos][xPos] >= heights[i][j]) {
        pacific[yPos][xPos] = 1;
        pacificQueue.push([yPos, xPos]);
      }
    });
  }

  while (atlanticQueue.length) {
    const [i, j] = atlanticQueue.shift();

    dx.forEach(([y, x]) => {
      const yPos = i + y;
      const xPos = j + x;

      if (
        yPos < 0 ||
        xPos < 0 ||
        yPos >= m ||
        xPos >= n ||
        atlantic[yPos][xPos]
      )
        return;

      if (heights[yPos][xPos] >= heights[i][j]) {
        atlantic[yPos][xPos] = 1;
        atlanticQueue.push([yPos, xPos]);
      }
    });
  }

  const result = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacific[i][j] === 1 && atlantic[i][j] === 1) result.push([i, j]);
    }
  }

  return result;
};
