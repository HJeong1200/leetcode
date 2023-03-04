var numberOfSubarrays = function (nums, k) {
  if (nums.length < k) return 0;

  const oddArr = [];
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2) oddArr.push(i);

    let last = oddArr.length;
    if (last < k) continue;

    if (last === k) result += oddArr[0] + 1;
    else result += oddArr[last - k] - oddArr[last - k - 1];
  }

  return result;
};
