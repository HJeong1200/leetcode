var wiggleMaxLength = function (nums) {
  if (nums.length <= 2) return new Set(nums).size;
  if (new Set(nums).size === 1) return 1;

  let up = 1;
  let down = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) up = down + 1;
    else if (nums[i] < nums[i - 1]) down = up + 1;
  }

  return Math.max(down, up);
};
