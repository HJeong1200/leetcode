var findLengthOfLCIS = function (nums) {
  let counter = 1;
  let longest = counter;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      counter++;
    } else {
      longest = Math.max(counter, longest);
      counter = 1;
    }
  }

  longest = Math.max(counter, longest);
  return longest;
};
