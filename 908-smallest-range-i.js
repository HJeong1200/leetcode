var smallestRangeI = function (nums, k) {
  let min = Infinity;
  let max = -Infinity;

  for (let num of nums) {
    min = Math.min(num, min);
    max = Math.max(num, max);
  }

  if (max - min <= 2 * k) return 0;

  return max - min - 2 * k;
};
