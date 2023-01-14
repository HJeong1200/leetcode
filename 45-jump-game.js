var jump = function (nums) {
  if (nums.length === 1) return 0;

  const lastIndex = nums.length - 1;
  const jumpsCount = Array(nums.length - 1).fill(0);

  for (let i = nums.length - 2; i >= 0; i--) {
    if (nums[i] === 0) jumpsCount[i] = Infinity;
    else if (nums[i] + i >= lastIndex) jumpsCount[i] = 1;
    else
      jumpsCount[i] = Math.min(...jumpsCount.slice(i + 1, i + nums[i] + 1)) + 1;
  }

  return jumpsCount[0];
};

// 앞에서부터

var jump = function (nums) {
  if (nums.length === 1) return 0;

  const lastIndex = nums.length - 1;
  const jumpsCount = Array(nums.length - 1).fill(Infinity);
  jumpsCount[0] = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) continue;

    for (
      let j = i + 1;
      j <= Math.min(jumpsCount.length - 1, i + nums[i]);
      j++
    ) {
      jumpsCount[j] = Math.min(jumpsCount[j], jumpsCount[i] + 1);
    }

    if (nums[i] + i >= lastIndex) return jumpsCount[i] + 1;
  }
};
