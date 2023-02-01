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
