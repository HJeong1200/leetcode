var combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  function permute(subSet, sum, idx) {
    if (sum > target) return;
    if (sum === target) result.push(subSet);

    for (let i = idx; i < candidates.length; i++) {
      if (i > idx && candidates[i] === candidates[i - 1]) continue;
      permute([...subSet, candidates[i]], sum + candidates[i], i + 1);
    }
  }

  permute([], 0, 0);

  return result;
};
