var findMinArrowShots = function (points) {
  if (points.length === 1) return 1;

  points.sort((a, b) => a[1] - b[1]);

  let arrows = 1;
  let right = points[0][1];

  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > right) {
      arrows++;
      right = points[i][1];
    }
  }

  return arrows;
};
