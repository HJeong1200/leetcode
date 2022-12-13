var combinationSum = function (candidates, target) {
  if (candidates.every((el) => el > target)) return [];

  const result = [];

  function permute(subSet, sum, idx) {
    if (sum === target) result.push(subSet);
    if (sum > target) return;

    for (let i = idx; i < candidates.length; i++) {
      permute([...subSet, candidates[i]], sum + candidates[i], i);
    }
  }

  permute([], 0, 0);

  return result;
};
