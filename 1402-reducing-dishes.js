var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b);
  const prefix = satisfaction.slice();

  for (let i = prefix.length - 2; i >= 0; i--) {
    prefix[i] += prefix[i + 1];
  }

  let max = 0;

  for (let i = prefix.length - 1; i >= 0; i--) {
    if (i !== prefix.length - 1) {
      prefix[i] += prefix[i + 1];
    }

    max = Math.max(prefix[i], max);
  }

  return max;
};

// Optimized

var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b);
  let max = 0;
  let suffixSum = 0;

  for (let i = satisfaction.length - 1; i >= 0; i--) {
    suffixSum += satisfaction[i];

    max = Math.max(max, max + suffixSum);
  }

  return max;
};
