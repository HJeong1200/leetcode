var isMonotonic = function (nums) {
  if (nums[0] < nums[nums.length - 1]) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        return false;
      }
    }
  } else if (nums[0] > nums[nums.length - 1]) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
        return false;
      }
    }
  } else {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] !== nums[i - 1]) {
        return false;
      }
    }
  }

  return true;
};
