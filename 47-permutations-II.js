var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);

  const combinations = getPermutations(nums, nums.length);

  return combinations;
};

function getPermutations(arr, num) {
  const result = [];

  if (num === 1) {
    return arr.map((el) => [el]);
  }

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && arr[i] === arr[i - 1]) continue;
    const sliced = [...arr.slice(0, i), ...arr.slice(i + 1)];
    const permutations = getPermutations(sliced, num - 1);
    const attached = permutations.map((el) => [arr[i], ...el]);
    result.push(...attached);
  }

  return result;
}
