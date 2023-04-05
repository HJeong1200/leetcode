var minimizeArrayValue = function (nums) {
  let max = 0;
  let prefix = 0;

  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i];
    max = Math.max(max, Math.ceil(prefix / (i + 1)));
  }

  return max;
};
