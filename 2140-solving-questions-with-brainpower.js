var mostPoints = function (questions) {
  const { length } = questions;
  const maxPointsArr = Array(length).fill(0);
  maxPointsArr[length - 1] = questions[length - 1][0];

  for (let i = length - 2; i >= 0; i--) {
    const [points, brainpower] = questions[i];
    if (i + brainpower + 1 < length)
      maxPointsArr[i] = Math.max(
        points + maxPointsArr[i + brainpower + 1],
        maxPointsArr[i + 1]
      );
    else maxPointsArr[i] = Math.max(points, maxPointsArr[i + 1]);
  }

  return maxPointsArr[0];
};
