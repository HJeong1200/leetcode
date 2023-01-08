var runningSum = function (nums) {
  const result = nums.slice();

  for (let i = 1; i < result.length; i++) {
    result[i] += result[i - 1];
  }

  return result;
};
