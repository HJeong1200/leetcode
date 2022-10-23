var findErrorNums = function (nums) {
  let set = new Set();
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      result.push(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!set.has(i)) {
      result.push(i);
    }
  }

  return result;
};
