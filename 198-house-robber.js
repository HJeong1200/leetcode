var rob = function (nums) {
  if (nums.length <= 2) return Math.max(...nums);

  const arr = nums.slice();

  for (let i = 2; i < arr.length; i++) {
    arr[i] = Math.max(...arr.slice(0, i - 1)) + arr[i];
  }

  return Math.max(...arr);
};
