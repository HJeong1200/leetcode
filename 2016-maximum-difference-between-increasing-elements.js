var maximumDifference = function (nums) {
  let diff = -1;
  let start = 0;
  let currDiff;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[start] >= nums[i] - nums[i - 1]) {
      currDiff = nums[i] - nums[start];
    } else {
      currDiff = nums[i] - nums[i - 1];
      start = i - 1;
    }

    if (diff < currDiff) {
      diff = currDiff;
    }
  }

  if (diff <= 0) {
    return -1;
  } else {
    return diff;
  }
};
