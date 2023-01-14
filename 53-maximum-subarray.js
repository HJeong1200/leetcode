var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  let max = -Infinity;
  let curSum = 0;

  for (let i = 0; i < nums.length; i++) {
    curSum += nums[i];

    max = Math.max(max, curSum);

    if (curSum <= 0) {
      curSum = 0;
    }
  }

  return max;
};

// using Memoization - faster

var maxSubArray = function (nums) {
  if (nums.length === 1) return nums[0];

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);

    max = Math.max(nums[i], max);
  }

  return max;
};
