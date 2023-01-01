var maxProduct = function (nums) {
  if (nums.length === 1) return nums[0];

  let minVal = nums[0];
  let maxVal = nums[0];
  let ans = maxVal;

  for (let i = 1; i < nums.length; i++) {
    let temp = maxVal;
    maxVal = Math.max(temp * nums[i], minVal * nums[i], nums[i]);
    minVal = Math.min(temp * nums[i], minVal * nums[i], nums[i]);

    ans = Math.max(ans, maxVal);
  }

  return ans;
};
