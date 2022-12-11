// Bubble Sort

var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length - i; j++) {
      if (nums[j - 1] > nums[j]) {
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      }
    }
  }
};

// Insertion sort

var sortColors = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    let temp = nums[i];
    let prev = i - 1;

    while (prev >= 0 && nums[prev] > temp) {
      nums[prev + 1] = nums[prev];
      prev--;
    }

    nums[prev + 1] = temp;
  }
};
