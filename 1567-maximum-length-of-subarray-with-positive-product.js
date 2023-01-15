var getMaxLen = function (nums) {
  if (nums.length === 1) return nums[0] > 0 ? 1 : 0;

  let max = 0;
  const splittedArr = [];

  let startIdx = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      splittedArr.push(nums.slice(startIdx, i));
      startIdx = i + 1;
    }
  }

  if (startIdx < nums.length) splittedArr.push(nums.slice(startIdx));

  for (let el of splittedArr) {
    const countMinus = [];

    for (let i = 0; i < el.length; i++) {
      if (el[i] < 0) countMinus.push(i);
    }

    if (countMinus.length % 2 === 0) {
      max = Math.max(max, el.length);
    } else {
      localMax = Math.max(
        el.slice(0, countMinus[countMinus.length - 1]).length,
        el.slice(countMinus[0] + 1).length
      );
      max = Math.max(max, localMax);
    }
  }

  return max;
};
