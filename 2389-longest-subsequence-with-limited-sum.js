var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const result = [];

  for (let target of queries) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
      sum += nums[i];

      if (sum < target && i === nums.length - 1) {
        result.push(i + 1);
      } else if (sum === target) {
        result.push(i + 1);
        break;
      } else if (sum > target) {
        result.push(i);
        break;
      }
    }
  }

  return result;
};

// Using prefix sum

var answerQueries = function (nums, queries) {
  nums.sort((a, b) => a - b);
  const result = [];
  const pSum = nums.slice();

  for (let i = 1; i < nums.length; i++) {
    pSum[i] += pSum[i - 1];
  }

  for (let target of queries) {
    let left = 0;
    let right = pSum.length - 1;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (pSum[mid] === target) {
        left = mid + 1;
        break;
      } else if (pSum[mid] > target) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    if (pSum[left] > target) {
      result.push(left);
    } else {
      result.push(left + 1);
    }
  }

  return result;
};
