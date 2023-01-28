var lengthOfLIS = function (nums) {
  const arr = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i] && arr[j] + 1 > arr[i]) arr[i] = arr[j] + 1;
    }
  }

  return Math.max(...arr);
};
