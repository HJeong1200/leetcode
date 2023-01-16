// wrong answer

var maxProfit = function (prices) {
  for (let i = 1; i < prices.length - 1; i++) {
    if (prices[minIndex] > prices[i]) {
      minIndex = i;
    }
  }

  let maxIndex = minIndex;

  for (let i = minIndex + 1; i < prices.length; i++) {
    if (prices[maxIndex] < prices[i]) {
      maxIndex = i;
    }
  }

  if (minIndex === maxIndex) {
    return 0;
  } else {
    return prices[maxIndex] - prices[minIndex];
  }
};

// time limit exceeded

var maxProfit = function (prices) {
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (profit < prices[j] - prices[i]) {
        profit = prices[j] - prices[i];
      }
    }
  }
  return profit;
};

// wrong answer

var maxProfit = function (prices) {
  let smallestIdx = 0;
  let largestIdx = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[smallestIdx] > prices[i]) {
      smallestIdx = i;
    }
    if (prices[largestIdx] < prices[i]) {
      largestIdx = i;
    }
  }

  let profit1 = 0;
  let profit2 = 0;

  for (let i = smallestIdx + 1; i < prices.length; i++) {
    if (profit1 < prices[i] - prices[smallestIdx]) {
      profit1 = prices[i] - prices[smallestIdx];
    }
  }

  for (let i = 0; i < largestIdx; i++) {
    if (profit2 < prices[largestIdx] - prices[i]) {
      profit2 = prices[largestIdx] - prices[i];
    }
  }

  if (profit1 < profit2) {
    return profit2;
  } else {
    return profit1;
  }
};

// Kadence's algorithm

var maxProfit = function (arr) {
  let start = 0;
  let maxProfit = 0;
  let currProfit;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[start] >= arr[i] - arr[i - 1]) {
      currProfit = arr[i] - arr[start];
    } else {
      currProfit = arr[i] - arr[i - 1];
      start = i - 1;
    }

    if (currProfit >= maxProfit) {
      maxProfit = currProfit;
    }
  }

  return maxProfit;
};

/**
 *  arr[i]에서의 최댓값은 arr[i] - arr[i - 1] or arr[i] - arr[start] where start = arr[i - 1]에서의 최댓값을 나타내는 시작 인덱스.
 */

// 뭘 저리 복잡하게 풀었지..?

var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxProfit;
};
