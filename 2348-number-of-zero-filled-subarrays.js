var zeroFilledSubarray = function (nums) {
  let result = 0;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) continue;

    if (nums[i - 1] !== 0) left = i;
    result += i - left + 1;
  }

  return result;
};
