var sortArray = function (nums) {
  if (nums.length === 1) return nums;

  return quickSort(nums, 0, nums.length - 1);
};

const quickSort = (nums, left, right) => {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  const pivot = nums[mid];
  const partition = divide(nums, left, right, pivot);

  quickSort(nums, left, partition - 1);
  quickSort(nums, partition, right);

  return nums;
};

const divide = (nums, left, right, pivot) => {
  while (left <= right) {
    while (nums[left] < pivot) left++;
    while (nums[right] > pivot) right--;

    if (left <= right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];

      left++;
      right--;
    }
  }

  return left;
};
