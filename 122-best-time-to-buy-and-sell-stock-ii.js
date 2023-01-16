var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  let totalProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > minPrice) {
      totalProfit += prices[i] - minPrice;
      minPrice = prices[i];
    } else {
      minPrice = Math.min(minPrice, prices[i]);
    }
  }

  return totalProfit;
};

// using stack

var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  const stack = [];
  let totalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (stack.length && stack[stack.length - 1] < prices[i]) {
      totalProfit += prices[i] - stack.pop();
    }

    stack.push(prices[i]);
  }

  return totalProfit;
};

// minPrice를 tracking할 필요 없음
// 무한대로 사고 팔 수 있기 때문에 이전보다 가격이 오른 경우 바로 팔아서 수익을 보면 되기 때문

var maxProfit = function (prices) {
  if (prices.length === 1) return 0;

  let totalProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    const curProfit = prices[i] - prices[i - 1];

    if (curProfit > 0) totalProfit += curProfit;
  }

  return totalProfit;
};
