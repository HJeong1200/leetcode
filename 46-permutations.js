var permute = function (nums) {
  const result = [];

  if (nums.length === 1) return nums.map((el) => [el]);

  for (let i = 0; i < nums.length; i++) {
    const sliced = [...nums.slice(0, i), ...nums.slice(i + 1)];
    const permutation = permute(sliced);
    const attached = permutation.map((el) => [nums[i], ...el]);
    result.push(...attached);
  }

  return result;
};
