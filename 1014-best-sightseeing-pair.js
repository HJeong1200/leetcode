var maxScoreSightseeingPair = function (values) {
  rightArr = values.map((value, index) => value - index);
  leftArr = values.map((value, index) => value + index);

  let max = -Infinity;

  for (let i = 1; i < values.length; i++) {
    leftArr[i] = Math.max(leftArr[i - 1], leftArr[i]);
    rightArr[i] += leftArr[i - 1];

    max = Math.max(max, rightArr[i]);
  }

  return max;
};

// space optimization
// 배열에 모든 정보를 담을 필요 없음

var maxScoreSightseeingPair = function (values) {
  let curMax = values[0];
  let max = -Infinity;

  for (let i = 1; i < values.length; i++) {
    max = Math.max(max, values[i] - i + curMax);
    curMax = Math.max(curMax, values[i] + i);
  }

  return max;
};
