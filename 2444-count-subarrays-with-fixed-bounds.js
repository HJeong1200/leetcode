var countSubarrays = function (nums, minK, maxK) {
  let result = 0;
  let min = -1;
  let max = -1;
  let outOfBound = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === minK) min = Math.max(min, i);
    if (nums[i] === maxK) max = Math.max(max, i);
    if (nums[i] < minK || nums[i] > maxK) outOfBound = Math.max(outOfBound, i);

    if (outOfBound >= min || outOfBound >= max) continue;

    result += Math.max(1, Math.min(min, max) - outOfBound);
  }

  return result;
};

// Two pointers - How many valid subarrays end at i?
