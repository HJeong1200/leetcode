var finalPrices = function (prices) {
  let discount = [];

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        discount[i] = prices[j];
        break;
      }
    }

    if (!discount[i]) {
      discount[i] = 0;
    }
  }

  for (let i = 0; i < discount.length; i++) {
    discount[i] = prices[i] - discount[i];
  }

  return discount;
};

/**
 * Using monotonic stack
 *
 * Stack에 price가 아닌 index를 기록하는 이유?
 *
 */

var finalPrices = function (prices) {
  let stack = [];
  let result = prices.slice();

  for (let i = 0; i < prices.length; i++) {
    while (stack.length && prices[stack[stack.length - 1]] >= prices[i]) {
      let index = stack.pop();
      result[index] = prices[index] - prices[i];
    }

    stack.push(i);
  }

  return result;
};
